import { Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from './section'
import { WorkGridItem } from './grid-item'
import olewrk1Thumb from '../public/images/works/olewrk1.png'
import olewrk2Thumb from '../public/images/works/olewrk2.png'
import olewrk3Thumb from '../public/images/works/olewrk3.png'
export const PastWork = () => (
  <>
    <Section delay={0.4}>
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        ℙ𝔸𝕊𝕋
      </Heading>
    </Section>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.5}>
        <WorkGridItem id="ships" thumbnail={olewrk1Thumb} title="Ships">
          a native android app.
        </WorkGridItem>
      </Section>
      <Section delay={0.5}>
        <WorkGridItem
          id="ruleofroad"
          thumbnail={olewrk2Thumb}
          title="Rule of the road"
        >
          an interactive concept　demonstator.
        </WorkGridItem>
      </Section>
      <Section delay={0.6}>
        <WorkGridItem
          id="serversimrepair"
          thumbnail={olewrk3Thumb}
          title="Server Repair Sim"
        >
          a virtualised concept training solution.
        </WorkGridItem>
      </Section>
    </SimpleGrid>
  </>
)

export default PastWork
export { getServerSideProps } from '../components/chakra'
