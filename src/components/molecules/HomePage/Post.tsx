import Icon from '@chakra-ui/icon'
import { HStack, Stack, Text } from '@chakra-ui/layout'
import { FiClock } from 'react-icons/fi'
import Date from '../../atoms/HomePage/Date'
import PostImage from '../../atoms/HomePage/PostImage'
import PostTitle from '../../atoms/HomePage/PostTitle'

const Post = ({ title, date, readingTime, img }) => {
  return (
    <HStack m="auto" spacing="1rem">
      {/* ---------------- POST IMAGE ---------------- */}
      <PostImage
        src={img}
        alt="post-image"
        width={'215'}
        height={'200px'}
        borderRadius="10px"
      />

      {/* ---------------- POST INFO ---------------- */}
      <Stack spacing=".2rem">
        <Date fontSize=".9rem">{date}</Date>
        <PostTitle fontSize="1.15rem">{title}</PostTitle>
        <HStack color="portfolio.darkGray" fontWeight="semibold">
          <Icon as={FiClock} fontSize=".9rem" />
          <Text fontSize=".9rem">{readingTime} min read</Text>
        </HStack>
      </Stack>
    </HStack>
  )
}

export default Post
