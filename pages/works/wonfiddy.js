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
        <Badge>- ＣＵＲＲＥＮＴ</Badge>
      </Title>
      <P>
        The <code>1st wish maker</code> and dear dear fren i've been helping
        flourish. I've helped him grow and become a successful entrepreneur.
        From helping birth{' '}
        <NextLink href="https://www.nftoasis.co/press" passHref>
          <Link>NFT Oasis</Link>
        </NextLink>{' '}
        To now helping establish{' '}
        <NextLink href="https://throwlights.com/" passHref>
          <Link>Throwlights</Link>
        </NextLink>{' '}
        in the metaverse.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Socials</Meta>
          <Link href="https://linktr.ee/wonfiddy">
            link🌳 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>the 3rd web</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem> */}
      </List>
      <WorkImage src="/images/works/wonfiddy.png" alt="the W" />

      <Divider />
      <br />
      <br />
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
      <br />
      <Divider />
      <br />
      <br />
      <WorkImage src="/images/works/throwlights.png" alt="throwlights" />
      <br />
      <AspectRatio maxW="540px" ratio={2}>
        <iframe
          title="150 in neosVR"
          src="https://video.cdninstagram.com/v/t50.16885-16/273113947_407093464549004_4138062981631218534_n.mp4?_nc_cat=106&vs=1034649304063996_1604656485&_nc_vs=HBksFQAYJEdGdGpSeENNUmxqVlAzSUJBR2FUVW41YldtMDVidlZCQUFBRhUAAsgBABUAGCRHRmRRU0JEMnFSMjFVU2dCQU5id3BrVmhyaG9DYnZWQkFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACb0g7Li57fbQBUCKAJDMywXQDdLxqfvnbIYEmRhc2hfYmFzZWxpbmVfMV92MREAdewHAA%3D%3D&ccb=1-5&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjEyODAuaWd0diJ9&_nc_ohc=GRhpKGBrLCIAX-Tun6D&_nc_ht=video.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-5V5AP0eBKi5SRTbzlXDQXJo_rdn2ScqXAOvaNcqsV4g&oe=6216E92A&_nc_rid=cabb0138c90"
          allowFullScreen
        />
      </AspectRatio>
      <br />
      <br />
      <Divider />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
