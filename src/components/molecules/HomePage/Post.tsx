import { Box, Stack } from '@chakra-ui/layout'
import PublishDate from '../../atoms/HomePage/PublishDate'
import PostImage from '../../atoms/HomePage/PostImage'
import PostTitle from '../../atoms/Shared/PostTitle'
import LinkR from '../../atoms/Shared/LinkR'
import ReadTime from '../../atoms/Shared/ReadTime'

const Post = ({ uuid: blogId, content, published_at: date }) => {
  const { read_time, title, image } = content

  const SRC = `http:${image}`

  return (
    <Stack
      spacing="1rem"
      align={{ base: 'center', md: 'flex-start' }}
      direction={{ base: 'row', md: 'column' }}
    >
      {/* ---------------- POST IMAGE ---------------- */}
      <LinkR href="/blogs/[blogId]" as={`/blogs/${blogId}`}>
        <Box
          w={{ base: '120px', md: '290px', xl: '340px' }}
          h={{ base: '100px', md: '200px' }}
          pos="relative"
        >
          <PostImage
            src={SRC}
            alt="post-image"
            layout="fill"
            borderRadius="10px"
          />
        </Box>
      </LinkR>

      {/* ---------------- POST INFO ---------------- */}
      <Stack spacing={{ base: '.2rem', lg: '.5rem' }} maxW="20rem">
        <PublishDate fontSize={{ base: '.9rem', md: '1.125rem' }}>
          {date}
        </PublishDate>
        <LinkR href="/blogs/[blogId]" as={`/blogs/${blogId}`}>
          <PostTitle fontSize={{ base: '1.15rem', md: '1.5rem' }}>
            {title}
          </PostTitle>
        </LinkR>

        <ReadTime readingTime={read_time} />
      </Stack>
    </Stack>
  )
}

export default Post
