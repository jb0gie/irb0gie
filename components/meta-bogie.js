import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { BogieSpinner, BogieContainer } from './meta-bogie-loader'

let mixer
const clock = new THREE.Clock()

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const MetaBogie = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  )
  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState()

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.005 + 4.8
      // const camera = new THREE.OrthographicCamera(
      //   -scale,
      //   scale,
      //   scale,
      //   -scale,
      //   0.01,
      //   50000
      // )
      const camera = new THREE.PerspectiveCamera(45, scW / scH, 0.01, 50000)
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target
      setControls(controls)

      // loadGLTFModel(scene, '/vlogspot.glb', {
      //   receiveShadow: false,
      //   castShadow: false
      // }).then(() => {

      //   animate()
      //   setLoading(false)
      // })

      const dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath('three/examples/js/libs/draco')

      const loader = new GLTFLoader()
      loader.setDRACOLoader(dracoLoader)
      loader.load(
        '/vlogspot.glb',
        function (gltf) {
          const model = gltf.scene
          model.position.set(1, 1, 0)
          // model.scale.set(0.01, 0.01, 0.01)

          mixer = new THREE.AnimationMixer(model)

          scene.add(model)

          const animations = gltf.animations

          mixer.clipAction(animations[1]).play()
          animate()
          setLoading(false)
        },
        undefined,
        function (e) {
          console.error(e)
        }
      )

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        const delta = clock.getDelta()

        mixer.update(delta)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        console.log('unmount')
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  return (
    <BogieContainer ref={refContainer}>
      {loading && <BogieSpinner />}
    </BogieContainer>
  )
}

export default MetaBogie
