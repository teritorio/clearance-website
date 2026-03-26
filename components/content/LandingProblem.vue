<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
}>()
</script>

<template>
  <section class="py-16 sm:py-24 bg-zinc-50">
    <UContainer>
      <LandingSectionHeader :headline="headline" :title="title" />
      <div class="mt-12 mx-auto max-w-2xl text-center text-lg text-muted">
        <MDCSlot :use="$slots.default" />
      </div>
    </UContainer>
  </section>
</template>
