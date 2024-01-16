import Logo from './logo'
import NextLink from 'next/link'
import Image from 'next/image'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuButton,
  IconButton,
  useColorModeValue,
  MenuList,
  Tooltip
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#247420' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}
const Social = ({ href, children }) => (
  <NextLink href={href} passHref>
    <Link p={2}>
      <Tooltip hasArrow label="Follow me Yup.io" bg="gray.300" color="black">
        {children}
      </Tooltip>
    </Link>
  </NextLink>
)

const Hyperfy = ({ href, children }) => (
  <NextLink href={href} passHref>
    <Link p={2}>
      <Tooltip
        hasArrow
        label="Visit my Hyperfy World"
        bg="gray.300"
        color="black"
      >
        {children}
      </Tooltip>
    </Link>
  </NextLink>
)

const Support = ({}) => (
  <a
    href="https://www.buymeacoffee.com/irb0gie"
    target="_blank"
    rel="noreferrer"
  >
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=irb0gie&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff" />
  </a>
)

const YupLogo = ({}) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 175 91"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M58.0577 4.53169C58.4323 3.85528 57.9507 3.04452 57.1863 3.06454L44.5866 3.39447C44.2138 3.40423 43.872 3.62067 43.6999 3.95596L30.3342 29.991C29.9607 30.7184 28.9342 30.7453 28.5607 30.0374L15.195 4.70238C15.0229 4.37611 14.6811 4.17757 14.3083 4.18734L1.70512 4.51736C0.941494 4.53736 0.459841 5.37181 0.832809 6.02862L22.7231 44.5783C22.8066 44.7253 22.8505 44.8923 22.8505 45.0633V69.9126C22.8505 70.4649 23.298 70.9009 23.8501 70.8864L34.9492 70.5958C35.5013 70.5813 35.9488 70.1219 35.9488 69.5696V44.7213C35.9488 44.5497 35.993 44.3798 36.077 44.228L58.0577 4.53169Z"
      fill="url(#paint0_linear_14725_8922)"
    />
    <path
      d="M150.879 18.4004C145.12 18.5512 140.663 20.4261 137.347 23.5996C136.651 24.2653 135.391 23.8381 135.391 22.8875V21.145C135.391 20.5927 134.943 20.1567 134.391 20.1711L124.057 20.4417C123.505 20.4562 123.057 20.9156 123.057 21.4679V86.4169C123.057 86.9692 123.505 87.4052 124.057 87.3907L134.391 87.1201C134.943 87.1056 135.391 86.6462 135.391 86.0939V65.2231C135.391 64.2725 136.651 63.7792 137.347 64.4086C140.663 67.4083 145.12 69.0498 150.879 68.899C163.691 68.5635 174.208 57.2894 174.208 43.0388C174.208 28.7883 163.691 18.0649 150.879 18.4004ZM148.585 57.1952C141.032 57.393 135.391 52.0892 135.391 44.0553C135.391 36.0214 141.032 30.4222 148.585 30.2244C156.233 30.0241 161.874 35.3279 161.874 43.3618C161.874 51.3957 156.233 56.9949 148.585 57.1952Z"
      fill="url(#paint1_linear_14725_8922)"
    />
    <path
      d="M72.8929 33.6577C67.4077 33.8013 62.8905 29.7474 62.3259 24.4327C62.2721 23.815 62.7561 23.2909 63.3476 23.2754L65.2298 23.2261C65.8482 23.2099 66.3322 23.6548 66.4397 24.2442C66.9506 27.3263 69.6394 29.6515 72.8929 29.5663C76.1463 29.4811 78.8351 27.042 79.346 23.9062C79.4535 23.3112 79.9375 22.841 80.556 22.8248L82.4381 22.7755C83.0565 22.7593 83.5405 23.285 83.4599 23.8792C82.8952 29.2236 78.3511 33.5147 72.8929 33.6577Z"
      fill="url(#paint2_linear_14725_8922)"
    />
    <path
      d="M107.794 30.6713L105.912 30.7205C105.293 30.7367 104.809 30.2918 104.702 29.7025C104.191 26.6204 101.502 24.2952 98.2487 24.3804C94.9952 24.4656 92.3064 26.9047 91.7955 30.0404C91.688 30.6354 91.204 31.1057 90.5856 31.1219L88.7034 31.1712C88.085 31.1873 87.601 30.6617 87.6817 30.0674C88.2463 24.723 92.7635 20.4326 98.2487 20.289C103.734 20.1453 108.251 24.1992 108.816 29.514C108.869 30.1047 108.385 30.6558 107.794 30.6713Z"
      fill="url(#paint3_linear_14725_8922)"
    />
    <path
      d="M61.2237 42.1469C60.8204 42.1575 60.5246 42.5151 60.5515 42.8913C61.385 50.487 65.6334 56.9435 71.7101 60.8219V41.8723L61.2237 42.1469V42.1469Z"
      fill="#FF0B4A"
    />
    <path
      d="M71.7104 41.8721V60.8216C75.5017 63.2526 80.0189 64.6416 84.8856 64.6488V41.5271L71.7104 41.8721Z"
      fill="#FF9C00"
    />
    <path
      d="M84.8853 64.6489C85.1004 64.6432 85.3424 64.6638 85.5575 64.6582C90.1016 64.5392 94.3768 63.216 98.0336 60.9938V41.1828L84.8584 41.5278V64.6496L84.8853 64.6489Z"
      fill="#F6C900"
    />
    <path
      d="M110.604 41.5226C110.658 41.1146 110.334 40.7978 109.927 40.8085L97.9888 41.1211V61.0711C104.865 56.9336 109.711 49.7591 110.604 41.5226Z"
      fill="#00E586"
    />
    <path
      d="M86.0682 68.7357C69.7203 69.433 56.3301 56.1098 56.3301 39.7173V39.2328C56.3301 38.6676 56.7872 38.198 57.3518 38.1832L113.763 36.706C114.328 36.6912 114.785 37.1369 114.785 37.7021V38.725C114.812 54.686 101.959 68.0504 86.0682 68.7357ZM61.2237 42.1463C60.8204 42.1568 60.5246 42.5145 60.5515 42.8906C61.9497 55.4243 72.6242 64.9695 85.5574 64.6308C98.4905 64.2921 109.165 54.1879 110.563 41.581C110.617 41.1759 110.294 40.8613 109.891 40.8719L61.2237 42.1463Z"
      fill="url(#paint4_linear_14725_8922)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_14725_8922"
        x1="174.208"
        y1="0.000219569"
        x2="68.9716"
        y2="113.181"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="0.394547" stop-color="#EAEAEA" />
        <stop offset="0.458988" stop-color="#ECE9DD" />
        <stop offset="0.589717" stop-color="#EEEEEB" />
        <stop offset="1" stop-color="#EBEAE6" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_14725_8922"
        x1="174.208"
        y1="0.000219569"
        x2="68.9716"
        y2="113.181"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="0.394547" stop-color="#EAEAEA" />
        <stop offset="0.458988" stop-color="#ECE9DD" />
        <stop offset="0.589717" stop-color="#EEEEEB" />
        <stop offset="1" stop-color="#EBEAE6" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_14725_8922"
        x1="83.4687"
        y1="22.7485"
        x2="70.4551"
        y2="36.4964"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="0.394547" stop-color="#EAEAEA" />
        <stop offset="0.458988" stop-color="#ECE9DD" />
        <stop offset="0.589717" stop-color="#EEEEEB" />
        <stop offset="1" stop-color="#EBEAE6" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_14725_8922"
        x1="108.82"
        y1="20.0122"
        x2="95.8062"
        y2="33.7601"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="0.394547" stop-color="#EAEAEA" />
        <stop offset="0.458988" stop-color="#ECE9DD" />
        <stop offset="0.589717" stop-color="#EEEEEB" />
        <stop offset="1" stop-color="#EBEAE6" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_14725_8922"
        x1="114.785"
        y1="36.6793"
        x2="76.4082"
        y2="74.6725"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="0.394547" stop-color="#EAEAEA" />
        <stop offset="0.458988" stop-color="#ECE9DD" />
        <stop offset="0.589717" stop-color="#EEEEEB" />
        <stop offset="1" stop-color="#EBEAE6" />
      </linearGradient>
    </defs>
  </svg>
)

