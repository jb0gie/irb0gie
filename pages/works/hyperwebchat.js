import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="hyper~webchat">
    <Container>
      <Title>
        ｈｙｐｅｒ~ｗｅｂｃｈａｔ　ヌ音フ{' '}
        <Badge>ｆｅｂ~ｊｕｎ２２　ゞれア</Badge>
      </Title>
      <P>
        is a <code>hyper~light</code> web application that provides a platform
        for users to communicate with each other and host their own projects.
      </P>
      <br />
      <P>
        this project kinda fell of our radar but we rarely drop something for good
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="#">
            entrypoint.fujiavax.ga/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>The browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Websockets, Riot</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="">
            pending
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/cordkilla1.png" alt="" />
      <WorkImage src="/images/works/cordkilla2.png" alt="" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
