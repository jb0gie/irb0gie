import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="cordkilla">
    <Container>
      <Title>
        cordkilla - <Badge>- ＣＵＲＲＥＮＴ</Badge>
      </Title>
      <P>
        ｎａｍｅ　ｐｅｎｄｉｎｇ is a web application that provides a platform
        for users to communicate with each other and host their own projects.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://entrypoint.fujiavax.ga/">
            entrypoint.fujiavax.ga/<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>The browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Riot</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="">
            pending<ExternalLinkIcon mx="2px" />
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
