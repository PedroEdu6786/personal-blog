import { Params } from '../interfaces/IStoryblok'
import Storyblok from './storyblok'

const URL: string = 'cdn/stories/'

const fetchApi = async (slug, config) => {
  const { data } = await Storyblok.get(slug, config)

  return data
}

// function that retreives all stories from a the folder blogs/ in storyblok
export const getAllPostsWithSlug = async (slug: string, preview = null) => {
  const config: Params = {
    token: process.env.STORYBLOK_TOKEN,
    version: preview ? 'draft' : 'published',
    starts_with: slug,
    sort_by: 'published_at:desc',
    cv: Date.now(),
  }

  const data = await fetchApi(URL, config)

  return data
}

// function that retrieve a story from storyblok by uuid
export const getPostByUuid = async (blogId: string, preview = null) => {
  const config: Params = {
    token: process.env.STORYBLOK_TOKEN,
    version: preview ? 'draft' : 'published',
    find_by: 'uuid',
    cv: Date.now(),
  }

  const slug = `${URL}${blogId}`

  const data = await fetchApi(slug, config)

  return data
}
