import { Box, HStack, Stack, Text } from '@chakra-ui/layout'
import PublishDate from '../../atoms/HomePage/PublishDate'
import PostDescription from '../../atoms/HomePage/PostDescription'
import PostImage from '../../atoms/HomePage/PostImage'
import PostTitle from '../../atoms/Shared/PostTitle'
import LinkR from '../../atoms/Shared/LinkR'
import ReadTime from '../../atoms/Shared/ReadTime'

const MainPost = ({ uuid: blogId, content, published_at: date }) => {
  const { description, read_time, title, image } = content

  const SRC = `http:${image}`

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
        <LinkR href="/blogs/[blogId]" as={`/blogs/${blogId}`}>
          <PostImage
            src={SRC}
            alt="post-image"
            layout="fill"
            borderRadius="10px"
          />
        </LinkR>
      </Box>

      {/* ---------------- POST INFO ---------------- */}
      <Stack
        spacing={{ base: '.5rem', lg: '1rem' }}
        fontSize={{ md: '1.25rem', lg: '1.5rem' }}
        justify="space-between"
      >
        <PublishDate>{date}</PublishDate>
        <LinkR href="/blogs/[blogId]" as={`/blogs/${blogId}`}>
          <PostTitle fontSize={{ base: '1.5rem', md: '2rem', lg: '2.25rem' }}>
            {title}
          </PostTitle>
        </LinkR>
        <PostDescription>{description}</PostDescription>
        <HStack
          color="portfolio.darkGray"
          fontWeight="semibold"
          fontSize={{ md: '1.15rem' }}
        >
          <LinkR href="/blogs/[blogId]" as={`/blogs/${blogId}`}>
            <Text>Read more</Text>
          </LinkR>
          <ReadTime readingTime={read_time} />
        </HStack>
      </Stack>
    </Stack>
  )
}

export default MainPost
