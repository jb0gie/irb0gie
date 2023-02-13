import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="𝕍ℂ𝔾">
    <Container my={56}>
      <Title>
        𝕍𝕖𝕘𝕒𝕤 ℂ𝕣𝕪𝕡𝕥𝕠 𝔾𝕣𝕠𝕦𝕡<Badge>𝔻𝔼ℂ𝟙|𝟚𝟚 - 𝕔𝕦𝕣𝕣𝕖𝕟𝕥</Badge>
      </Title>
      <P>
        <Link href="https://vegascryptogroup.com/">
          <code>Vegas Crypto Group</code>
        </Link>{' '}
        is a meetup group that brings together individuals passionate about
        self-ownership, free exchange, and emerging technology in the
        decentralized and transparent Bitcoin and cryptocurrency community.
      </P>
      <br />
      <br />
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="meetup.com/Vegas-Crypto-Meetup/">
            VCG on Meetup
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>The Internet, IRL</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Web3</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="#">
            Newsletter
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>
      <WorkImage src="/images/works/vcgWrk5.png" alt="Visting VCG in hyperfy" />
      <WorkImage src="/images/works/vcgWrk1.jpg" alt="CMR and Edge Wallet" />
      <WorkImage src="/images/works/vcgWrk2.png" alt="CMR 2022 day 1" />
      <WorkImage src="/images/works/vcgWrk3.jpg" alt="CMR 2022 day 1" />
      <WorkImage src="/images/works/vcgWrk4.png" alt="CMR 2022 day 2" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
