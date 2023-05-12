import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ChillingChiliz">
    <Container my={56}>
      <Title>
        Chilling Chiliz<Badge>𝔸ℙℝ𝟚𝟚 - ℂ𝕦𝕣𝕣𝕖𝕟𝕥</Badge>
      </Title>
      <P>After acquiring #VOID</P>
      <br />
      <P></P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://chillingchiliz.com/">
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
          <span>Blender, NEOS, UE5</span>
        </ListItem>
        <ListItem>
          <Meta>Official Tweet</Meta>
          <Link href="#">
            pending
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage
        src="/images/works/siteWrk1.png"
        alt="another snippet of the hallway ir built"
      />
      <WorkImage
        src="/images/works/siteWrk2.png"
        alt="another snippet of the hallway ir built"
      />
      <WorkImage
        src="/images/works/siteWrk3.png"
        alt="another snippet of the hallway ir built"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
