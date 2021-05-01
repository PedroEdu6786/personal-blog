import StoryblokClient from 'storyblok-js-client'
import { config } from './storyblok-config'

const Storyblok: StoryblokClient = new StoryblokClient(config)

export default Storyblok
