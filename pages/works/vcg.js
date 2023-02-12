import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Meta-Builders">
    <Container my={56}>
      <Title>
        𝕄𝕖𝕥𝕒-𝕓𝕦𝕚𝕝𝕕𝕖𝕣𝕤<Badge>𝕊𝔼ℙ𝟛𝟘|𝟚𝟚 - 𝕔𝕦𝕣𝕣𝕖𝕟𝕥</Badge>
      </Title>
      <P>
        <Link href="https://meta-builders.app">
          <code>Meta-builders</code>
        </Link>{' '}
        is a group of individuals with the aligned mission of empowering each
        other, growing together, and make the world a better place to live in.
        as this groups <code>techshaman, 𝕀ℝ░</code>
        has taken up the responsibility of making this brand stand out amongst
        the crowd
      </P>
      <br />
      <P>
        at the end of <code>SEPT</code> MB⛑️ launched on{' '}
        <Link href="https://app.daohaus.club/dao/0x1/0x049a4dc8406a65ff3e6690dfb264fc70d9ab6caa">
          Y33TER
        </Link>
        and officially became a DAO.
      </P>
      <br />
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://meta-builders.app/">
            Meta-builders
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>The Internet</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Metaverse</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://smart752.substack.com/p/meta-builders-unite">
            Newsletter
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/mbWork.png" alt="what astro looks like" />
      <WorkImage
        src="/images/works/mbWork2.png"
        alt="the page go visit it NOW"
      />
      <WorkImage
        src="/images/works/mbWork3.png"
        alt="the page go visit it NOW"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
