import Icon from '@chakra-ui/icon'
import { Box, HStack, Stack, Text } from '@chakra-ui/layout'
import { FiClock } from 'react-icons/fi'
import { Post as IPost } from '../../../interfaces/Post'
import Date from '../../atoms/HomePage/Date'
import PostImage from '../../atoms/HomePage/PostImage'
import PostTitle from '../../atoms/HomePage/PostTitle'
import LinkR from '../../atoms/Shared/LinkR'

const Post = ({ id: blogId, title, date, readingTime, img }: IPost) => {
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
            src={img}
            alt="post-image"
            layout="fill"
            borderRadius="10px"
          />
        </Box>
      </LinkR>

      {/* ---------------- POST INFO ---------------- */}
      <Stack spacing={{ base: '.2rem', lg: '.5rem' }} maxW="20rem">
        <LinkR href="/blogs/[blogId]" as={`/blogs/${blogId}`}>
          <Date fontSize={{ base: '.9rem', md: '1.125rem' }}>{date}</Date>
        </LinkR>
        <LinkR href="/blogs/[blogId]" as={`/blogs/${blogId}`}>
          <PostTitle fontSize={{ base: '1.15rem', md: '1.5rem' }}>
            {title}
          </PostTitle>
        </LinkR>
        <LinkR href="/blogs/[blogId]" as={`/blogs/${blogId}`}>
          <HStack
            color="portfolio.darkGray"
            fontWeight="semibold"
            fontSize={{ base: '.9rem', md: '1.125rem' }}
          >
            <Icon as={FiClock} />
            <Text>{readingTime} min read</Text>
          </HStack>
        </LinkR>
      </Stack>
    </Stack>
  )
}

export default Post
