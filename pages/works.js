import { Container, Heading, SimpleGrid, Divider, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import swagtagThumb from '../public/images/works/swagtag.png'
import metagameThumb from '../public/images/works/metagame.png'
import mfThumb from '../public/images/works/mf2-logo.png'
import wonfiddyThumb from '../public/images/works/wonfiddy.png'
// import olewrk1Thumb from '../public/images/works/olewrk1.png'
// import olewrk2Thumb from '../public/images/works/olewrk2.png'
// import olewrk3Thumb from '../public/images/works/olewrk3.png'
import pendingThumb from '../public/images/works/pending.png'
import kinThumb from '../public/images/works/kin.png'
import jeffThumb from '../public/images/works/jeff.png'

const Works = () => (
  <Layout title="ｗｏｒｋｓ　ス遠温">
    <Container>
      <Section delay={0.2}>
        <Heading as="h3" fontSize={20} mb={4}>
          ｃｕｒｒｅｎｔ　ｗｏｒｋｓ　哀ト億
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="kin"
            title="Ｕｒｂáｎｉｋａ　唄たぶ"
            thumbnail={kinThumb}
          >
            a propaganda machine for the crypto-commons.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="namejeff"
            title="ｍｙ　ｎａｍｅ　ｉｓ　ｊｅｆｆ　ムニグ羽"
            thumbnail={jeffThumb}
          >
            thought i'd try out <code>astro.dev</code> out.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          ｒｅｃｅｎｔ　ｗｏｒｋｓ　ゝ科ぷ
        </Heading>
      </Section>
      {/* current */}
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="metafest"
            title="Ｍｅｔａｆｅｓｔ🐙２　曖者艶"
            thumbnail={mfThumb}
          >
            Streamed{' '}
            <Link href="https://www.youtube.com/watch?v=9IN3uxPkwS8&list=PLRSlwLW1riHMSZF-7aNvTADOZiKTdwW_2">
              <pre>JUN9~23</pre>
            </Link>{' '}
            Powered by Metagame🐙
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="hyperwebchat"
            title="ｈｙｐｅｒ~ｗｅｂｃｈａｔ　ぢど液"
            thumbnail={pendingThumb}
          >
            yet another <code>internet breaking</code> entrypoint project
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="swagtag"
            title="ｓｗａｇｔａｇ　ぁビ萎"
            thumbnail={swagtagThumb}
          >
            <del>swagtag - instant domains</del> <pre>now adaptogen</pre>
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          ｃｏｌｌａｂｓ　ゟゑか
        </Heading>
      </Section>
      {/* collabs */}
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="wonfiddy"
            thumbnail={wonfiddyThumb}
            title="ｗｏｎｆｉｄｄｙ．ｅｔｈ　ス鋭わ"
          >
            the first <code>#wishmaker</code> &amp; dear fren check{' '}
            <Link href="https://twitter.com/TPS0011/status/1366465485290766342?s=20&t=woM5OK6qs-8Zac9A4_zpyg">
              this
            </Link>{' '}
            out
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="metagame"
            title="Ｍｅｔａｇａｍｅ🐙　 雲じ"
            thumbnail={metagameThumb}
          >
            A Massive Online Coordination Game: i've been playing 2+ years,
            making <Link href="https://youtu.be/Kr9Hdt6afPw">vids</Link> like
            this one.
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
