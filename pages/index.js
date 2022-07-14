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
          borderRadius="xl"
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
          ｉ░ｒ░🆂🅸🅼🅿🅻🅴😅
          <br />
          Ⓜ️🅸🅽🅸🅼🅰🅻🅸🆂🆃🅸🅲
          <br />
          3️⃣🆃🅷🅸🅽🅺🅴🆁🧠.
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
                    ｍ３ｔａｂ０ｇｉｅ　ぽぶ卸
                  </Heading>
                </PopoverHeader>
                <PopoverBody>
                  <p>
                    my first custom <code>.vrm</code>
                  </p>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h2" variant="section-title">
            ｗｈｏ░ｒ░ｉ
          </Heading>
          <Paragraph>
            ｉ░ｒ░ creative innovattive free thinker, conceptualising delightful
            visual experiences for all that in-turn empower &amp; engage users.
            currently working on projects, in{' '}
            <NextLink href="https://dsc.gg/entrypoint" passHref>
              <Link>An🎙️Entrypoint</Link>
            </NextLink>
            .
          </Paragraph>
          <br />
          <Paragraph>
            ｉ░ｒ░ has a{' '}
            <NextLink
              href="https://www.guilded.gg/r/zzNRgkYnvR?i=dVbZbQ5d"
              passHref
            >
              <Link>bungalow</Link>
            </NextLink>
            . ｉ░ｒ░ do tests but i've grown quite organised since using it.
            ｉ░ｒ░ tink this is bc with cord you can only truly enjoy it when
            you has nitro <code>a.k.a</code>...which is a scam. ｉ░ｒ░ telegram
            OG.{' '}
            <NextLink href="https://t.me/probablentry" passHref>
              <Link>
                <code>@probablentry</code>
              </Link>
            </NextLink>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                ｓｔｕｆｆ　ｉ░ｒ░ 　ｄｏ　怨果パ
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Ｏｒｉｇｉｎ~Ｓｔｏｒｙ　現ャの。
          </Heading>
          <BioSection>
            <BioYear>１９９０　慰ガホ</BioYear>
            <br />
            Spawned in EU-west server.
          </BioSection>
          <BioSection>
            <BioYear>２００８　ユす流</BioYear>
            <br />
            Hurricane Katrina Relief via school 🏈 team
          </BioSection>
          <BioSection>
            <BioYear>２０１４　キ音せ</BioYear>
            <br />
            Completed the BSc for Digital Media @{' '}
            <a target="_blank" href="https://www.port.ac.uk/">
              UoP
            </a>
            .
          </BioSection>
          <BioSection>
            <BioYear>２０１５⊶２２　やサ何</BioYear>
            <br />
            Worked as a Media Developer @{' '}
            <a
              target="_blank"
              href="https://www.gov.uk/government/organisations/ministry-of-defence"
            >
              MoD
            </a>
          </BioSection>
          <BioSection>
            <BioYear>~/ｐｒｅｓｅｎｔ　謁や凹</BioYear>
            <br />
            ｒｉｇｈｔ░ｈｅｒｅ🧘🏾
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            ❤️‍🔥ＨＯＢＢＩＥＳ　アじニ
          </Heading>
          <Paragraph>
            <Link target="_blank" href="https://youtu.be/vqgODEkEFeQ">
              Art🎨
            </Link>
            ,
            <Link
              target="_blank"
              href="https://vimeo.com/manage/videos/333606696"
            >
              {' '}
              Music🎧
            </Link>
            ,
            <Link
              target="_blank"
              href="https://www.youtube.com/embed/yGxexLnakQ4"
            >
              {' '}
              Dancing 🕺🏾
            </Link>
            ,
            <Link
              target="_blank"
              href="https://www.youtube.com/shorts/4VfOjGv1xk4"
            >
              {' '}
              Filmography🤳🏾
            </Link>
            ,
            <br />
            <Link
              target="_blank"
              href="https://www.youtube.com/watch?v=VQeiwBYj240&list=PL8AT6MsTVpK2ZidSIELJDvJ-jgWcEuNOw"
            >
              Travel✈️
            </Link>
            ,
            <Link target="_blank" href="https://youtu.be/YBqlwHKjQ4A?t=10011">
              {' '}
              Games🕹️
            </Link>
            ,
            <Link target="_blank" href="https://hackmd.io/@irb0gie">
              {' '}
              Writing📝
            </Link>
            ,
            <Link href="https://www.youtube.com/watch?v=tb6bUYpM1_0">
              {' '}
              Podcasts🎙️
            </Link>
            .
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
