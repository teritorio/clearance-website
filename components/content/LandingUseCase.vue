<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
}>()
</script>

<template>
  <div class="p-4 sm:p-6">
    <div class="mb-4 flex items-center gap-3">
      <div v-if="icon" class="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <UIcon :name="icon" class="size-6 text-primary" />
      </div>
      <h3 class="text-base font-semibold">
        {{ title }}
      </h3>
    </div>
    <div class="text-sm text-muted">
      <MDCSlot :use="$slots.default" />
    </div>
  </div>
</template>
