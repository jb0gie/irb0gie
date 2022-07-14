import NextLink from 'next/link'
import {
  AspectRatio,
  Badge,
  Container,
  Divider,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="wonfiddy">
    <Container>
      <Title>
        １５０．ｅｔｈ　因ぅ泳{''}{' '}
        <Badge> ２０１７~ｃｕｒｒｅｎｔ　ヾ暗づ</Badge>
      </Title>
      <WorkImage src="/images/works/wonfiddy.png" alt="the W" />
      <P>
        The <code>1st wish maker</code> and dear dear fren i've been helping
        flourish. I've helped him grow and become a successful entrepreneur.
      </P>
      <br />
      <P>
        From helping birth{' '}
        <NextLink href="https://www.nftoasis.co/press" passHref>
          <Link>NFT Oasis</Link>
        </NextLink>{' '}
      </P>
      <WorkImage src="/images/works/oasis.jpg" passHref alt="nft oasis logo" />
      <br />
      <AspectRatio maxW="720px" ratio={2}>
        <iframe
          title="nft oasis"
          src="https://www.youtube.com/embed/Bo0JOacOFLk"
          allowFullScreen
        />
      </AspectRatio>
      <br />
      <P>
        To then helping establish foundations with{' '}
        <NextLink href="https://throwlights.com/" passHref>
          <Link>Throwlights</Link>
        </NextLink>{' '}
        in web 3 &amp; the metaverse.
      </P>
      <WorkImage src="/images/works/throwlights.png" alt="throwlights" />
      <br />
      <P>
        Now we have introduced the world to{' '}
        <NextLink href="https://boltevm.com/">
          <Link>
            <code>BoltEVM</code>
          </Link>
        </NextLink>{' '}
        an interactive, immersive space anyone can use to Livestream &amp; Host
        up to 64 Players
      </P>
      <br />
      <WorkImage src="/images/works/bolt2.png" alt="bolt" />
      <WorkImage src="/images/works/bolt3.png" alt="bolt" />
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Socials</Meta>
          <Link href="https://linktr.ee/wonfiddy">
            link🌳 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web3 metaverse</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem> */}
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
