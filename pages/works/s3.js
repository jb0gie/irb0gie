import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="𝕤𝟛 𝕟+𝕨">
    <Container my={56}>
      <Title>
        𝕤𝟛 𝕟+𝕨<Badge>𝕄𝔸ℝ - 𝕄𝔸𝕐</Badge>
      </Title>
      <P>
        A buildspace hackathon I participated in. Gained a lot of valuable EXP
        from this experience
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://boltevm.com">
            Website
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>web3</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Blender, NEOS, Unity</span>
        </ListItem>
        <ListItem>
          <Meta>Twitter</Meta>
          <Link href="https://twitter.com/BOLTVR/status/1645937249735917570?s=20">
            Blue bird
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/s3Work1.png"
        alt="my first task as a chilliDev"
      />
      <WorkImage
        src="/images/works/s3Work2.png"
        alt="another snippet of my first task as a chilliDev"
      />
      <WorkImage
        src="/images/works/s3Work3.png"
        alt="another snippet of my first task as a chilliDev"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
