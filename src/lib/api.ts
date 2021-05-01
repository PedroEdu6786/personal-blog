import { Params } from '../interfaces/IStoryblok'
import Storyblok from './storyblok'

const URL: string = 'cdn/stories/'

// function that retreives all stories from a the folder blogs/ in storyblok
export const getAllPostsWithSlug = async () => {
  const slug: string = 'blogs/'

  const config: Params = {
    token: process.env.STORYBLOK_TOKEN,
    version: 'published',
    starts_with: slug,
    sort_by: 'published_at:desc',
    cv: Date.now(),
  }

  const { data } = await Storyblok.get(URL, config)

  return data
}

// function that retrieve a story from storyblok by uuid
export const getPostByUuid = async (blogId) => {
  const config: Params = {
    token: process.env.STORYBLOK_TOKEN,
    version: 'published',
    find_by: 'uuid',
  }

  const { data } = await Storyblok.get(`${URL}${blogId}`, config)

  return data
}
