import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Mona Job">
    <Container my={56}>
      <Title>
        Ｍｏｎａ　が欧生<Badge>ｎｏｖ２１－ｄｅｃ２１　意のね</Badge>
      </Title>
      <P>
        <Link href="https://dsc.gg/entrypoint">
          <code>An🎙️Entrypoint</code>
        </Link>{' '}
        memebers : b0gie, lan, makesi &amp; ev0 signed up for the{' '}
        <Link href="https://monaverse.com">monaverse</Link>{' '}
        <code>build-a-thon</code> where we constructed a world in unity and
        minted it on polygon.
      </P>
      <P>
        we placed 🥉 and we won a prize of{' '}
        <Link href="https://polygonscan.com/tx/0x807cd11d89dce66f5121834453ecfa6d1b9e4be16368a73ad3eef51c43ee3309">
          0.3314Ξ{' '}
        </Link>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://monaverse.com/spaces/-7531">
            Our Mona Submission
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>The browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Blender, Unity</span>
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
        src="/images/works/monaThumb.png"
        alt="another snippet of the hallway ir built"
      />
      <WorkImage
        src="/images/works/monaThumb2.png"
        alt="another snippet of the hallway ir built"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
