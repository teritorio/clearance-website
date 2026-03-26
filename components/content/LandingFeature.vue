<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
}>()
</script>

<template>
  <div class="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
    <div v-if="icon" class="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10">
      <UIcon :name="icon" class="size-5 text-primary" />
    </div>
    <h3 class="text-base font-semibold">
      {{ title }}
    </h3>
    <div class="mt-2 text-sm text-muted">
      <MDCSlot :use="$slots.default" />
    </div>
  </div>
</template>
