import { useRouter } from 'next/router'
import BlogTemplate from '../../src/components/templates/BlogTemplate'

const BlogPost = () => {
  const router = useRouter()
  const { blogId } = router.query

  return <BlogTemplate>Blog {blogId}</BlogTemplate>
}

export default BlogPost
