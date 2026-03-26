<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
  changesLabel?: string
  osmLabel?: string
  clearanceLabel?: string
  extractLabel?: string
  feedbackLabel?: string
}>()
</script>

<template>
  <section class="py-16 sm:py-24">
    <UContainer>
      <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div v-if="title">
            <p v-if="headline" class="text-sm font-semibold text-primary">
              {{ headline }}
            </p>
            <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {{ title }}
            </h2>
            <p v-if="description" class="mt-4 text-lg text-muted">
              {{ description }}
            </p>
          </div>
          <div class="mt-10 flex flex-col gap-6">
            <MDCSlot :use="$slots.default" />
          </div>
        </div>
        <LandingSchema
          v-if="changesLabel"
          :changes-label="changesLabel"
          :osm-label="osmLabel"
          :clearance-label="clearanceLabel"
          :extract-label="extractLabel"
          :feedback-label="feedbackLabel"
        />
      </div>
    </UContainer>
  </section>
</template>
