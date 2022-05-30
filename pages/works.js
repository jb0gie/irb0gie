import { Container, Heading, SimpleGrid, Divider, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import swagtagThumb from '../public/images/works/swagtag.png'
import metagameThumb from '../public/images/works/metagame.png'
import wonfiddyThumb from '../public/images/works/wonfiddy.png'
// import olewrk1Thumb from '../public/images/works/olewrk1.png'
// import olewrk2Thumb from '../public/images/works/olewrk2.png'
// import olewrk3Thumb from '../public/images/works/olewrk3.png'
import pendingThumb from '../public/images/works/pending.png'

const Works = () => (
  <Layout title="ｗｏｒｋｓ">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        ＣＵＲＲＥＮＴ　ＷＯＲＫＳ。
      </Heading>
      {/* current */}
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="kin" title="kin savior of humanity" thumb={kinThumb}>
            My greatest achievement(s) to-date: the creation of a Kin savior of humanity.
            A solar punk Alien who is able to save humanity from the destruction of the nefarious 
            Moloch. The Avatars are the most effort thing i've done so far.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="hyper-webchat" title="hyper-webchat" thumbnail={pendingThumb}>
            ＹＡｉｂＥｎｔ project - Yet another <code>internet breaking</code>{' '}
            Entrypoint project 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="swagtag" title="swagtag" thumbnail={swagtagThumb}>
            swagtag - instant domains 
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          ＣＯＬＬＡＢＳ。
        </Heading>
      </Section>
      {/* collabs */}
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="wonfiddy"
            thumbnail={wonfiddyThumb}
            title="wonfiddy.eth"
          >
            My first <code>#wishmaker</code> &amp; dear fren check{' '}
            <Link href="https://twitter.com/TPS0011/status/1366465485290766342?s=20&t=woM5OK6qs-8Zac9A4_zpyg">
              this
            </Link>{' '}
            out
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="metagame"
            title="metagame"
            thumbnail={metagameThumb}
          >
            A Massive Online Coordination Game: i've been playing this game for
            almost 2 years, making{' '}
            <Link href="https://youtu.be/Kr9Hdt6afPw">videos</Link> like this
            one.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          ＰＡＳＴ　ＷＯＲＫＳ。
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
            id="ruleoftheroad"
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
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
