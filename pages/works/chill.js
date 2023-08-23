import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ℂ𝕙𝕚𝕝𝕝𝕚𝕟𝕘ℂ𝕙𝕚𝕝𝕚𝕫 ">
    <Container my={56}>
      <Title>
        ℂ𝕙𝕚𝕝𝕝𝕚𝕟𝕘ℂ𝕙𝕚𝕝𝕚𝕫 <Badge>𝕄𝔸𝕐𝟘𝟙 - ℂ𝕦𝕣𝕣𝕖𝕟𝕥</Badge>
      </Title>
      <P>
        After acquiring a certain <Link href="">NFT</Link> I embarked on a new
        journey through the <code>metaverse</code>. Learning many new things and
        being blessed to be part of a group of like-minded indivuduals.
      </P>
      <br />
      <P></P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://chillingchiliz.com/">
            Website
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>NFT </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Blender, NEOS, UE5, Hyperfy</span>
        </ListItem>
        <ListItem>
          <Meta>Twitter</Meta>
          <Link href="https://twitter.com/ChillingChiliz">
            Blue bird
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <blockquote class="twitter-tweet">
        <p lang="en" dir="ltr">
          📢 Attention, Chiliz Fam! Exciting news - we welcome{' '}
          <a href="https://twitter.com/irb0gie?ref_src=twsrc%5Etfw">@irb0gie</a>{' '}
          to our team! 7+ years of 3D software &amp; dev experience makes Bogie
          a perfect addition to our awesome team. Let&#39;s work hard, push
          boundaries, and create amazing experiences! 🌶️🔥{' '}
          <a href="https://twitter.com/hashtag/NewTeammate?src=hash&amp;ref_src=twsrc%5Etfw">
            #NewTeammate
          </a>{' '}
          <a href="https://t.co/buWzKOX9qs">pic.twitter.com/buWzKOX9qs</a>
        </p>
        &mdash; ChillingChiliz (@ChillingChiliz){' '}
        <a href="https://twitter.com/ChillingChiliz/status/1657022956394930187?ref_src=twsrc%5Etfw">
          May 12, 2023
        </a>
      </blockquote>{' '}
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          The next stage of Chiliz evolution is underway. Would you like to
          appear as your Chilling Chiliz avatar in a video meeting? Stay tuned
          for updates. If you want to learn more about us, join us on our
          Discord server 🌶️🔥{' '}
          <a href="https://twitter.com/hashtag/FaceRig?src=hash&amp;ref_src=twsrc%5Etfw">
            #FaceRig
          </a>{' '}
          Happy Sunday Gang!{' '}
          <a href="https://t.co/zt1yu3iL9j">pic.twitter.com/zt1yu3iL9j</a>
        </p>
        &mdash; ChillingChiliz (@ChillingChiliz){' '}
        <a href="https://twitter.com/ChillingChiliz/status/1650136263935000577?ref_src=twsrc%5Etfw">
          April 23, 2023
        </a>
      </blockquote>{' '}
      <script async src="https://platform.twitter.com/widgets.js"></script>
      <WorkImage
        src="/images/works/chill1.png"
        alt="my first task as a chilliDev"
      />
      <WorkImage
        src="/images/works/chill2.png"
        alt="another snippet of my first task as a chilliDev"
      />
      <WorkImage
        src="/images/works/chill3.png"
        alt="another snippet of my first task as a chilliDev"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
