<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
}>()
</script>

<template>
  <LandingFeatures :headline="headline" :title="title" :description="description">
    <MDCSlot :use="$slots.default" />
  </LandingFeatures>
</template>
