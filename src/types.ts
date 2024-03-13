import type { CollectionEntry } from 'astro:content'

export type Posts = 'blog' | 'notes' | 'reading'

export type CollectionPosts = CollectionEntry<Posts>

export type Pages = 'pages'

export type CollectionPages = CollectionEntry<Pages>
