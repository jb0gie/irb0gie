import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="MG🐙">
    <Container my={56}>
      <Title>
        𝕄𝕖𝕥𝕒𝔾𝕒𝕞𝕖🐙<Badge>𝔻𝔼ℂ𝟛𝟘|𝟚𝟘 - 𝕔𝕦𝕣𝕣𝕖𝕟𝕥</Badge>
      </Title>
      <P>A Massive Online Coordination Game</P>
      <blockquote>
        “Metagame is any approach to a game that transcends or operates outside
        of the prescribed rules of the game, uses external factors to affect the
        game, or goes beyond the supposed limits or environment set by the
        game.” - From MG🐙 Wiki
      </blockquote>
      <P></P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://metagame.wtf">
            Metagame🐙
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>The Internet</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Web3 <code>Mathamagik</code>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Realizing Metagame</Meta>
          <Link href="https://metagame.substack.com/">
            News🗞️letter <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/metagame.png" alt="Meta Game 🐙 Logo" />
      <WorkImage src="/images/works/mg1.jpg" alt="Meta Game 🐙 Crystal" />
      <WorkImage src="/images/works/nova.png" alt="Nova the 🐙" />
      <Link href="/metafest">
        <WorkImage src="/images/works/mf2-logo.png" alt="MF2  🐙 logo" />
      </Link>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
