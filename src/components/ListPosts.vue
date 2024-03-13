<script lang="ts" setup>
interface Posts {
  id: string
  slug: string
  body: string
  data: Record<string, any>
  collection: string
  render: any
}

withDefaults(defineProps<{
  list: Posts[]
}>(), {
  list: () => [],
})

function getDate(date: string) {
  return new Date(date).toISOString()
}

function getHref(posts: Posts) {
  if (posts.data.redirect)
    return posts.data.redirect
  return `/posts/${posts.slug}`
}

function getTarget(posts: Posts) {
  if (posts.data.redirect)
    return '_blank'
  return '_self'
}

function isSameYear(a: Date | string | number, b: Date | string | number) {
  return a && b && getYear(a) === getYear(b)
}

function getYear(date: Date | string | number) {
  return new Date(date).getFullYear()
}
</script>

<template>
  <ul>
    <template v-if="!list || list.length === 0">
      <div py2 opacity-50>
        nothing here yet.
      </div>
    </template>
    <li v-for="(posts, index) in list " :key="posts.data.title" mb-6>
      <div v-if="!isSameYear(posts.data.date, list[index - 1]?.data.date)" select-none relative h18 pointer-events-none>
        <span text-7em color-transparent font-bold text-stroke-2 text-stroke-hex-aaa op14 absolute top--0.2em>
          {{ getYear(posts.data.date) }}
        </span>
      </div>
      <a text-lg lh-tight nav-link flex="~ col gap-2" :target="getTarget(posts)" :href="getHref(posts)">
        <div flex="~ col md:row gap-2 md:items-center">
          <div flex="~ gap-2 items-center text-wrap">
            <span lh-normal>
              <i v-if="posts.data.draft" text-base vertical-mid i-ri-draft-line />
              {{ posts.data.title }}
            </span>
          </div>
          <div opacity-50 text-sm ws-nowrap flex="~ gap-2 items-center">
            <i v-if="posts.data.redirect" text-base i-ri-external-link-line />
            <i v-if="posts.data.recording || posts.data.video" text-base i-ri:film-line />
            <time :datetime="getDate(posts.data.date)">{{ posts.data.date.split(',')[0] }}</time>
            <span v-if="posts.data.duration">· {{ posts.data.duration }}</span>
            <span v-if="posts.data.tag">· {{ posts.data.tag }}</span>
            <span v-if="posts.data.lang.includes('zh')">· 中文</span>
            <span v-if="posts.data.link">· 中文</span>
          </div>
        </div>
        <div opacity-50 text-sm>{{ posts.data.description }}</div>
      </a>
    </li>
  </ul>
</template>
