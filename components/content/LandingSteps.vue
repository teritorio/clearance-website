<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
}>()
</script>

<template>
  <section class="py-16 sm:py-24 bg-zinc-50">
    <UContainer>
      <LandingSectionHeader :headline="headline" :title="title" :description="description" />
      <div class="mt-12 grid gap-y-14 pt-6 md:grid-cols-3 md:gap-x-12">
        <MDCSlot :use="$slots.default" />
      </div>
    </UContainer>
  </section>
</template>
