<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { onClickOutside, useWindowSize } from '@vueuse/core'
import siteConfig from '../site-config'
import ThemeToggle from './ThemeToggle.vue'

const navLinks = siteConfig.headerNavLinks || []

const menuRef = ref(null)

const menu = ref(false)

function toggleMenu() {
  menu.value = !menu.value
}

const { width } = useWindowSize()

onClickOutside(menuRef, () => {
  if (width.value < 640)
    menu.value = false
})

watchEffect(() => {
  if (width.value > 640)
    menu.value = true
  else
    menu.value = false
})
</script>

<template>
  <header text-lg max-w-3xl mx-auto h-18 px-6 flex justify-between items-center relative>
    <nav
      v-show="menu" ref="menuRef" flex flex-wrap gap-4 sm:gap-6 sm:position-initial absolute z-199 top-15 sm:flex-row
      flex-col sm:p0 p-4 bg-main border-1 border-main sm:border-none
    >
      <a v-for="link in navLinks" :key="link.text" nav-link :href="link.href">
        {{ link.text }}
      </a>
    </nav>
    <menu sm:hidden inline-block i-ri-menu-2-fill @click="toggleMenu" />
    <div flex gap-4 sm:gap-6>
      <a nav-link href="rss.xml" i-ri-rss-line />
      <ThemeToggle />
    </div>
  </header>
</template>
