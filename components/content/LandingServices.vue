<script setup lang="ts">
const props = defineProps<{
  headline?: string
  title?: string
  description?: string
  ctaLabel?: string
  ctaTo?: string
}>()

const resolvedCtaTo = useLocaleTo(computed(() => props.ctaTo))
</script>

<template>
  <section class="py-16 sm:py-24">
    <UContainer>
      <LandingSectionHeader :headline="headline" :title="title" :description="description" />
      <div v-if="$slots.default" class="mx-auto mt-8 max-w-3xl text-lg text-muted">
        <MDCSlot :use="$slots.default" />
      </div>
      <div v-if="ctaLabel && ctaTo" class="mt-8 text-center">
        <UButton :to="resolvedCtaTo" size="xl" variant="outline">
          {{ ctaLabel }}
        </UButton>
      </div>
    </UContainer>
  </section>
</template>
