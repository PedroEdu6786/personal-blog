import Icon from '@chakra-ui/icon'
import { Box, HStack, Stack, Text } from '@chakra-ui/layout'
import { FiClock } from 'react-icons/fi'
import PublishDate from '../../atoms/HomePage/PublishDate'
import PostImage from '../../atoms/HomePage/PostImage'
import PostTitle from '../../atoms/Shared/PostTitle'
import LinkR from '../../atoms/Shared/LinkR'

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
        <HStack
          color="portfolio.darkGray"
          fontWeight="semibold"
          fontSize={{ base: '.9rem', md: '1.125rem' }}
        >
          <Icon as={FiClock} />
          <Text>{read_time} min read</Text>
        </HStack>
      </Stack>
    </Stack>
  )
}

export default Post
