import { Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from './section'
import { GridItem, WorkGridItem } from './grid-item'
import mgThumb from '../public/images/works/metagame.png'
import mdThumb from '../public/images/works/mdThumb.png'
import wonfiddyThumb from '../public/images/works/wonfiddy.png'
import mbThumb from '../public/images/works/mbThumb.png'
import vcgThumb from '../public/images/works/vcgThumb.png'
import chillThumb from '../public/images/cc.png'
import howieThumb from '../public/images/howie.png'
import evoThumb from '../public/images/evo.png'
import lanthumb from '../public/images/lan.png'
export const Collabs = () => (
  <>
    <Section delay={0.2}>
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        ℂ𝕆𝕃𝕃𝔸𝔹𝕊
      </Heading>
    </Section>
    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.3}>
        <GridItem
          href="https://howieduhzit.best"
          title="𝕙𝕠𝕨𝕚𝕖𝕕𝕦𝕙𝕫𝕚𝕥"
          thumbnail={howieThumb}
        >
          No one really know's Howie Duhzit
        </GridItem>
      </Section>
      <Section delay={0.3}>
        <GridItem
          href="https://wavebinder.co.uk"
          title="𝕨𝕒𝕧𝕖𝕓𝕚𝕟𝕕𝕖𝕣"
          thumbnail={evoThumb}
        >
          3d Musician a.k.a DJ WAVEBINDER
        </GridItem>
      </Section>
      <Section>
        <GridItem
          href="https://lenster.xyz/u/teknopath"
          title="𝕥𝕖𝕜𝕟𝕠𝕡𝕒𝕥𝕙"
          thumbnail={lanthumb}
        >
          A coding wizard.
        </GridItem>
      </Section>
      <Section delay={0.3}>
        <WorkGridItem id="chiliz" title="ℂ𝕙𝕚𝕝𝕝𝕚𝕟𝕘ℂ𝕙𝕚𝕝𝕚𝕫" thumbnail={chillThumb}>
          The Chillest lab in all the metaverse.
        </WorkGridItem>
      </Section>
      <Section delay={0.3}>
        <WorkGridItem id="mg" title="𝕄𝕖𝕥𝕒𝔾𝕒𝕞𝕖🐙" thumbnail={mgThumb}>
          A Massive Online Coordination Game
        </WorkGridItem>
      </Section>
      <Section delay={0.3}>
        <WorkGridItem id="md" title="𝕄𝕠𝕝𝕠𝕔𝕙 𝔻𝕚𝕘𝕚𝕥𝕒𝕝" thumbnail={mdThumb}>
          Creating Cross-DAO collaboration in the Meta-Verse
        </WorkGridItem>
      </Section>
      <Section delay={0.3}>
        <WorkGridItem id="wonfiddy" title="𝕨𝕠𝕟𝕗𝕚𝕕𝕕𝕪" thumbnail={wonfiddyThumb}>
          the first <code>#wishmaker</code> &amp; dear fren
        </WorkGridItem>
      </Section>
      <Section delay={0.3}>
        <WorkGridItem id="mb" title="𝕄𝕖𝕥𝕒-𝕓𝕦𝕚𝕝𝕕𝕖𝕣𝕤" thumbnail={mbThumb}>
          a community of industry partners building in Web3.
        </WorkGridItem>
      </Section>
      <Section delay={0.3}>
        <WorkGridItem id="vcg" title="𝕍𝕖𝕘𝕒𝕤 ℂ𝕣𝕪𝕡𝕥𝕠 𝔾𝕣𝕠𝕦𝕡" thumbnail={vcgThumb}>
          A meetup group about self-ownership, free exchange, and emerging
          technology.
        </WorkGridItem>
      </Section>
    </SimpleGrid>
  </>
)
export default Collabs
export { getServerSideProps } from '../components/chakra'
