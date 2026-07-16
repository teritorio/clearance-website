<script setup lang="ts">
const { t, tm } = useI18n()

const items = computed(() =>
  (tm('faq.items') as { question: string, answer: string }[]).map(
    item => ({ label: item.question, content: item.answer }),
  ),
)
</script>

<template>
  <section class="py-16 sm:py-24">
    <UContainer>
      <LandingSectionHeader :headline="t('faq.headline')" :title="t('faq.title')" />
      <UAccordion
        class="mt-12 max-w-3xl mx-auto"
        :items="items"
      />
    </UContainer>
  </section>
</template>
