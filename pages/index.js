/*eslint no-unused-vars: "error"*/
import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
const Page = () => {
  return (
    <Layout title="ｂｉｏ">
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAplha.500', 'whiteAlpha.200')}
          // bgGradient={[
          //   'linear(to-tr, teal.300, yellow.400)',
          //   'linear(to-t, blue.200, teal.500)',
          //   'linear(to-b, orange.100, purple.300)'
          // ]}
          p={3}
          mb={6}
          align="center"
        >
          𝐢 𝐫 🆂🅸🅼🅿🅻🅴😅， Ⓜ️🅸🅽🅸🅼🅰🅻🅸🆂🆃🅸🅲， 3️⃣🆃🅷🅸🅽🅺🅴🆁🧠.
          <br />
          ｂａｓｅｄ　ｏｎ　ｎｅｔ。
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box>
            <Heading as="h1" variant="page-title">
              ｂ０ｇｉｅ/ˈbəʊ.ɡi/
            </Heading>
            <p>
              ｓｏｍｅｔｉｎｇ　ｔｈａｔ　ｃａｕｓｅｓ　ｆｅａｒ　ｉｎ　ｍａｎｙ　ｐｐｌ。
              ｏｆｔｅｎ　ｗｉｔｈｏｕｔ ｒａｉｓｉｎ。
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Popover>
              <PopoverTrigger>
                <Image
                  borderColor="whiteAlpha.800"
                  borderWidth={2}
                  borderStyle="solid"
                  maxWidth="100px"
                  display="inline-block"
                  borderRadius="full"
                  src="images/avi.png"
                  alt="m3tab0gie"
                />
              </PopoverTrigger>
              <PopoverContent zIndex={4}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>
                  <Heading as="h3" size="md">
                    ｂ０ｇｉｅ
                  </Heading>
                </PopoverHeader>
                <PopoverBody>
                  <p>by Yami.</p>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h2" variant="section-title">
            📀ＥＸＰ。
          </Heading>
          <Paragraph>
            i r　creative innovattive free thinker, conceptualising delightful
            visual experiences for all that in-turn empower &amp; engage users.
            currently working on projects, in{' '}
            <NextLink href="https://dsc.gg/entrypoint" passHref>
              <Link>An🎙️Entrypoint</Link>
            </NextLink>
            .
          </Paragraph>
          <Paragraph>
            i r find <code>alt-cord</code>a.k.a.{' '}
            <NextLink href="https://guilded.gg" passHref>
              <Link>Guilded</Link>
            </NextLink>
            .{' '}
            i r has a{' '}
            <NextLink href="https://www.guilded.gg/r/zzNRgkYnvR?i=dVbZbQ5d" passHref>
              <Link>bungalow</Link>
            </NextLink>{' '}
            i made a test but i've grown quite organised since using it. i r tink this is 
            bc with cord you can only truly enjoy it when you has nitro...which is a scam.
            i r telegram OG.{' '}
            <NextLink href="https://t.me/probablentry" passHref>
              <Link><code>@probablentry</code></Link>
            </NextLink>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                ｆｏｌｉｏ
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            ＯＲＩＧＩＮＳ。
          </Heading>
          <BioSection>
            <BioYear>"９０</BioYear>
            Spawned in EU-west server.
          </BioSection>
          <BioSection>
            <BioYear>"０８</BioYear>
            Hurricane Katrina Relief via High School 🏈 Team
          </BioSection>
          <BioSection>
            <BioYear>"１４</BioYear>
            Completed the BSc for Digital Media @{' '}
            <a href="https://www.port.ac.uk/">UoP</a>.
          </BioSection>
          <BioSection>
            <BioYear>"１５⊶２２</BioYear>
            Worked as a Media Developer @{' '}
            <a href="https://www.gov.uk/government/organisations/ministry-of-defence">
              MoD
            </a>
          </BioSection>
          <BioSection>
            <BioYear>ｒｉｇｈｔ　ｎｏｗ</BioYear> Within the momemt. 🧘🏾
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            ｂ０ｇｉｅ❤️‍🔥
          </Heading>
          <Paragraph>
            Art🧑🏾‍🎨🎨, Music🎶🎧,{' '}
            <Link href="https://www.youtube.com/embed/yGxexLnakQ4">
              Dancing 🕺🏾💃🏾
            </Link>
            , Filmography🤳🏾🎞️, Travel✈️🏝️, Games🕹️🏓, Writing📝📚, <Link href="https://www.youtube.com/watch?v=tb6bUYpM1_0">Podcasts🗣️🎙️</Link>
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
