import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="𝕋𝕙𝕚𝕣𝕕 ℙ𝕝𝕒𝕟𝕖𝕥 𝕊𝕥𝕦𝕕𝕚𝕠 ">
    <Container my={56}>
      <Title>
        𝕋𝕙𝕚𝕣𝕕 ℙ𝕝𝕒𝕟𝕖𝕥 𝕊𝕥𝕦𝕕𝕚𝕠 <Badge>𝔻𝔼ℂ 𝟘𝟙 - ℂ𝕦𝕣𝕣𝕖𝕟𝕥</Badge>
      </Title>
      <P>
        Meeting Third Planet Studio has been a blessing, I met this amazing
        group of people through some friends at Metagame. I got to know them
        closer and not long after I was on the team helping adivse technically
        when it came to Live broadcast events and Media Production in a whole.
      </P>
      <br />
      <P>
        Seeing their passions align so much with what I do. It was such a
        delight and I love how far we've all come. Things really took off when I
        introduced the crew to hyperfy an amazingly built out webXR platform.
      </P>
      <br />
      <P>
        After a year basically being a media guru, live technician and world
        builder! I offered to recontruct their website, setup a free for life server (thanks oracle)
        using the <code>schwemplate</code> which was carefully curated in an entrypoint.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://thirdplanet.studio">
            Website
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Metaverse</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <Link href="https://github.com/AnEntrypoint/schwemplate">
            The Schweplate
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Twitter</Meta>
          <Link href="https://twitter.com/3planetstudio">
            Blue bird
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/third1.jpg"
        alt="my first task as a chilliDev"
      />
      <WorkImage
        src="/images/works/third2.png"
        alt="another snippet of my first task as a chilliDev"
      />
      <WorkImage
        src="/images/works/third3.png"
        alt="another snippet of my first task as a chilliDev"
      />
      <WorkImage
        src="/images/works/third4.png"
        alt="another snippet of my first task as a chilliDev"
      />
      <WorkImage
        src="/images/works/third5.jpg"
        alt="my first task as a chilliDev"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
