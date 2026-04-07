<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
  intro?: string
  conclusion?: string
  changesLabel?: string
  osmLabel?: string
  clearanceLabel?: string
  extractLabel?: string
  anomaliesLabel?: string
  correctionsLabel?: string
}>()
</script>

<template>
  <section class="py-16 sm:py-24">
    <UContainer>
      <LandingSectionHeader :headline="headline" :title="title" :description="description" />

      <div class="mt-12">
        <LandingSchema
          v-if="changesLabel"
          :changes-label="changesLabel"
          :osm-label="osmLabel"
          :clearance-label="clearanceLabel"
          :extract-label="extractLabel"
          :anomalies-label="anomaliesLabel"
          :corrections-label="correctionsLabel"
        />
      </div>

      <p v-if="intro" class="mx-auto mt-8 max-w-3xl text-center text-lg text-muted">
        {{ intro }}
      </p>

      <div class="mt-12 grid gap-6 sm:grid-cols-2">
        <MDCSlot :use="$slots.default" />
      </div>

      <p v-if="conclusion" class="mx-auto mt-10 max-w-3xl text-center text-lg text-muted">
        {{ conclusion }}
      </p>
    </UContainer>
  </section>
</template>
