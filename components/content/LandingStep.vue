<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
}>()
</script>

<template>
  <div class="relative">
    <div
      v-if="icon"
      class="absolute top-0 left-1/2 z-10 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-white shadow-sm"
    >
      <UIcon :name="icon" class="size-5 text-primary" />
    </div>

    <!-- Card -->
    <div class="flex h-full flex-col items-center rounded-xl border border-zinc-200 bg-white px-4 pb-4 sm:px-6 sm:pb-6 pt-8 text-center shadow-sm">
      <h3 class="text-lg font-semibold">
        {{ title }}
      </h3>
      <div class="mt-2 text-sm text-muted">
        <MDCSlot :use="$slots.default" />
      </div>
    </div>
  </div>
</template>
