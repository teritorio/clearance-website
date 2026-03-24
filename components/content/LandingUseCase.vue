<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
}>()
</script>

<template>
  <LandingFeature :icon="icon" :title="title">
    <ContentSlot />
  </LandingFeature>
</template>
