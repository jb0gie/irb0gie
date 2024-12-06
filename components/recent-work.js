import { Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from './section'
import { WorkGridItem } from './grid-item'
import kinThumb from '../public/images/works/kin.png'
// import jeffThumb from '../public/images/works/jeff.png'
import mfThumb from '../public/images/works/mf2-logo.png'
import swagtagThumb from '../public/images/works/swagtag.png'
import monaThumb from '../public/images/works/monaThumb.png'
import mv1Thumb from '../public/images/works/mv1thumb.png'
import s3Thumb from '../public/images/s3.png'


import pendingThumb from '../public/images/works/pending.png'
export const RecentWork = () => (
  <>
    <Section delay={0.4}>
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        ℝ𝔼ℂ𝔼ℕ𝕋
      </Heading>
    </Section>
    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      
      <Section delay={0.5}>
        <WorkGridItem id="s3" title="𝕤𝟛 𝕟+𝕨" thumbnail={s3Thumb}>
          Season 3 buildspace hackathon
        </WorkGridItem>
      </Section>
      {/* <Section delay={0.5}>
        <WorkGridItem id="namejeff" title="𝕟𝕒𝕞𝕖𝕛𝕖𝕗𝕗" thumbnail={jeffThumb}>
          thought i'd try out <code>astro.dev</code> out.
        </WorkGridItem>
      </Section> */}
      <Section delay={0.5}>
        <WorkGridItem id="kin" title="𝕌𝕣𝕓á𝕟𝕚𝕜𝕒" thumbnail={kinThumb}>
          a propaganda machine for the <code>crypto-commons</code>.
        </WorkGridItem>
      </Section>
      <Section delay={0.6}>
        <WorkGridItem id="metafest" title="𝕄𝕖𝕥𝕒𝔽𝕖𝕤𝕥𝟚" thumbnail={mfThumb}>
          Live event, Powered by Metagame🐙 <pre>JUN9~23</pre>
        </WorkGridItem>
      </Section>
      {/* <Section delay={0.6}>
        <WorkGridItem
          id="hyperwebchat"
          title="ｈｙｐｅｒ~ｗｅｂｃｈａｔ　ぢど液"
          thumbnail={pendingThumb}
        >
          yet another <code>internet breaking</code> entrypoint project
        </WorkGridItem>
      </Section> */}
      <Section delay={0.7}>
        <WorkGridItem id="swagtag" title="𝕤𝕨𝕒𝕘𝕥𝕒𝕘" thumbnail={swagtagThumb}>
          <del>swagtag - instant domains</del>{' '}
          <del>
            <pre>then adaptogen</pre>
          </del>{' '}
          <pre>now hyper~bolic</pre>
        </WorkGridItem>
      </Section>
      <Section delay={0.8}>
        <WorkGridItem id="mona" title="𝕄𝕠𝕟𝕒" thumbnail={monaThumb}>
          🥉 place winner in a hackathon
        </WorkGridItem>
      </Section>
      <Section delay={0.8}>
        <WorkGridItem id="cirque-de-soleil" title="ℂ.𝔻.𝕊" thumbnail={mv1Thumb}>
          A worthwhile experiment in which I gained immeasurable EXP.
        </WorkGridItem>
      </Section>
    </SimpleGrid>
  </>
)

export default RecentWork
export { getServerSideProps } from '../components/chakra'
