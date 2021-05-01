import { Box, HStack, Stack } from '@chakra-ui/layout'
import PublishDate from '../../atoms/HomePage/PublishDate'
import PostDescription from '../../atoms/HomePage/PostDescription'
import PostImage from '../../atoms/HomePage/PostImage'
import PostTitle from '../../atoms/Shared/PostTitle'
import ReadTime from '../../atoms/Shared/ReadTime'
import Storyblok from '../../../lib/storyblok'
import PostContent from '../../molecules/BlogSite/PostContent'

const Blog = ({ content, published_at: date }) => {
  const { description, read_time, title, image, bio } = content

  const SRC = `http:${image}`

  const long_text = Storyblok.richTextResolver.render(bio)

  return (
    <Box as="section">
      <Stack mb={{ base: '2rem', md: '4rem' }} spacing="1rem">
        <PostTitle>{title}</PostTitle>
        <HStack>
          <PublishDate>{date}</PublishDate>
          <ReadTime readingTime={read_time} />
        </HStack>
        {/* ---------------- POST IMAGE ---------------- */}
        <Box
          minW="200px"
          w="100%"
          h={{ base: '300px', md: '350px', lg: '375px' }}
          pos="relative"
        >
          <PostImage
            src={SRC}
            alt="post-image"
            layout="fill"
            borderRadius="10px"
          />
        </Box>
      </Stack>
      <PostDescription as="i" fontSize={{ md: '1.25rem' }}>
        {description}
      </PostDescription>
      <PostContent mt="3rem" dangerouslySetInnerHTML={{ __html: long_text }} />
    </Box>
  )
}

export default Blog
