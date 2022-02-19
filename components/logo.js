import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
	font-weirght: bold;
	font-size: 18px;
	display: inline-flex;
	align-items: center;
	height: 30px;
	line-height: 20px;
	padding: 10px;

	&:hover img {
		transform: rotate(20deg);
	}
`

const Logo = () => {
	const genie = `/images/favicon.png`
	return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={genie} alt="genie" width="20" height="20" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            ｂ０ｇｉｅ/ˈbəʊ.ɡi/
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}
export default Logo
//awww yeah ish ya boi...in component form