import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="𝕊𝕡𝕚𝕔𝕖𝕏 ">
    <Container my={56}>
      <Title>
        𝕊𝕡𝕚𝕔𝕖𝕏 <Badge>𝔻𝔼ℂ 𝟘𝟙 - ℂ𝕦𝕣𝕣𝕖𝕟𝕥</Badge>
      </Title>
      <P>
        A year shortly after joining the Chilling Chiliz I embarked on a new
        journey, one I wanted to go on for quite some time but unbeknownst to me
        and all my subconscious research and development practice.
      </P>
      <br />
      <P>
        Ironically whilst researching game engines like: Unity, Unreal and
        various other cool not as popular engines. I stumbled upon Godot Engine.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://spicex.vercel.app">
            Website
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Steam</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Godot, Blender</span>
        </ListItem>
        <ListItem>
          <Meta>Twitter</Meta>
          <Link href="https://twitter.com/ChillingChiliz">
            Blue bird
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/spicex2.png"
        alt="my first task as a chilliDev"
      />
      <WorkImage
        src="/images/works/spicex3.png"
        alt="another snippet of my first task as a chilliDev"
      />
      <WorkImage
        src="/images/works/spicex4.png"
        alt="another snippet of my first task as a chilliDev"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
