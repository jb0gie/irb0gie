import { Heading, SimpleGrid } from '@chakra-ui/react'
import Section from './section'
import { WorkGridItem } from './grid-item'
// import setThumb from '../public/images/works/the-set-logo.png'
import numbersThumb from '../public/images/works/numbersThumb.png'
// import mv2Thumb from '../public/images/works/mv2Thumb.png'
import chillThumb from '../public/images/chililogo.png'
import gameThumb from '../public/images/works/spicex1.jpg'
export const CurrentWork = () => (
  <>
    <Section delay={0.2}>
      <Heading as="h3" fontSize={20} mb={4}>
        ℂ𝕌ℝℝ𝔼ℕ𝕋
      </Heading>
    </Section>
    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.3}>
        <WorkGridItem
          id="spicex"
          title="𝕊𝕡𝕚𝕔𝕖𝕏"
          thumbnail={gameThumb}
        ></WorkGridItem>
      </Section>
      <Section delay={0.3}>
        <WorkGridItem
          id="chill"
          title="ℂ𝕙𝕚𝕝𝕝𝕚𝕟𝕘ℂ𝕙𝕚𝕝𝕚𝕫"
          thumbnail={chillThumb}
        ></WorkGridItem>
      </Section>
      {/* <Section delay={0.3}>
        <WorkGridItem
          id="site"
          title="𝕊.𝕀.𝕋.Ξ"
          thumbnail={mv2Thumb}
        ></WorkGridItem>
      </Section> */}
      <Section delay={0.3}>
        <WorkGridItem
          id="numbers"
          title="𝟚𝟜𝟟𝟜𝟚𝟘"
          thumbnail={numbersThumb}
        ></WorkGridItem>
      </Section>
      {/* <Section delay={0.4}>
        <WorkGridItem
          id="the-set"
          title="𝕋𝕙𝕖 𝕤𝕖𝕥"
          thumbnail={setThumb}
        ></WorkGridItem>
      </Section> */}
    </SimpleGrid>
  </>
)

export default CurrentWork
export { getServerSideProps } from '../components/chakra'
