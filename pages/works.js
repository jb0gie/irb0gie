import { Container, Heading, SimpleGrid, Divider, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import CurrentWork from '../components/current-work'
import RecentWork from '../components/recent-work'
import Collabs from '../components/collabs'
// import PastWork from '../components/past-work'
const Works = () => (
  <Layout title="𝕨𝕠𝕣𝕜𝕤">
    <Container my={56}>
      <CurrentWork />
      <RecentWork />
      <Collabs />
      {/* <PastWork /> */}
    </Container>
  </Layout>
)
export default Works
export { getServerSideProps } from '../components/chakra'
