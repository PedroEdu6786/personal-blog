import { Box, Wrap, WrapItem } from '@chakra-ui/layout'
import { posts } from '../../../constants/posts'
import MainPost from '../../molecules/HomePage/MainPost'
import Post from '../../molecules/HomePage/Post'

const PostSection = () => {
  return (
    <Box id="posts" as="section" pt="7rem">
      {/* ---------------- LATEST POST ---------------- */}
      <MainPost {...posts[0]} />
      {/* ---------------- OTHER POSTS ---------------- */}
      <Wrap mt="4rem" justify="space-between" spacing="2rem">
        {posts.map((post) => (
          <WrapItem key={post.id}>
            <Post {...post} />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  )
}

export default PostSection
