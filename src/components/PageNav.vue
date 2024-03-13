<script lang="ts" setup>
import siteConfig from '../site-config'

defineProps<{
  pathname: string
}>()
</script>

<template>
  <div flex="~ col gap-2 sm:row sm:gap-4 wrap" mb-8>
    <a
      v-for="nav in siteConfig.pageNavLinks" :key="nav.text" nav-link text-3xl font-bold
      :class="pathname.includes(nav.href) ? 'opacity-80' : 'opacity-30  hover:opacity-50'" :href="nav.href"
    >
      {{ nav.text }}
    </a>
  </div>
</template>
