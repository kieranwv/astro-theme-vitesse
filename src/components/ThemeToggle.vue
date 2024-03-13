<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <i nav-link dark:i-ri-moon-line i-ri-sun-line @click="toggleDark()" />
</template>
