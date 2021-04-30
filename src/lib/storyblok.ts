import StoryblokClient from 'storyblok-js-client'

const Storyblok: StoryblokClient = new StoryblokClient({
  accessToken: process.env.STORYBLOK_TOKEN,
  cache: {
    clear: 'auto',
    type: 'memory',
  },
})

export default Storyblok
