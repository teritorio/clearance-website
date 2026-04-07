<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
}>()
</script>

<template>
  <section class="bg-zinc-100 py-16 sm:py-24">
    <UContainer>
      <LandingSectionHeader :headline="headline" :title="title" :description="description" />

      <div class="mx-auto mt-10 grid max-w-3xl gap-6">
        <MDCSlot :use="$slots.default" />
      </div>
    </UContainer>
  </section>
</template>
