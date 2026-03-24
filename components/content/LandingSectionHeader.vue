<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
}>()
</script>

<template>
  <div v-if="title" class="mx-auto max-w-2xl text-center">
    <p v-if="headline" class="text-sm font-semibold text-primary">
      {{ headline }}
    </p>
    <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-4 text-lg text-muted">
      {{ description }}
    </p>
  </div>
</template>
