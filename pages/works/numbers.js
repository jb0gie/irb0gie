import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="numbers">
    <Container my={56}>
      <Title>
        𝟚𝟜𝟟𝟜𝟚𝟘 <Badge>𝕟𝕒𝕠</Badge>
      </Title>
      <P>
        <Link href="247420.xyz">
          <code>NUMB3RS</code>
        </Link>{' '}
        is the code to an entrypoint known formally as <code>nao</code>. we are
        always here nao. nao is all we have.
      </P>
      <br />
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://dsc.gg/entrypoint">
            an entrypoint
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>The browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Blender, Unity, OBS, NDI, VDO</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="#">
            pending
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/numbers-work3.png" alt="next gen dev" />
      <WorkImage
        src="/images/works/numbers-work2.png"
        alt="what astro looks like"
      />
      <WorkImage
        src="/images/works/numbers-work.png"
        alt="the page go visit it NOW"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
