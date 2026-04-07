<script setup lang="ts">
defineProps<{
  icon?: string
}>()
</script>

<template>
  <div class="landing-problem-card rounded-xl border-2 border-primary/30 bg-zinc-50 p-4 sm:p-6">
    <div v-if="icon" class="mb-4 mx-auto flex size-10 items-center justify-center rounded-lg bg-primary/10">
      <UIcon :name="icon" class="size-5 text-primary" />
    </div>
    <div class="text-base text-muted leading-relaxed">
      <MDCSlot :use="$slots.default" />
    </div>
  </div>
</template>
