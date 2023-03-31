import { Heading, SimpleGrid } from '@chakra-ui/react'
import Section from './section'
import { WorkGridItem } from './grid-item'
import setThumb from '../public/images/works/the-set-logo.png'
import numbersThumb from '../public/images/works/numbersThumb.png'
import mv2Thumb from '../public/images/works/mv2Thumb.png'
export const CurrentWork = () => (
  <>
    <Section delay={0.2}>
      <Heading as="h3" fontSize={20} mb={4}>
        𝕔𝕦𝕣𝕣𝕖𝕟𝕥 𝕨𝕠𝕣𝕜𝕤
      </Heading>
    </Section>
    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.3}>
        <WorkGridItem
          id="site"
          title="𝕊.𝕀.𝕋.Ξ"
          thumbnail={mv2Thumb}
        ></WorkGridItem>
      </Section>
      <Section delay={0.3}>
        <WorkGridItem
          id="numbers"
          title="𝟚𝟜𝟟𝟜𝟚𝟘"
          thumbnail={numbersThumb}
        ></WorkGridItem>
      </Section>
      <Section delay={0.4}>
        <WorkGridItem
          id="the-set"
          title="𝕋𝕙𝕖 𝕤𝕖𝕥"
          thumbnail={setThumb}
        ></WorkGridItem>
      </Section>
    </SimpleGrid>
  </>
)

export default CurrentWork
export { getServerSideProps } from '../components/chakra'