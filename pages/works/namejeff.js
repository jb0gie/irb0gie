import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="NAMEJEFF">
    <Container>
      <Title>
        ｍｙ　ｎａｍｅ　ｉｓ　ｊｅｆｆ　ムニグ羽{' '}
        <Badge>ｊｕｎ２２　むもブ</Badge>
      </Title>
      <P>
        <code>this</code> is a web application built using {''}
        <Link target="_blank" href="https://astro.dev">
          astro
        </Link>{' '}
        {''}
        which is a new kid on the block.
      </P>
      <br />
      <P>
        i r really took a liking to this for it's approach to get people to {''}
        <Link target="_blank" href="https://astro.new">
          try it out
        </Link>{' '}
        {''}
        and lemme tell ya i was impressed.
      </P>
      <br />
      <P>
        whom'st knows i may even port this whole site! i r initially thought{' '}
        {''}
        <Link target="_blank" href="https://svelte.dev/">
          svelte
        </Link>{' '}
        {''}
        was gunna be the next <code>#</code>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://namejeff.247420.xyz/">
            namejeff.247420.xyz
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>The browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Astro</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="#">
            pending
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/jeffwork3.png" alt="next gen dev" />
      <WorkImage
        src="/images/works/jeffwork2.png"
        alt="what astro looks like"
      />
      <WorkImage
        src="/images/works/jeffwork.png"
        alt="the page go visit it NOW"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
