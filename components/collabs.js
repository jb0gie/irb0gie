import { Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from './section'
import { WorkGridItem } from './grid-item'
import mgThumb from '../public/images/works/metagame.png'
import mdThumb from '../public/images/works/mdThumb.png'
import wonfiddyThumb from '../public/images/works/wonfiddy.png'
import mbThumb from '../public/images/works/mb-logo.png'
import vcgThumb from '../public/image/works/vcgThumb.png'

export const Collabs = () => (
  <>
    <Section delay={0.2}>
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        ℂ𝕠𝕝𝕝𝕒𝕓𝕤
      </Heading>
    </Section>
    <SimpleGrid columns={[1, 1, 2]} gap={6}>
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
