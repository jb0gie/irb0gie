import { Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from './section'
import { WorkGridItem } from './grid-item'
import kinThumb from '../public/images/works/kin.png'
import jeffThumb from '../public/images/works/jeff.png'
import mfThumb from '../public/images/works/mf2-logo.png'
import swagtagThumb from '../public/images/works/swagtag.png'
import monaThumb from '../public/images/works/monaThumb.png'
import pendingThumb from '../public/images/works/pending.png'
export const RecentWork = () => (
  <>
    <Section delay={0.4}>
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        ｒｅｃｅｎｔ　ｗｏｒｋｓ　ゝ科ぷ
      </Heading>
    </Section>
    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.5}>
        <WorkGridItem
          id="namejeff"
          title="ｎａｍｅ　ｊｅｆｆ　ムニグ羽"
          thumbnail={jeffThumb}
        >
          thought i'd try out <code>astro.dev</code> out.
        </WorkGridItem>
      </Section>
      <Section delay={0.5}>
        <WorkGridItem
          id="kin"
          title="Ｕｒｂáｎｉｋａ　唄たぶ"
          thumbnail={kinThumb}
        >
          a propaganda machine for the <code>crypto-commons</code>.
        </WorkGridItem>
      </Section>
      <Section delay={0.6}>
        <WorkGridItem
          id="metafest"
          title="Ｍｅｔａｆｅｓｔ🐙２　曖者艶"
          thumbnail={mfThumb}
        >
          Live event, Powered by Metagame🐙 <pre>JUN9~23</pre>
        </WorkGridItem>
      </Section>
      <Section delay={0.6}>
        <WorkGridItem
          id="hyperwebchat"
          title="ｈｙｐｅｒ~ｗｅｂｃｈａｔ　ぢど液"
          thumbnail={pendingThumb}
        >
          yet another <code>internet breaking</code> entrypoint project
        </WorkGridItem>
      </Section>
      <Section delay={0.7}>
        <WorkGridItem
          id="swagtag"
          title="ｓｗａｇｔａｇ　ぁビ萎"
          thumbnail={swagtagThumb}
        >
          <del>swagtag - instant domains</del>{' '}
          <del>
            <pre>then adaptogen</pre>
          </del>
          <pre>now hyper~bolic</pre>
        </WorkGridItem>
      </Section>
      <Section delay={0.8}>
        <WorkGridItem
          id="mona"
          title="Ｍｏｎａ　が欧生"
          thumbnail={monaThumb}
        >
          🥉 place winner in a hackathon
        </WorkGridItem>
      </Section>
    </SimpleGrid>
  </>
)

export default RecentWork
export { getServerSideProps } from '../components/chakra'
