import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Urbánika">
    <Container>
      <Title>
        Urbánika <Badge>ｃｕｒｒｅｎｔ　ホラ謁</Badge>
      </Title>
      <P>
        operates through an immersive video course guide on using and applying
        decentralized coordination tools and techniques at local urban DAOs.{''}
        The goal is to guide activists into regenerating and re-imagining cities
        through a <code>solar~punk</code> and crypto-commons-based perspective.
        This repository is for storing all things related to the film series
        production.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://testingitall.my.canva.site/"
          >
            Homepage
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Videos</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Blender, Unreal Engine 5</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://gitcoin.co/grants/5090/ourverse-and-the-solarpunk-awakening"
          >
            Gitcoin grant
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage
        src="/images/works/kinRef.png"
        alt="final concept illustrations"
      />
      <WorkImage
        src="/images/works/kinRef2.png"
        alt="final portrait illustration"
      />
      <WorkImage
        src="/images/works/kinRef3.png"
        alt="left to right: Moloch, Kin, Julio"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
