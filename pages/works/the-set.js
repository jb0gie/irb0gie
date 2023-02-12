import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="MusicVid1">
    <Container my={56}>
      <Title>
        𝕋𝕙𝕖 𝕤𝕖𝕥
        <Badge>𝕔𝕦𝕣𝕣𝕖𝕟𝕥</Badge>
      </Title>
      <P>
        This is a first for me, making a <code>game</code> well it's more of a
        custom <code>vtubing</code> application. it's been super fun to make
        thus far and i cannot wait to actually use in in prod. Ironically
        someone built exactly what I wanted.
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
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Blender, Unity, Frooxius, OBS</span>
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
        src="/images/works/the-set-logo.png"
        alt="another snippet of the hallway ir built"
      />
      <WorkImage
        src="/images/works/the-set-work.gif"
        alt="another snippet of the hallway ir built"
      />
      <WorkImage
        src="/images/works/the-set-work2.png"
        alt="another snippet of the hallway ir built"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
