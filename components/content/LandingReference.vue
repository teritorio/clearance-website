<script setup lang="ts">
defineProps<{
  logo?: string
  title: string
}>()
</script>

<template>
  <div class="flex flex-col rounded-xl border border-zinc-200 bg-white p-6">
    <div class="mb-3 flex items-center gap-3">
      <NuxtImg v-if="logo" :src="logo" :alt="title" class="h-16 w-28 shrink-0 object-contain" />
      <h3 class="text-base font-semibold">
        {{ title }}
      </h3>
    </div>
    <div class="text-sm text-muted">
      <MDCSlot :use="$slots.default" />
    </div>
  </div>
</template>
