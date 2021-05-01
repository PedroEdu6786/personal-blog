import MetaHead from '../../src/components/organisms/Shared/MetaHead'
import Blog from '../../src/components/organisms/BlogSite/Blog'
import BlogTemplate from '../../src/components/templates/BlogTemplate'
import Storyblok from '../../src/lib/storyblok'
import { GetStaticPaths, GetStaticProps } from 'next'

const BlogPost = ({ selectedPost }) => {
  return (
    <BlogTemplate>
      <MetaHead
        pageTitle={selectedPost.content.title}
        description={selectedPost.content.description}
      />
      <Blog {...selectedPost} />
    </BlogTemplate>
  )
}

export default BlogPost

export const getStaticPaths: GetStaticPaths = async () => {
  const slug: string = 'blogs/'
  const { data } = await Storyblok.get(`cdn/stories/`, {
    starts_with: slug,
  })

  const posts = data.stories

  const paths = posts.map((post) => ({
    params: { blogId: post.uuid.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { blogId } = params

  const { data } = await Storyblok.get(`cdn/stories/${blogId}`, {
    find_by: 'uuid',
  })

  const selectedPost = data.story

  return {
    props: { selectedPost },
  }
}
