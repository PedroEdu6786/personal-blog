import { GetStaticProps } from 'next'
import PostSection from '../src/components/organisms/HomePage/PostSection'
import MetaHead from '../src/components/organisms/Shared/MetaHead'
import BlogTemplate from '../src/components/templates/BlogTemplate'
import { Params, Stories } from '../src/interfaces/IStoryblok'
import Storyblok from '../src/lib/storyblok'

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

  const config: Params = {
    token: process.env.STORYBLOK_TOKEN,
    starts_with: slug,
  }

  const { data } = await Storyblok.get(`cdn/stories/`, config)

  return {
    props: {
      data: data ? data : [],
    },
    revalidate: 10,
  }
}
