<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
  ctaLabel?: string
  ctaTo?: string
}>()
</script>

<template>
  <section class="bg-zinc-100 py-16 sm:py-24">
    <UContainer>
      <LandingSectionHeader :headline="headline" :title="title" :description="description" />
      <div class="mt-12 grid gap-6 sm:grid-cols-2">
        <MDCSlot :use="$slots.default" />
      </div>
      <div v-if="ctaLabel && ctaTo" class="mt-12 text-center">
        <UButton :to="ctaTo" target="_blank" size="xl" trailing-icon="i-lucide-external-link">
          {{ ctaLabel }}
        </UButton>
      </div>
    </UContainer>
  </section>
</template>
