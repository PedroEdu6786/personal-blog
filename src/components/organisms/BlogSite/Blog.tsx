import { Box, HStack, Stack } from '@chakra-ui/layout'
import Date from '../../atoms/HomePage/Date'
import PostDescription from '../../atoms/HomePage/PostDescription'
import PostImage from '../../atoms/HomePage/PostImage'
import PostTitle from '../../atoms/Shared/PostTitle'
import ReadTime from '../../atoms/Shared/ReadTime'

const Blog = ({ selectedPost }) => {
  const { title, description, img, date, readingTime } = selectedPost

  return (
    <Box as="section">
      <Stack mb={{ base: '2rem', md: '4rem' }} spacing="1rem">
        <PostTitle>{title}</PostTitle>
        <HStack>
          <Date>{date}</Date>
          <ReadTime readingTime={readingTime} />
        </HStack>
        {/* ---------------- POST IMAGE ---------------- */}
        <Box
          minW="200px"
          w="100%"
          h={{ base: '300px', md: '350px', lg: '325px' }}
          pos="relative"
        >
          <PostImage
            src={img}
            alt="post-image"
            layout="fill"
            borderRadius="10px"
          />
        </Box>
      </Stack>
      <Stack spacing="1rem" fontSize={{ md: '1.25rem' }}>
        <PostDescription fontWeight="semibold">{description}</PostDescription>
        <PostDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          adipisci ad omnis minima accusamus veniam consequuntur maxime
          perspiciatis voluptatibus, illum vitae corrupti reprehenderit ducimus
          placeat impedit beatae qui sit quibusdam neque officiis. Amet
          eligendi, doloribus aliquid magni, cum iste illo alias pariatur totam
          impedit nisi, sint quos ipsa similique recusandae dolorum mollitia
          consequuntur blanditiis? Fugit eaque magni laudantium, nulla
          asperiores quas dolor consequuntur fugiat eum atque animi quaerat
          minus corrupti quia iusto, et vel nobis rem autem natus ut assumenda
          explicabo aliquam repellendus! Iure doloribus dolorem ratione nobis
          minus quam, omnis saepe autem explicabo libero impedit, odit eveniet,
          totam nam!
        </PostDescription>
        <PostDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          adipisci ad omnis minima accusamus veniam consequuntur maxime
          perspiciatis voluptatibus, illum vitae corrupti reprehenderit ducimus
          placeat impedit beatae qui sit quibusdam neque officiis. Amet
          eligendi, doloribus aliquid magni, cum iste illo alias pariatur totam
          impedit nisi, sint quos ipsa similique recusandae dolorum mollitia
          consequuntur blanditiis? Fugit eaque magni laudantium, nulla
          asperiores quas dolor consequuntur fugiat eum atque animi quaerat
          minus corrupti quia iusto, et vel nobis rem autem natus ut assumenda
          explicabo aliquam repellendus! Iure doloribus dolorem ratione nobis
          minus quam, omnis saepe autem explicabo libero impedit, odit eveniet,
          totam nam!
        </PostDescription>
      </Stack>
    </Box>
  )
}

export default Blog
