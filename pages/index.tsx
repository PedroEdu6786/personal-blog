import {
  Box,
  Center,
  Heading,
  HStack,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/layout'
import Emoji from '../src/components/atoms/HomePage/Emoji'
import MainPost from '../src/components/molecules/HomePage/MainPost'
import Post from '../src/components/molecules/HomePage/Post'
import { posts } from '../src/constants/posts'

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
      <Box id="posts" as="section" pt="7rem" w="100%" px="2rem">
        {/* ---------------- LATEST POST ---------------- */}
        <MainPost isMostRecent {...posts[0]} />
        {/* ---------------- OTHER POSTS ---------------- */}
        <Wrap mt="4rem" spacing="2rem">
          {posts.map((post) => (
            <WrapItem key={post.id}>
              <Post {...post} />
            </WrapItem>
          ))}
        </Wrap>
      </Box>

      {/* ---------------- POSTS ---------------- */}
      <Box id="footer" as="section" w="100%" pt="5rem">
        <HStack
          w="100%"
          p="2rem"
          bgColor="portfolio.darkBlue"
          color="portfolio.white"
          fontWeight="semibold"
          justify="center"
        >
          <Text>Made with </Text>
          <Emoji symbol="❤️" />
          <Text>by Pedro Cruz</Text>
        </HStack>
      </Box>
    </Stack>
  )
}

export default Home
