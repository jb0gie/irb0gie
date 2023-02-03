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
  PopoverCloseButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
const Page = () => {
  return (
    <Layout title="ｂｉｏ">
      <Container my={56}>
        <Box
          borderRadius="xl"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          // bgGradient={[
          //   'linear(to-tr, teal.300, yellow.400)',
          //   'linear(to-t, blue.200, teal.500)',
          //   'linear(to-b, orange.100, purple.300)'
          // ]}
          p={3}
          mb={6}
          align="center"
        >
          𝕀ℝ░🆂🅸🅼🅿🅻🅴😅
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
              ｓｏｍｅｔｉｎｇ　ｔｈａｔ　ｃａｕｓｅｓ　
              <br />
              ｆｅａｒ ｉｎ　ｍａｎｙ　ｐｐｌ, <br />
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
                    ｓｚａｂｏ０ｇｅｎｉｅ
                  </Heading>
                </PopoverHeader>
                <PopoverBody>
                  <p>
                    <code>𝕀ℝ░ custom .vrm</code>
                  </p>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h2" variant="section-title">
            <code>𝕀ℝ░</code>ｓｚａｂｏ０ｇｅｎｉｅ,
          </Heading>
          <Paragraph>
            <code>𝕀ℝ░</code> creative innovative 3️⃣🆃🅷🅸🅽🅺🅴🆁🧠, conceptualizing
            delightful visual experiences for all that in-turn empower &amp;
            engage users. currently <code>𝕀ℝ░</code> working on various projects
            in various areas of art and computer science, within{' '}
            <NextLink href="https://dsc.gg/entrypoint" passHref>
              <Link>An🎙️Entrypoint</Link>
            </NextLink>
            .
          </Paragraph>
          <br />
          <Paragraph>
            <code>𝕀ℝ░</code> has a{' '}
            <NextLink
              href="https://www.guilded.gg/r/zzNRgkYnvR?i=dVbZbQ5d"
              passHref
            >
              <Link>kinda unused bungalow</Link>
            </NextLink>
            .<code>𝕀ℝ░</code> do tests but i've grown quite organized since
            using it.
            <code>𝕀ℝ░</code> think this is bc with cord you can only truly
            enjoy it when you has nitro <code>a.k.a</code>...which is a scam...
            so instead
            <code>𝕀ℝ░</code> a telegram OG. i think it's waaaay better than
            cord. you can stay tuned exclusively here:{' '}
            <NextLink href="https://t.me/probablentry" passHref>
              <Link>
                <code>@probablentry</code>
              </Link>
            </NextLink>
          </Paragraph>
          <br />
          <Box align="center" my={4}>
            <NextLink href="/works" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                ｓｔｕｆｆ　<code>𝕀ℝ░</code> ｄｏ　怨果パ
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Ｏｒｉｇｉｎｓ　囲ひ員
          </Heading>
          <BioSection>
            <BioYear>１９９０　慰ガホ</BioYear>
            <br />
            Spawned 🧑🏾‍🍼 in a EU-west server.
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
            <a href="https://www.port.ac.uk/">UoP</a>.
          </BioSection>
          <BioSection>
            <BioYear>２０１５⊶２２　やサ何</BioYear>
            <br />
            Worked as a Media Developer @{' '}
            <a href="https://www.gov.uk/government/organisations/ministry-of-defence">
              MoD
            </a>
          </BioSection>
          <BioSection>
            <BioYear>~/ｎｏｗ　っラぇ</BioYear>
            <br />
            ｒｉｇｈｔ░ｈｅｒｅ🧘🏾
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            ❤️‍🔥Ｈｏｂｂｉｅｓ　アじニ
          </Heading>
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Link href="https://youtu.be/vqgODEkEFeQ">Art🎨</Link>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                now 𝕀ℝ░ wouldn't call myself an <code>artist</code>, but ig 𝕀ℝ░
                now.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Link href="https://vimeo.com/manage/videos/333606696">
                      {' '}
                      Music🎧
                    </Link>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                𝕀ℝ░ mean on the technical side of things i would have to to say,
                because 𝕀ℝ░ dance and feel musical 𝕀ℝ░ <code>musician</code>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Link href="https://www.youtube.com/embed/yGxexLnakQ4">
                      {' '}
                      Dancing 🕺🏾
                    </Link>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                ever since 𝕀ℝ░ could remember 𝕀ℝ░ considered myself a
                <code>dancer</code>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Link href="https://www.youtube.com/shorts/4VfOjGv1xk4">
                      {' '}
                      Filmography🤳🏾
                    </Link>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                there is something about <code>filmography</code> and it's vast
                spectrum throughout life 𝕀ℝ░ continued to peer into
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Link href="https://www.youtube.com/watch?v=VQeiwBYj240&list=PL8AT6MsTVpK2ZidSIELJDvJ-jgWcEuNOw">
                      Travel✈️
                    </Link>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                having a lucky childhood means frequent <code>travel</code> and
                resets
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Link href="https://youtu.be/YBqlwHKjQ4A?t=10011">
                      {' '}
                      Games🕹️
                    </Link>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                since sega and sonic 𝕀ℝ░ been hooked on <code>games</code> and
                how they tick
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Link href="https://hackmd.io/@irb0gie"> Writing📝</Link>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <code>writing</code> is as important as listening which 𝕀ℝ░
                consider a sacred art.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Link href="https://www.youtube.com/watch?v=tb6bUYpM1_0">
                      {' '}
                      Podcasts🎙️
                    </Link>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                this is kinda a new frontier for me ngl like it's a new playing
                field....putting it all together vibes inni
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
