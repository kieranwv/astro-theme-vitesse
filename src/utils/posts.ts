import { getCollection } from 'astro:content'
import type { CollectionPosts, Posts } from '../types'

export function sortPostsByDate(itemA: CollectionPosts, itemB: CollectionPosts) {
  return new Date(itemB.data.date).getTime() - new Date(itemA.data.date).getTime()
}

export async function getPosts(type: Posts) {
  return (await getCollection(type, ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true
  })).sort(sortPostsByDate)
}

export async function getAllPosts() {
  const posts = await Promise.all([
    getPosts('blog'),
    getPosts('notes'),
    getPosts('reading'),
    getPosts('talks'),
  ])
  return posts.flat().sort(sortPostsByDate)
}
