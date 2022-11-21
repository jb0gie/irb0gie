import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Ｍｅｔａｆｅｓｔ🐙２　曖者艶">
    <Container my={56}>
      <Title>
        Metafest🐙2 <Badge>ｊｕｎ９~２３, ２０２２　維内ク</Badge>
      </Title>
      <P>A virtual festival &amp; conference</P>
      <blockquote>
        “The goal? To help you <code>level up</code> &amp;{' '}
        <code>manifest a better future</code>” - From Metafest🐙2 site
      </blockquote>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://metafest.metagame.wtf/">
            Metafest2 Powered by Metagame🐙
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Youtube</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Ubuntu arm, Docker, Hypercore, Obs</span>
        </ListItem>
        <ListItem>
          <Meta>Realizing Metagame</Meta>
          <Link href="https://metagame.substack.com/p/metafest2-is-happening-now">
            News🗞️letter <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/mfwork.png" alt="Meta Game 🐙 Logo" />
      <WorkImage src="/images/works/mfwork2.png" alt="Meta Game 🐙 Logo" />
      <WorkImage src="/images/works/mfwork3.png" alt="Meta Game 🐙 Logo" />
      <code>
        - parts where either: {''}i messed up audio wise or tube canceled us bc
        we were simply that awesome{' '}
      </code>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
