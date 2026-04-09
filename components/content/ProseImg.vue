<!--
  Override MDC's default ProseImg to use a native <img> instead of <NuxtImg>.
  Workaround for https://github.com/nuxt/image/issues/1394: ipxStatic fails
  with custom baseURL during SSG. Remove this file once the upstream bug is fixed.
-->
<script setup lang="ts">
import { joinURL, withLeadingSlash, withTrailingSlash } from 'ufo'

const props = defineProps<{
  src: string
  alt?: string
  width?: string | number
  height?: string | number
}>()

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL))
    if (_base !== '/' && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src)
    }
  }
  return props.src
})
</script>

<template>
  <img :src="refinedSrc" :alt="alt" :width="width" :height="height">
</template>
