import { Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from './section'
import { WorkGridItem } from './grid-item'
import mgThumb from '../public/images/works/metagame.png'
import mdThumb from '../public/images/works/mdThumb.png'
import wonfiddyThumb from '../public/images/works/wonfiddy.png'
import mbThumb from '../public/images/works/mb-logo.png'

export const Collabs = () => (
  <>
    <Section delay={0.2}>
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        ｃｏｌｌａｂｓ　ゟゑか
      </Heading>
    </Section>
    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.3}>
        <WorkGridItem
          id="metagame"
          title="Ｍｅｔａｇａｍｅ🐙　 雲じ"
          thumbnail={mgThumb}
        >
          A Massive Online Coordination Game
        </WorkGridItem>
      </Section>

      <Section delay={0.3}>
        <WorkGridItem
          id="moloch"
          title="Ｍｏｌｏｃｈ　Ｄｉｇｉｔａｌ　モぺは"
          thumbnail={mdThumb}
        >
          Creating Cross-DAO
          collaboration in the Meta-Verse
        </WorkGridItem>
      </Section>

      <Section delay={0.3}>
        <WorkGridItem
          id="wonfiddy"
          thumbnail={wonfiddyThumb}
          title="ｗｏｎｆｉｄｄｙ．ｅｔｈ　ス鋭わ"
        >
          the first <code>#wishmaker</code> &amp; dear fren
        </WorkGridItem>
      </Section>

      <Section delay={0.3}>
        <WorkGridItem
          id="metabuilders"
          title="Ｍｅｔａｂｕｉｌｄｅｒｓ　ーヒ育"
          thumbnail={mbThumb}
        >
          a passionate community of industry partners building in Web3 and the
          Metaverse
        </WorkGridItem>
      </Section>
    </SimpleGrid>
  </>
)
export default Collabs
export { getServerSideProps } from '../components/chakra'
