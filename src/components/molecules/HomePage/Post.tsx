import Icon from '@chakra-ui/icon'
import { Box, HStack, Stack, Text } from '@chakra-ui/layout'
import { FiClock } from 'react-icons/fi'
import Date from '../../atoms/HomePage/Date'
import PostImage from '../../atoms/HomePage/PostImage'
import PostTitle from '../../atoms/HomePage/PostTitle'

const Post = ({ title, date, readingTime, img }) => {
  return (
    <Stack
      m="auto"
      spacing="1rem"
      align="center"
      direction={{ base: 'row', md: 'column' }}
    >
      {/* ---------------- POST IMAGE ---------------- */}
      <Box
        w={{ base: '150px', md: '315px' }}
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

      {/* ---------------- POST INFO ---------------- */}
      <Stack spacing=".2rem" maxW="20rem">
        <Date fontSize={{ base: '.9rem', md: '1.125rem' }}>{date}</Date>
        <PostTitle fontSize={{ base: '1.15rem', md: '1.5rem' }}>
          {title}
        </PostTitle>
        <HStack
          color="portfolio.darkGray"
          fontWeight="semibold"
          fontSize={{ base: '.9rem', md: '1.125rem' }}
        >
          <Icon as={FiClock} />
          <Text>{readingTime} min read</Text>
        </HStack>
      </Stack>
    </Stack>
  )
}

export default Post
