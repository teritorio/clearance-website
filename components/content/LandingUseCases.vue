<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
}>()
</script>

<template>
  <LandingFeatures :headline="headline" :title="title" :description="description">
    <ContentSlot />
  </LandingFeatures>
</template>
