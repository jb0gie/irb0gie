import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
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
        flourish
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
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      <WorkImage src="/images/works/wonfiddy.png" alt="the W" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
