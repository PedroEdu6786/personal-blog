import Icon from '@chakra-ui/icon'
import { Box, Heading, HStack, Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import Date from '../../src/components/atoms/HomePage/Date'
import PostDescription from '../../src/components/atoms/HomePage/PostDescription'
import PostImage from '../../src/components/atoms/HomePage/PostImage'
import ReadTime from '../../src/components/atoms/Shared/ReadTime'
import BlogTemplate from '../../src/components/templates/BlogTemplate'
import { posts } from '../../src/constants/posts'

const BlogPost = ({ selectedPost }) => {
  const { title, description, img, date, readingTime } = selectedPost

  return (
    <BlogTemplate>
      <Stack spacing="1rem">
        <Heading>{title}</Heading>
        {/* ---------------- POST IMAGE ---------------- */}
        <HStack>
          <Date>{date}</Date>
          <ReadTime readingTime={readingTime} />
        </HStack>
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
    </BlogTemplate>
  )
}

export default BlogPost

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { blogId: post.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { blogId } = params

  let [selectedPost] = posts.filter((post) => post.id === blogId)

  return {
    props: { selectedPost },
  }
}
