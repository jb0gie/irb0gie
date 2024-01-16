import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import MetaBogie from '../meta-bogie'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>🧞</title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9799301594836054"
          crossOrigin="anonymous"
        ></script>
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="irb0gie"
          data-description="Support me on Buy me a coffee!"
          data-message="Thanks for visiting, You can now buy me a coffee (not s̶t̶a̶r̶b̶u̶c̶k̶s̶ please!)"
          data-color="#FF813F"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <MetaBogie />
        {children}
      </Container>
    </Box>
  )
}
export default Main
