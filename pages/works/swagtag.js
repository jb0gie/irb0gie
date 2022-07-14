import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="swagtag">
    <Container>
      <Title>
        swagtag <Badge>ｄｅｃ２１－ｊａｎ２２　ト依ピ</Badge>
      </Title>
      <P>
        a <Link href="https://moralis.io/avalanche-hackathon/">hackathon</Link>{' '}
        submission: swagtag is a public ecosystem for listing web3 projects.
      </P>
      <br />
      <P>
        post hackathon swagtag underwent <code>cell-division</code> and became
        what is now known today as{' '}
        <Link
          href="https://adaptogen.247420.xyz"
        >
          adaptogen
        </Link>{' '}
        &amp;{' '}
        <Link
          href="https://github.com/AnEntrypoint/hyperbolic-code-server"
        >
          hyperbolic~codeserver
        </Link>
        . because of swagtag, we have some serious tools in our arsenal now.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://avax.ga/">
            avax.ga/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>The browser ++ metamask</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, React</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://twitter.com/McLanmower/status/1488417514111574021?s=20&t=Hok7SfQbxJVDz-dtZHTZfQ">
            this just in swagtag is live!
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/swagtag1.png" alt="swagtag homepage" />
      <WorkImage src="/images/works/swagtag2.png" alt="top bumped swagtags" />
      <WorkImage src="/images/works/swagtag3.png" alt="swagtag info section" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
