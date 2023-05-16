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
      <P>
        After acquiring a certain NFT I embarked on a new journey through
        discord servers 
      </P>
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
          <span>Blender, NEOS, UE5, Hyperfy</span>
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
        src="/images/works/chill1.png"
        alt="my first task as a chilliDev"
      />
      <WorkImage
        src="/images/works/chill2.png"
        alt="another snippet of my first task as a chilliDev"
      />
      <WorkImage
        src="/images/works/chill3.png"
        alt="another snippet of my first task as a chilliDev"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
