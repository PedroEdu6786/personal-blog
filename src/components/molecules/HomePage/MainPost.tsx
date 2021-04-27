import Icon from '@chakra-ui/icon'
import { HStack, Stack, Text } from '@chakra-ui/layout'
import { FiClock } from 'react-icons/fi'
import Date from '../../atoms/HomePage/Date'
import PostDescription from '../../atoms/HomePage/PostDescription'
import PostImage from '../../atoms/HomePage/PostImage'
import PostTitle from '../../atoms/HomePage/PostTitle'

const MainPost = ({
  isMostRecent,
  title,
  description,
  date,
  readingTime,
  img,
}) => {
  return (
    <Stack m="auto" spacing="1rem">
      {/* ---------------- POST IMAGE ---------------- */}
      <PostImage
        src={img}
        alt="post-image"
        width={'315px'}
        height={'200px'}
        borderRadius="10px"
      />

      {/* ---------------- POST INFO ---------------- */}
      <Stack spacing=".5rem">
        <Date>{date}</Date>
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
        <HStack color="portfolio.darkGray" fontWeight="semibold">
          <Text>Read more</Text>
          <HStack>
            <Icon as={FiClock} fontSize="1.25rem" />
            <Text>{readingTime} min read</Text>
          </HStack>
        </HStack>
      </Stack>
    </Stack>
  )
}

export default MainPost
