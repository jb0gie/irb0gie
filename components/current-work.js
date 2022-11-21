import { Heading, SimpleGrid } from '@chakra-ui/react'
import Section from './section'
import { WorkGridItem } from './grid-item'
import setThumb from '../public/images/works/the-set-logo.png'
import numbersThumb from '../public/images/works/numbersThumb.png'
import mv1Thumb from '../public/images/works/mv1thumb.png'
import mv2Thumb from '../public/images/works/mv2Thumb.png'
export const CurrentWork = () => (
  <>
    <Section delay={0.2}>
      <Heading as="h3" fontSize={20} mb={4}>
        ｃｕｒｒｅｎｔ　ｗｏｒｋｓ　哀ト億
      </Heading>
    </Section>
    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.3}>
        <WorkGridItem
          id="the-set"
          title="Ｔｈｅ　ｓｅｔ　ヅ愛彙"
          thumbnail={setThumb}
        ></WorkGridItem>
      </Section>
      <Section delay={0.3}>
        <WorkGridItem
          id="numbers"
          title="２４７４２０　愛マ化"
          thumbnail={numbersThumb}
        ></WorkGridItem>
      </Section>
      <Section delay={0.3}>
        <WorkGridItem
          id="stepping-into-the-ether"
          title="Ｓ.Ｉ.Ｔ.Ξ.　奥臆演"
          thumbnail={mv2Thumb}
        ></WorkGridItem>
      </Section>
      <Section delay={0.4}>
        <WorkGridItem
          id="cirque-de-soleil"
          title="Ｃ.Ｄ.Ｓ.　竹ヮの"
          thumbnail={mv1Thumb}
        ></WorkGridItem>
      </Section>
    </SimpleGrid>
  </>
)

export default CurrentWork
export { getServerSideProps } from '../components/chakra'