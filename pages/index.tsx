import PostSection from '../src/components/organisms/HomePage/PostSection'
import BlogTemplate from '../src/components/templates/BlogTemplate'

const Home = () => {
  return (
    <BlogTemplate>
      {/* ---------------- POSTS ---------------- */}
      <PostSection />
    </BlogTemplate>
  )
}

export default Home
