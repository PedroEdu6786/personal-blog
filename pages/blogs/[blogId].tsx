import BlogTemplate from '../../src/components/templates/BlogTemplate'
import { posts } from '../../src/constants/posts'

const BlogPost = ({ selectedPost }) => {
  return <BlogTemplate>Blog {selectedPost.id}</BlogTemplate>
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
