import { Box, Heading, HStack, Stack, Text } from '@chakra-ui/layout'
import Emoji from '../src/components/atoms/HomePage/Emoji'
import Post from '../src/components/molecules/HomePage/Post'

const title = 'Lorem ipsum dolor sit amet, consectetur'
const description =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, iusto! Consectetur soluta aut error possimus quis enim'

const date = 'March 05, 2021'

const readingTime = '5'

const Home = () => {
  return (
    <Stack align="center">
      {/* ---------------- HEADER ---------------- */}
      <Box
        id="header"
        as="section"
        pos="fixed"
        zIndex="10"
        h="5rem"
        w="100%"
        bgColor="portfolio.gray"
      >
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
      <Box id="posts" as="section" pt="7rem" w="100%">
        <Post
          isMostRecent
          title={title}
          description={description}
          date={date}
          readingTime={readingTime}
        />
      </Box>
    </Stack>
  )
}

export default Home
