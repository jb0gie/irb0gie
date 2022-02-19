import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const BogieSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)
// eslint-disable-next-line react/display-name
export const BogieContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="meta-bogie"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))
function Loader() {
  return function BogieContained(BogieSpinner) {
    return (
      <BogieContainer>
        <BogieSpinner />
      </BogieContainer>
    )
  }
}

export default Loader
//bruh next ~ react is long affffff but i do like them alot...maybe not as much as svelte but RIOT is the winner