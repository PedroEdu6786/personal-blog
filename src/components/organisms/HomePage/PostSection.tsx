import { Box, SimpleGrid } from '@chakra-ui/layout'
import { posts } from '../../../constants/posts'
import MainPost from '../../molecules/HomePage/MainPost'
import Post from '../../molecules/HomePage/Post'

const newestPost = posts.shift()

const PostSection = () => {
  return (
    <Box id="posts" as="section">
      {/* ---------------- LATEST POST ---------------- */}
      <MainPost {...newestPost} />

      {/* ---------------- OTHER POSTS ---------------- */}
      <SimpleGrid
        mt={{ base: '4rem', md: '6rem', lg: '8rem' }}
        columns={[1, null, 2, 3]}
        justify="space-between"
        spacing={{ base: '2rem', lg: '3rem' }}
      >
        {posts.map((post) => (
          <Box key={post.id}>
            <Post {...post} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default PostSection
