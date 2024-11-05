<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import { onMounted, watchEffect } from 'vue'

const isDark = useDark()

const toggleDark = useToggle(isDark)

watchEffect(() => {
  if (isDark.value)
    setDarkMode(document)
})

function setDarkMode(document: Document) {
  if (isDark.value)
    document.documentElement.classList.add('dark')
}
onMounted(() => {
  document.addEventListener('astro:before-swap', (event) => {
    setDarkMode(event.newDocument)
  })
})

function toggleTheme(event: MouseEvent) {
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  // @ts-expect-error: Transition API
  if (!document.startViewTransition) {
    toggleDark()
    return
  }

  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    toggleDark()
  })

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-in',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}
</script>

<template>
  <button :aria-label="isDark ? 'Dark Theme' : 'Light Theme'" nav-link dark:i-ri-moon-line i-ri-sun-line @click="toggleTheme" />
</template>
