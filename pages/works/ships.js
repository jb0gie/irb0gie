import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="🚢Ships 🛳️Boats 🛶Vessels">
    <Container my={56}>
      <Title>
        🚢Ｓｈｉｐｓ　🛳️Ｂｏａｔｓ　🛶Ｖｅｓｓｅｌｓ　臆ビ曖
        <Badge>２０１６</Badge>
      </Title>
      <P>
        My manager approached me asking if we had the capability to develop
        apps.
      </P>
      <P>
        Having experience developing native android apps prior, I jumped at the
        oppurtunity to get some more practice in as well as show off what we
        were capable of.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="">
            https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
