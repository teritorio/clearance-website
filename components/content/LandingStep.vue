<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
  number?: string
}>()
</script>

<template>
  <div class="relative flex flex-col items-center text-center">
    <div class="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
      <span v-if="number" class="text-lg font-bold text-primary">{{ number }}</span>
      <UIcon v-else-if="icon" :name="icon" class="size-6 text-primary" />
    </div>
    <h3 class="text-lg font-semibold">
      {{ title }}
    </h3>
    <p class="mt-2 text-sm text-muted">
      <MDCSlot :use="$slots.default" />
    </p>
  </div>
</template>
