import Blog from '../../src/components/organisms/BlogSite/Blog'
import BlogTemplate from '../../src/components/templates/BlogTemplate'
import Storyblok from '../../src/lib/storyblok'

const BlogPost = ({ selectedPost }) => {
  return (
    <BlogTemplate>
      <Blog {...selectedPost} />
    </BlogTemplate>
  )
}

export default BlogPost

export async function getStaticPaths() {
  const slug = 'blogs/'
  const { data } = await Storyblok.get(`cdn/stories/`, {
    starts_with: slug,
  })

  const posts = data.stories

  const paths = posts.map((post) => ({
    params: { blogId: post.uuid.toString() },
  }))

  console.log(paths)

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { blogId } = params

  const { data } = await Storyblok.get(`cdn/stories/blogs/third-post`, {})

  const selectedPost = data.story

  return {
    props: { selectedPost },
  }
}
