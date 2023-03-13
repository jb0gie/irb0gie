import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbRawVlog from '../public/images/contents/rawvlog.jpg'
import thumbAustriaTour from '../public/images/contents/b0g-ontour1.jpg'
// import thumbGrenadaTour from '../public/images/contents/b0g-ontour2.jpg'
import thumbDance from '../public/images/contents/b0g-dance.jpg'
import thumbCreative from '../public/images/contents/b0g-amv.jpg'
import thumbArticle1 from '../public/images/contents/article1.jpg'
// import thumbArticle2 from '../public/images/contents/article2.jpg'
import thumbCmr from '../public/images/contents/cmr2022.jpg'
const Posts = () => (
  <Layout title="ｃｏｎｔ3ｎｔ　ベド゠">
    <Container my={56}>
      <Heading as="h3" fontSize={20} mb={4} delay={0.1}>
        Vids
      </Heading>
      <Divider my={6} />
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="ｉｎｃｏｎｓｉｓｔｅｎｔ　ｖｌｏｇｓ　内園ぼ"
            thumbnail={thumbRawVlog}
            href="https://www.youtube.com/watch?v=aUCd5nZRyoU&list=PL8AT6MsTVpK1P5doYyW48bTrizm2BTFmz"
          />
          <GridItem
            title="Ｙｅａｈ　ｉ　ｄａｎｃｅ　は無ふ"
            thumbnail={thumbDance}
            href="https://www.youtube.com/watch?v=Jm3QVIJHj6E"
          />
          <GridItem
            title="Ａｕｓｔｒｉａ~ｔｏｕｒ　ブぜみ"
            thumbnail={thumbAustriaTour}
            href="https://www.youtube.com/watch?v=VQeiwBYj240&list=PL8AT6MsTVpK2ZidSIELJDvJ-jgWcEuNOw&index=3"
          />
          {/* <GridItem
            title="ｂ０ｇｉｅ　ｔｒａｖｅｌ　ａｇｅｎ"
            thumbnail={thumbGrenadaTour}
            href="#"
          /> */}
          <GridItem
            title="ｍｙ　ｆｉｒｓｔ　ａｍｖ　姻ゕズ"
            thumbnail={thumbCreative}
            href="https://youtu.be/6zfHV2bp-rI"
          />
        </SimpleGrid>
      </Section>

      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4} delay={0.3}>
        Blogs
      </Heading>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="ｍｅｄｉｕｍｉｓｈ　園プ援"
            thumbnail={thumbArticle1}
            href="https://medium.com/@szab0gie/kin-the-future-you-pt-1-6d0d2c11a51f"
          />
          {/* <GridItem
            title="ｂ０ｇｉｅ　ｗｒｉｔｅ　ｍｏａｒ"
            thumbnail={thumbArticle2}
            href="#"
          /> */}
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="CMR2022 day 1 part 1"
            thumbnail={thumbCmr}
            href="https://youtube.com/live/bgJ3qnj3Z3Q"
          />
          <GridItem
            title="CMR2022 day 1 part 2"
            thumbnail={thumbCmr}
            href="https://youtube.com/live/ihcQ25r1ixs"
          />
          <GridItem
            title="CMR2022 day 2 on Rumble"
            thumbnail={thumbCmr}
            href="https://rumble.com/v20k03u-crypto-mindset-reset-virtual-summit-day-2.html"
          />
          
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
