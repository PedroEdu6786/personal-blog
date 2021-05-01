import MetaHead from '../../src/components/organisms/Shared/MetaHead'
import Blog from '../../src/components/organisms/BlogSite/Blog'
import BlogTemplate from '../../src/components/templates/BlogTemplate'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPostsWithSlug, getPostByUuid } from '../../src/lib/api'

const BlogPost = ({ selectedPost }) => {
  return (
    <BlogTemplate>
      <MetaHead
        pageTitle={selectedPost.content.title}
        description={selectedPost.content.description}
        image={selectedPost.content.image}
      />
      <Blog {...selectedPost} />
    </BlogTemplate>
  )
}

export default BlogPost

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllPostsWithSlug()
  const posts = data.stories

  const paths = posts.map((post) => ({
    params: { blogId: post.uuid.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getPostByUuid(params.blogId)

  return {
    props: { selectedPost: data.story },
  }
}
