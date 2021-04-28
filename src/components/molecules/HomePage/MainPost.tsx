import Icon from '@chakra-ui/icon'
import { Box, HStack, Stack, Text } from '@chakra-ui/layout'
import { FiClock } from 'react-icons/fi'
import { Post } from '../../../interfaces/Post'
import Date from '../../atoms/HomePage/Date'
import PostDescription from '../../atoms/HomePage/PostDescription'
import PostImage from '../../atoms/HomePage/PostImage'
import PostTitle from '../../atoms/HomePage/PostTitle'

const MainPost = ({ title, description, date, readingTime, img }: Post) => {
  return (
    <Stack
      m="auto"
      spacing={{ base: '1rem', lg: '1.75rem' }}
      direction={{ base: 'column', lg: 'row' }}
    >
      {/* ---------------- POST IMAGE ---------------- */}
      <Box
        minW="200px"
        w={{ lg: '1000px' }}
        h={{ base: '200px', md: '300px', lg: '325px' }}
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
      <Stack
        spacing={{ base: '.5rem', lg: '.75rem' }}
        fontSize={{ md: '1.25rem', lg: '1.5rem' }}
        justify="space-between"
      >
        <Date>{date}</Date>
        <PostTitle fontSize={{ base: '1.5rem', md: '2rem', lg: '2.25rem' }}>
          {title}
        </PostTitle>
        <PostDescription>{description}</PostDescription>
        <HStack
          color="portfolio.darkGray"
          fontWeight="semibold"
          fontSize={{ md: '1.15rem' }}
        >
          <Text>Read more</Text>
          <HStack>
            <Icon as={FiClock} fontSize={{ base: '1.25rem', md: '1.5rem' }} />
            <Text>{readingTime} min read</Text>
          </HStack>
        </HStack>
      </Stack>
    </Stack>
  )
}

export default MainPost