// const Mastodon = ({ href, children }) => (
//   <NextLink href={href} passHref>
//     <Link p={2} rel="me">
//       <Tooltip
//         hasArrow
//         label="Follow me on Mastodon"
//         bg="gray.300"
//         color="black"
//       >
//         {children}
//       </Tooltip>
//     </Link>
//   </NextLink>
// )
// const BlueSky = ({ href, children }) => (
//   <NextLink href={href} passHref>
//     <Link p={2}>
//       <Tooltip
//         hasArrow
//         label="Follow me on BlueSky"
//         bg="gray.300"
//         color="black"
//       >
//         {children}
//       </Tooltip>
//     </Link>
//   </NextLink>
// )

const Navbar = (props) => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#52525b90', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Logo />
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          spacing={12}
        >
          <LinkItem href="/works" path={path}>
            𝕎𝕆ℝ𝕂𝕊
          </LinkItem>
          {/* <LinkItem href="/posts" path={path}>
            ℙ𝕆𝕊𝕋𝕊
          </LinkItem> */}
          {/* <Mastodon href="https://mastodon.247420.xyz/@irb0gie">
            <svg
              width="32"
              height="32"
              viewBox="0 0 61 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60.7539 14.3904C59.8143 7.40642 53.7273 1.90257 46.5117 0.836066C45.2943 0.655854 40.6819 0 29.9973 0H29.9175C19.2299 0 16.937 0.655854 15.7196 0.836066C8.70488 1.87302 2.29885 6.81852 0.744617 13.8852C-0.00294988 17.3654 -0.0827298 21.2237 0.0561464 24.7629C0.254119 29.8384 0.292531 34.905 0.753482 39.9598C1.07215 43.3175 1.62806 46.6484 2.41704 49.9276C3.89445 55.9839 9.87499 61.0239 15.7344 63.0801C22.0077 65.2244 28.7542 65.5804 35.2184 64.1082C35.9295 63.9428 36.6318 63.7508 37.3252 63.5321C38.8971 63.0329 40.738 62.4745 42.0913 61.4937C42.1099 61.4799 42.1251 61.4621 42.1358 61.4417C42.1466 61.4212 42.1526 61.3986 42.1534 61.3755V56.4773C42.153 56.4557 42.1479 56.4345 42.1383 56.4151C42.1287 56.3958 42.1149 56.3788 42.0979 56.3655C42.0809 56.3522 42.0611 56.3429 42.04 56.3382C42.019 56.3335 41.9971 56.3336 41.9761 56.3384C37.8345 57.3276 33.5905 57.8234 29.3324 57.8156C22.0045 57.8156 20.0336 54.3384 19.4693 52.8908C19.0156 51.6397 18.7275 50.3346 18.6124 49.0088C18.6112 48.9866 18.6153 48.9643 18.6243 48.9439C18.6333 48.9236 18.647 48.9056 18.6643 48.8915C18.6816 48.8774 18.7019 48.8675 18.7237 48.8628C18.7455 48.858 18.7681 48.8585 18.7897 48.8641C22.8622 49.8465 27.037 50.3423 31.2265 50.3412C32.234 50.3412 33.2387 50.3412 34.2463 50.3146C38.4598 50.1964 42.9009 49.9808 47.0465 49.1713C47.1499 49.1506 47.2534 49.1329 47.342 49.1063C53.881 47.8507 60.1038 43.9097 60.7362 33.9301C60.7598 33.5372 60.8189 29.8148 60.8189 29.4071C60.8218 28.0215 61.2651 19.5781 60.7539 14.3904Z"
                fill="url(#paint0_linear_89_8)"
              />
              <path
                d="M50.3943 22.237V39.5876H43.5185V22.7481C43.5185 19.2029 42.0411 17.3949 39.036 17.3949C35.7325 17.3949 34.0778 19.5338 34.0778 23.7585V32.9759H27.2434V23.7585C27.2434 19.5338 25.5857 17.3949 22.2822 17.3949C19.2949 17.3949 17.8027 19.2029 17.8027 22.7481V39.5876H10.9298V22.237C10.9298 18.6918 11.835 15.8754 13.6453 13.7877C15.5128 11.7049 17.9623 10.6355 21.0028 10.6355C24.522 10.6355 27.1813 11.9885 28.9542 14.6917L30.665 17.5633L32.3788 14.6917C34.1517 11.9885 36.811 10.6355 40.3243 10.6355C43.3619 10.6355 45.8114 11.7049 47.6847 13.7877C49.4931 15.8734 50.3963 18.6899 50.3943 22.237Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_89_8"
                  x1="30.5"
                  y1="0"
                  x2="30.5"
                  y2="65"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6364FF" />
                  <stop offset="1" stopColor="#563ACC" />
                </linearGradient>
              </defs>
            </svg>
          </Mastodon> */}
          <Social href="https://app.yup.io/account/0x91D4eBb05d3273bdB74Af69c20B826F9E76Ae542">
            <YupLogo />
          </Social>
          <Hyperfy href="https://hyperfy.io/thegame">
            <svg
              width="32"
              height="32"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M149.882 287.948L150 288L150 287.948L235.841 131.604C239.255 125.314 234.719 117.649 227.582 117.649L150 117.649V11.0522L150.114 11.0522L150 11L150 11.0522L64.1593 167.396C60.7453 173.686 65.2813 181.351 72.4175 181.351H150V287.948H149.882Z"
                fill="white"
              />
            </svg>
          </Hyperfy>
          <Support />
          <ThemeToggleButton />
        </Stack>

        <Box flex={1} align="right">
          <Box ml={1} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <Box p={4} align="center">
                  <ThemeToggleButton />
                </Box>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>𝕨𝕠𝕣𝕜𝕤</MenuItem>
                </NextLink>
                {/* <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>𝕡𝕠𝕤𝕥𝕤</MenuItem>
                </NextLink> */}
                <MenuItem
                  as={Link}
                  href="https://app.yup.io/account/0x91D4eBb05d3273bdB74Af69c20B826F9E76Ae542"
                >
                  ｓｏｃｉａｌ　ヒー河
                </MenuItem>
                <MenuItem as={Link} href="https://hyperfy.io/thegame">
                  ❓ ｈｕｈ　内謁履
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
