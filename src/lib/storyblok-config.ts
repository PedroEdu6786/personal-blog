import { StoryblokCache, StoryblokConfig } from '../interfaces/IStoryblok'

const cache: StoryblokCache = {
  clear: 'auto',
  type: 'memory',
}

export const config: StoryblokConfig = {
  accessToken: process.env.STORYBLOK_TOKEN,
  cache,
}
