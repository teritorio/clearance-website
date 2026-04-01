<script setup lang="ts">
defineProps<{
  icon?: string
  title?: string
}>()
</script>

<template>
  <div class="rounded-xl border border-zinc-200 bg-zinc-50 p-4 sm:p-6">
    <div class="flex items-start gap-4">
      <div v-if="icon" class="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <UIcon :name="icon" class="size-6 text-primary" />
      </div>
      <div>
        <h3 v-if="title" class="text-base font-semibold">
          {{ title }}
        </h3>
        <div class="text-sm text-muted [&_p]:m-0" :class="{ 'mt-1': title }">
          <MDCSlot :use="$slots.default" />
        </div>
      </div>
    </div>
  </div>
</template>
