import { Box, Heading, HStack, Text } from '@chakra-ui/layout'
import Emoji from '../src/components/atoms/Emoji'

const Home = () => {
  return (
    <>
      {/* ---------------- HEADER ---------------- */}
      <Box id="header" as="section" pos="fixed" zIndex="10" h="5rem" w="100%">
        <HStack align="center" justify="space-between" p="2rem">
          {/* ---------------- LOGO ---------------- */}
          <HStack align="center">
            <Emoji symbol="👋🏻" />
            <Heading as="h3" fontSize="1rem">
              Pedro Cruz
            </Heading>
          </HStack>

          {/* ---------------- NAVBAR ---------------- */}
          <HStack fontWeight="bold">
            <Text>Home</Text>
            <Text>My Portfolio</Text>
          </HStack>
        </HStack>
      </Box>

      {/* ---------------- POSTS ---------------- */}
      <Box id="posts" as="section"></Box>
    </>
  )
}

export default Home
