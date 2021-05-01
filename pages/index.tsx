import PostSection from '../src/components/organisms/HomePage/PostSection'
import MetaHead from '../src/components/organisms/Shared/MetaHead'
import BlogTemplate from '../src/components/templates/BlogTemplate'
import Storyblok from '../src/lib/storyblok'

const Home = ({ story }) => {
  return (
    <BlogTemplate>
      <MetaHead
        pageTitle="Pedro's Blog | Developer Personal Blog"
        description="Personal blog website focused on technology content, mainly programming languages, front-end frameworks, full-stack technologies and different techniques to keep your code clean"
      />
      {/* ---------------- POSTS ---------------- */}
      <PostSection data={story.stories} />
    </BlogTemplate>
  )
}

export default Home

export async function getStaticProps() {
  const slug = 'blogs/'

  const { data } = await Storyblok.get(`cdn/stories/`, { starts_with: slug })

  return {
    props: {
      story: data ? data : [],
    },
    revalidate: 10,
  }
}
