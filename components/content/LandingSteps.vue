<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
}>()
</script>

<template>
  <section class="py-16 sm:py-24">
    <UContainer>
      <LandingSectionHeader :headline="headline" :title="title" :description="description" />
      <div class="mt-12 grid gap-8 sm:grid-cols-3">
        <MDCSlot :use="$slots.default" />
      </div>
    </UContainer>
  </section>
</template>
