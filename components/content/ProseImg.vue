<script setup lang="ts">
import { withBase } from 'ufo'

const props = defineProps<{
  src: string
  alt?: string
  width?: string | number
  height?: string | number
}>()

const resolvedSrc = computed(() => withBase(props.src, useRuntimeConfig().app.baseURL))
</script>

<template>
  <img :src="resolvedSrc" :alt="alt" :width="width" :height="height">
</template>
