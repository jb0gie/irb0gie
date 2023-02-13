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
    <Layout title="𝕓𝕚𝕠">
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
          🆂🅸🅼🅿🅻🅴😅,
          <br />
          Ⓜ️🅸🅽🅸🅼🅰🅻🅸🆂🆃🅸🅲,
          <br />
          3️⃣ 🅵🆁3️⃣3️⃣ 🆃🅷🅸🅽🅺🅴🆁🧠.
          <br />
          ｏｎ~ｎｅｔ。
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box>
            <Heading as="h1" variant="page-title">
              ｂ❍ｇｉｅ/ˈbəʊ.ɡi/
            </Heading>
            <p>
              Ｓｏｍｅｔｈｉｎｇ　ｔｈａｔ　ｃａｕｓｅｓ　ｆｅａｒ　ｉｎ　ｍａｎｙ，　
              ｏｆｔｅｎ　ｗ／ｏ　ｒｅａｓｏｎ。
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
                  alt="𝕤𝕫𝕒𝕓𝕠❍𝕘𝕖𝕟𝕚𝕖"
                />
              </PopoverTrigger>
              <PopoverContent zIndex={4}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>
                  <Heading as="h3" size="md">
                    𝕤𝕫𝕒𝕓𝕠❍𝕘𝕖𝕟𝕚𝕖
                  </Heading>
                </PopoverHeader>
                <PopoverBody>
                  <p>
                    <code>szb0gn.vrm</code>
                  </p>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h2" variant="section-title">
            <code>𝕤𝕫𝕒𝕓𝕠❍𝕘𝕖𝕟𝕚𝕖</code>
          </Heading>
          <Paragraph>
            A Creative, innovative individual, I have a deep-seated passion for
            creating visually stunning experiences that captivate and engage
            users. I am constantly pushing the boundaries of art and computer
            science, working on a variety of projects within different
            communities. My work is driven by the desire to create something new
            and exciting, while also providing an enjoyable and educational
            experience for all. I am always looking for ways to innovate and
            improve upon existing ideas, striving to make something truly unique
            and special. I contain full enthusiasm my craft is evident in every
            project I take on, as I strive to make something that will be
            remembered and appreciated by all who experience it.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref>
              <Button colorScheme="teal">
                <code>𝕨𝕠𝕣𝕜𝕤</code>
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            𝕓𝕣𝕚𝕖𝕗 𝕓𝕚𝕠 ✍🏾
          </Heading>
          <BioSection>
            <BioYear>𝟙𝟡𝟡𝟘</BioYear>
            <br />
            Spawned 🧑🏾‍🍼 in a EU-west server.
          </BioSection>
          <BioSection>
            <BioYear>𝟚𝟘𝟘𝟠</BioYear>
            <br />
            Hurricane Katrina Relief via school 🏈 team
          </BioSection>
          <BioSection>
            <BioYear>𝟚𝟘𝟙𝟜</BioYear>
            <br />
            Completed the BSc in Digital Media @{' '}
            <a href="https://www.port.ac.uk/">UoP</a>.
          </BioSection>
          <BioSection>
            <BioYear>𝟚𝟘𝟙𝟝⊶𝟚𝟚</BioYear>
            <br />
            Worked as a Private Contractor @{' '}
            <a href="https://www.gov.uk/government/organisations/ministry-of-defence">
              MoD
            </a>
          </BioSection>
          <BioSection>
            <BioYear>~/𝕟𝕠𝕨</BioYear>
            <br />
            𝕣𝕚𝕘𝕙𝕥 𝕙𝕖𝕣𝕖🧘🏾
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            ℍ𝕠𝕓𝕓𝕚𝕖𝕤 ❤️‍🔥
          </Heading>
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Link href="https://youtu.be/vqgODEkEFeQ">𝔸𝕣𝕥🎨</Link>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                now I wouldn't call myself an <code>artist</code>, but ig i'm
                wrong 🙄
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Link href="https://vimeo.com/manage/videos/333606696">
                      {' '}
                      𝕄𝕦𝕤𝕚𝕔🎧
                    </Link>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                On the technical side of things I would have to to say, because
                I'm a dancer and feel musical...<code>musician</code>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Link href="https://www.youtube.com/embed/yGxexLnakQ4">
                      {' '}
                      𝔻𝕒𝕟𝕔𝕚𝕟𝕘 🕺🏾
                    </Link>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                ever since I could remember I considered myself a
                <code>dancer</code>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Link href="https://www.youtube.com/shorts/4VfOjGv1xk4">
                      {' '}
                      ℂ𝕚𝕟𝕖𝕞𝕒𝕥𝕠𝕘𝕣𝕒𝕡𝕙𝕪🤳🏾
                    </Link>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                there is something about <code>filmography</code> and it's vast
                spectrum throughout life I have continued to peer into
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Link href="https://www.youtube.com/watch?v=VQeiwBYj240&list=PL8AT6MsTVpK2ZidSIELJDvJ-jgWcEuNOw">
                      𝕋𝕣𝕒𝕧𝕖𝕝✈️
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
                      𝔾𝕒𝕞𝕖𝕤🕹️
                    </Link>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                since sega and sonic I've been hooked on <code>games</code> and
                how they tick
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Link href="https://hackmd.io/@irb0gie">𝕎𝕣𝕚𝕥𝕚𝕟𝕘📝</Link>
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
                      ℙ𝕠𝕕𝕔𝕒𝕤𝕥𝕤🎙️
                    </Link>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                this is kinda a new frontier for me ngl like it's a new playing
                field....putting it all together vibes innit 😅
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
