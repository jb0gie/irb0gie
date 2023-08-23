import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import lensTube1 from '../public/images/contents/lenstube1.png'
import lensTube2 from '../public/images/contents/lenstube2.png'
import lensTube3 from '../public/images/contents/lenstube3.png'
import lensTube4 from '../public/images/contents/lenstube4.png'
import lensTube5 from '../public/images/contents/lenstube5.png'
import lensTube6 from '../public/images/contents/lenstube6.png'
import thumbRawVlog from '../public/images/contents/rawvlog.jpg'
import thumbRawVlog2 from '../public/images/contents/szn2.png'
import thumbAustriaTour from '../public/images/contents/b0g-ontour1.jpg'
import thumbMcAfee from '../public/images/contents/mcafeeJob.png'
// import thumbGrenadaTour from '../public/images/contents/b0g-ontour2.jpg'
import thumbDance from '../public/images/contents/b0g-dance.jpg'
import thumbCreative from '../public/images/contents/b0g-amv.jpg'
import thumbArticle1 from '../public/images/contents/article1.jpg'
// import thumbArticle2 from '../public/images/contents/article2.jpg'
import thumbCmr from '../public/images/contents/cmr2022.jpg'
import thumbCmr2 from '../public/images/contents/cmr2023.png'
import mfThumb from '../public/images/works/mf2-logo.png'
const Posts = () => (
  <Layout title="ℙ𝕆𝕊𝕋𝕊">
    <Container my={56}>
      <Heading as="h3" fontSize={20} mb={4} delay={0.1}>
        𝕃𝕖𝕟𝕤𝕥𝕦𝕓𝕖 𝕍𝕚𝕕𝕖𝕠𝕤
      </Heading>
      <Divider my={6} />
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="𝕄𝕪 𝔸𝕧𝕒𝕥𝕒𝕣'𝕤 𝕖𝕧𝕠𝕝𝕦𝕥𝕚𝕠𝕟"
            thumbnail={lensTube1}
            href="https://lenstube.xyz/watch/0xb80e-0x0778"
          />
          <GridItem
            title="🍝𝕤𝕡𝕒𝕘🍲𝕤𝕠𝕦𝕡"
            thumbnail={lensTube2}
            href="https://lenstube.xyz/watch/0xb80e-0x091a"
          />
          <GridItem
            title="𝕡𝕣𝕖𝕧 𝕠𝕟 𝕥𝕙𝕖 ℂ𝕙𝕚𝕝𝕝𝕚𝕟𝕘ℂ𝕙𝕚𝕝𝕝𝕚𝕫 𝕤𝕖𝕣𝕧𝕖𝕣"
            thumbnail={lensTube3}
            href="https://lenstube.xyz/watch/0xb80e-0x08ab"
          />
          <GridItem
            title="𝕒𝕟𝕠𝕥𝕙𝕖𝕣 #𝕓𝟛𝕕 𝕥𝕚𝕞𝕖𝕝𝕒𝕡𝕤𝕖"
            thumbnail={lensTube4}
            href="https://lenstube.xyz/watch/0xb80e-0x09f0"
          />
          <GridItem
            title="#ℂ𝕙𝕚𝕝𝕝𝕚𝕟𝕘ℂ𝕙𝕚𝕝𝕚𝕫 #𝔹𝔽ℙ #𝔹𝕚𝕘𝔽𝕒𝕞𝕚𝕝𝕪ℙ𝕚𝕔"
            thumbnail={lensTube5}
            href="https://lenstube.xyz/watch/0xb80e-0x0add"
          />
          <GridItem
            title="𝕙𝕪𝕡𝕖𝕣𝕗𝕪.𝕚𝕠/𝕔𝕙𝕒𝕞𝕕𝕦𝕟𝕖𝕤"
            thumbnail={lensTube6}
            href="https://lenstube.xyz/watch/0xb80e-0x0add"
          />
        </SimpleGrid>
      </Section>
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4} delay={0.1}>
        𝕐𝕠𝕦𝕥𝕦𝕓𝕖 𝕍𝕚𝕕𝕖𝕠𝕤
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="𝕋𝕙𝕖 𝕄𝕔𝔸𝕗𝕖𝕖 𝕁𝕠𝕓"
            thumbnail={thumbMcAfee}
            href="https://youtu.be/tb6bUYpM1_0"
          />
          <GridItem
            title="𝕊ℤℕ𝟙 : ℝ𝔸𝕎 𝕍𝕃𝕆𝔾"
            thumbnail={thumbRawVlog}
            href="https://www.youtube.com/watch?v=aUCd5nZRyoU&list=PL8AT6MsTVpK1P5doYyW48bTrizm2BTFmz"
          />
          <GridItem
            title="𝕊ℤℕ𝟚 : ℝ𝔸𝕎 𝕍𝕃𝕆𝔾"
            thumbnail={thumbRawVlog2}
            href="https://www.youtube.com/watch?v=7NIhSLMsWQ8&list=PL8AT6MsTVpK02BZ0r8V81aPY1j2h5GQ66"
          />
          <GridItem
            title="𝕃𝔼𝔾𝔸ℂ𝕐 𝕄𝕆𝕍𝔼𝕄𝔼ℕ𝕋 𝕍𝕀𝔻𝕊"
            thumbnail={thumbDance}
            href="https://www.youtube.com/watch?v=hNZeOvtigCk&list=PL90B04E12157894D6"
          />
          <GridItem
            title="𝔸𝕦𝕤𝕥𝕣𝕚𝕒"
            thumbnail={thumbAustriaTour}
            href="https://www.youtube.com/watch?v=VQeiwBYj240&list=PL8AT6MsTVpK2ZidSIELJDvJ-jgWcEuNOw&index=3"
          />
          {/* <GridItem
            title="𝔾𝕣𝕖𝕟𝕒𝕕𝕒"
            thumbnail={thumbGrenadaTour}
            href="#"
          /> */}
          <GridItem
            title="𝕄𝕪 𝟙𝕤𝕥 𝔸𝕄𝕍"
            thumbnail={thumbCreative}
            href="https://youtu.be/6zfHV2bp-rI"
          />
        </SimpleGrid>
      </Section>
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4} delay={0.3}>
        𝕍𝕒𝕣𝕚𝕠𝕦𝕤 𝔸𝕣𝕥𝕚𝕔𝕝𝕖𝕤
      </Heading>
      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="𝕄𝕪 𝔽𝕚𝕣𝕤𝕥 𝔸𝕣𝕥𝕚𝕔𝕝𝕖"
            thumbnail={thumbArticle1}
            href="https://medium.com/@szab0gie/kin-the-future-you-pt-1-6d0d2c11a51f"
          />
          <GridItem
            title="𝕄𝕪 𝕊𝕖𝕔𝕠𝕟𝕕 𝔸𝕣𝕥𝕚𝕔𝕝𝕖"
            thumbnail={thumbArticle1}
            href="https://hackmd.io/wycqNwc4Trmp7ZCHq-dVHQ"
          />
          <GridItem
            title="𝕄𝕪 𝕋𝕙𝕚𝕣𝕕 𝔸𝕣𝕥𝕚𝕔𝕝𝕖"
            thumbnail={thumbArticle1}
            href="https://hackmd.io/WXZ6OUnJTTqeLBA1lm5Nkg"
          />
          {/* <GridItem
            title="ｂ０ｇｉｅ　ｗｒｉｔｅ　ｍｏａｒ"
            thumbnail={thumbArticle2}
            href="#"
          /> */}
        </SimpleGrid>
      </Section>
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4} delay={0.3}>
        𝕃𝕀𝕍𝔼 𝔹ℝ𝕆𝔸𝔻ℂ𝔸𝕊𝕋𝕊
      </Heading>
      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="𝕄𝔼𝕋𝔸𝔽𝔼𝕊𝕋𝟚"
            thumbnail={mfThumb}
            href="https://rumble.com/v2j3f0k-crypto-mindset-reset-virtual-summit-2-day-2.html"
          />
        </SimpleGrid>
      </Section>
      <Section delay={0.6}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="ℂ𝕄ℝ𝟚𝟚 𝔻𝕒𝕪𝟙 ℙ𝕥𝟙"
            thumbnail={thumbCmr}
            href="https://youtube.com/live/bgJ3qnj3Z3Q"
          />
          <GridItem
            title="ℂ𝕄ℝ𝟚𝟚 𝔻𝕒𝕪𝟙 ℙ𝕥𝟚"
            thumbnail={thumbCmr}
            href="https://youtube.com/live/ihcQ25r1ixs"
          />
          <GridItem
            title="ℂ𝕄ℝ𝟚𝟚 𝔻𝕒𝕪𝟚"
            thumbnail={thumbCmr}
            href="https://rumble.com/v20k03u-crypto-mindset-reset-virtual-summit-day-2.html"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.7}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="ℂ𝕄ℝ𝟚𝟛 𝔻𝕒𝕪𝟙"
            thumbnail={thumbCmr2}
            href="https://rumble.com/v2iziz6-crypto-mindset-reset-virtual-summit-2-day-1.html"
          />
          <GridItem
            title="ℂ𝕄ℝ𝟚𝟛 𝔻𝕒𝕪𝟚"
            thumbnail={thumbCmr2}
            href="https://rumble.com/v2j3f0k-crypto-mindset-reset-virtual-summit-2-day-2.html"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'