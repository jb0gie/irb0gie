import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
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
const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Woah🤯Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="ｂ０ｇｉｅ　ｖｌｏｇ"
            thumbnail={thumbRawVlog}
            href="https://www.youtube.com/watch?v=aUCd5nZRyoU&list=PL8AT6MsTVpK1P5doYyW48bTrizm2BTFmz"
          />
          <GridItem
            title="ｂ０ｇｉｅ　ｄａｎｃｅ"
            thumbnail={thumbDance}
            href="https://www.youtube.com/watch?v=Jm3QVIJHj6E"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="ｂ０ｇｉｅ　ｔｒａｖｅｌ"
            thumbnail={thumbAustriaTour}
            href="https://www.youtube.com/watch?v=VQeiwBYj240&list=PL8AT6MsTVpK2ZidSIELJDvJ-jgWcEuNOw&index=3"
          />
          {/* <GridItem
            title="ｂ０ｇｉｅ　ｔｒａｖｅｌ　ａｇｅｎ"
            thumbnail={thumbGrenadaTour}
            href="#"
          /> */}
          <GridItem
            title="ｂ０ｇｉｅ　ｃｒｅａｔｅ"
            thumbnail={thumbCreative}
            href="https://youtu.be/6zfHV2bp-rI"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="ｂ０ｇｉｅ　ｗｒｉｔｅ"
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
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
