import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="MD👹">
    <Container my={56}>
      <Title>
        𝕄𝕠𝕝𝕠𝕔𝕙 𝔻𝕚𝕘𝕚𝕥𝕒𝕝
        <Badge>ｃｕｒｒｅｎｔ　を挨リ</Badge>
      </Title>
      <P>
        Whom'st knows what brought the {''}
        <Link href="https://bip.so/molochdigital/lore-of-moloch-digital-25580c">
          <code>moloch transmission</code>
        </Link>{' '}
        into the world. Not much has been revealed but that will definitely
        change.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://twitter.com/MolochDigital">
            Twitter
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>The Internet</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>web3, Metaverse</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="#">
            pending
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage
        src="/images/works/mdWork1.png"
        alt="another snippet of the hallway ir built"
      />
      <WorkImage
        src="/images/works/mdWork2.png"
        alt="another snippet of the hallway ir built"
      />
      <WorkImage
        src="/images/works/mdWork3.png"
        alt="another snippet of the hallway ir built"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
