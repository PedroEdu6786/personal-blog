import PostSection from '../src/components/organisms/HomePage/PostSection'
import BlogTemplate from '../src/components/templates/BlogTemplate'
import Storyblok from '../src/lib/storyblok'

const Home = ({ story }) => {
  return (
    <BlogTemplate>
      {/* ---------------- POSTS ---------------- */}
      <PostSection data={story.stories} />
    </BlogTemplate>
  )
}

export default Home

export async function getStaticProps() {
  const slug = 'blogs/'

  const { data } = await Storyblok.get(`cdn/stories/`, { starts_with: slug })

  console.log(data)

  return {
    props: {
      story: data ? data : [],
    },
    revalidate: 10,
  }
}
