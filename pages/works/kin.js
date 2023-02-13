import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="𝕌𝕣𝕓á𝕟𝕚𝕜𝕒">
    <Container my={56}>
      <Title>
        𝕂𝕚𝕟 𝕌𝕣𝕓á𝕟𝕚𝕜𝕒 <Badge>ℂ𝕦𝕣𝕣𝕖𝕟𝕥</Badge>
      </Title>
      <P>
        operates through an immersive video course guide on using and applying
        decentralized coordination tools and techniques at local urban DAOs. the
        goal is to guide activists into regenerating and re-imagining cities
        through a <code>solar~punk</code> and crypto-commons-based perspective.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://testingitall.my.canva.site/">
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
          <span>Blender, Unreal Engine 5, Character Creator 4</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://gitcoin.co/grants/5090/ourverse-and-the-solarpunk-awakening">
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
      <WorkImage
        src="/images/works/kinRef4.png"
        alt="MetaHuman Kin v1 with concept hair"
      />
      <WorkImage
        src="/images/works/kinRef5.png"
        alt="from behind: MetaHuman Kin custom arm"
      />
      <WorkImage
        src="/images/works/kinRef6.png"
        alt="from front: MetaHuman Kin custom arm"
      />
      <WorkImage
        src="/images/works/kinRef7.png"
        alt="close up: MetaHuman Kin custom arm"
      />
      <WorkImage src="/images/works/kinRef8.png" alt="MetaHuman Kin v2 ears" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
