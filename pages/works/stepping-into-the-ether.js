import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="MusicVid2">
    <Container my={56}>
      <Title>
        Ｓ.Ｉ.Ｔ.Ξ.　奥臆演
        <Badge>ｃｕｒｒｅｎｔ　を挨リ</Badge>
      </Title>
      <P>
        after running with the meta-builders for a lil while i met a new fren
        who made this {' '}
        <Link href="https://audius.co/FellenzMusic/stepping-into-the-ether">
          <code>audius track</code>
        </Link>{' '}
        after hearing this i decided i'm making another music video in blender
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="#">
            Pending
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>The Internet</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Blender</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="#">
            pending
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage
        src="/images/works/mv1Thumb.png"
        alt="another snippet of the hallway ir built"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
