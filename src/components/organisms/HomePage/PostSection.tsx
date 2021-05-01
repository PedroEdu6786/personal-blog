import { Box, SimpleGrid } from '@chakra-ui/layout'
import MainPost from '../../molecules/HomePage/MainPost'
import Post from '../../molecules/HomePage/Post'
import Empty from './Empty'

const PostSection = ({ data: blogs }) => {
  const [newestPost, ...posts] = blogs

  return (
    <Box id="posts" as="section">
      {blogs.length > 0 ? (
        <>
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
        </>
      ) : (
        <Empty />
      )}
    </Box>
  )
}

export default PostSection
