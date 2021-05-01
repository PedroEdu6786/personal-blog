export interface StoryblokConfig {
  accessToken: string
  cache?: StoryblokCache
  timeout?: number
  headers?: any
}

export interface StoryblokCache {
  type?: 'memory'
  clear?: 'auto' | 'manual'
}

export interface Stories {
  data: {
    stories: {
      alternates: string[]
      content: {
        [index: string]: string
      }
      created_at: string
      full_slug: string
      group_id: string
      id: number
      is_startpage: boolean
      meta_data: any
      name: string
      parent_id: number
      position: number
      published_at: string | null
      slug: string
      sort_by_date: string | null
      tag_list: string[]
      uuid: string
    }
  }
}

export interface Params {
  token: string
  with_tag?: string
  is_startpage?: 0 | 1
  starts_with?: string
  by_uuids?: string
  excluding_ids?: string
  excluding_fields?: string
  version?: 'draft' | 'published'
  cv?: number
  sort_by?: string
  search_term?: string
  filter_query?: string
  per_page?: number
  page?: string
  find_by?: string
}
