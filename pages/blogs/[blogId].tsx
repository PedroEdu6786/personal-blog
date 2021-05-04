import MetaHead from '../../src/components/organisms/Shared/MetaHead'
import Blog from '../../src/components/organisms/BlogSite/Blog'
import BlogTemplate from '../../src/components/templates/BlogTemplate'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPostsWithSlug, getPostByUuid } from '../../src/lib/api'
import { useRouter } from 'next/dist/client/router'
import { Heading } from '@chakra-ui/layout'

const BlogPost = ({ selectedPost }) => {
  const router = useRouter()

  return (
    <BlogTemplate>
      {router.isFallback ? (
        <Heading>Loading...</Heading>
      ) : (
        <>
          <MetaHead
            pageTitle={selectedPost.content.title}
            description={selectedPost.content.description}
            image={selectedPost.content.image}
          />
          <Blog {...selectedPost} />
        </>
      )}
    </BlogTemplate>
  )
}

export default BlogPost

export const getStaticPaths: GetStaticPaths = async () => {
  const slug: string = 'blogs/'

  const data = await getAllPostsWithSlug(slug)
  const posts = data.stories

  const paths = posts.map((post) => ({
    params: { blogId: post.uuid.toString() },
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = null,
}) => {
  const blogId: string = params.blogId.toString()
  const data = await getPostByUuid(blogId)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { selectedPost: data.story },
    revalidate: 60,
  }
}
