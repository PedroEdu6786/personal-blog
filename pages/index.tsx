import { GetStaticProps } from 'next'
import PostSection from '../src/components/organisms/HomePage/PostSection'
import MetaHead from '../src/components/organisms/Shared/MetaHead'
import BlogTemplate from '../src/components/templates/BlogTemplate'
import { Stories } from '../src/interfaces/IStoryblok'
import { getAllPostsWithSlug } from '../src/lib/api'

const Home = ({ data }: Stories) => {
  return (
    <BlogTemplate>
      <MetaHead
        pageTitle="Pedro's Blog | Developer Personal Blog"
        description="Personal blog website focused on technology content, mainly programming languages, front-end frameworks, full-stack technologies and different techniques to keep your code clean"
      />
      {/* ---------------- POSTS ---------------- */}
      <PostSection data={data.stories} />
    </BlogTemplate>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const slug: string = 'blogs/'

  const data = await getAllPostsWithSlug(slug)

  return {
    props: {
      data: data ? data : [],
    },
    revalidate: 60,
  }
}
