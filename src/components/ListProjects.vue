<script lang="ts" setup>
defineProps<{
  list: {
    text: string
    description?: string
    icon?: string
    href: string
  }[]
}>()
</script>

<template>
  <ul grid="~ cols-1 sm:cols-2 gap-4">
    <template v-if="!list || list.length === 0">
      <div py10 opacity-50 text-lg>
        nothing here yet.
      </div>
    </template>
    <li v-for="project in list" :key="project.text" container-link w-full flex items-center rd-2>
      <a flex items-center target="_blank" :href="project.href" :aria-label="project.text">
        <div ml-2 mr-4 pt-2>
          <i text-4xl inline-block :class="project.icon || 'i-carbon-unknown'" />
        </div>
        <div font-normal lh-tight>
          <div text-lg hover:text-main>{{ project.text }}</div>
          <div opacity-50 text-sm>{{ project.description }}</div>
        </div>
      </a>
    </li>
  </ul>
</template>
