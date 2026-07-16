<script setup lang="ts">
const { t, tm, locale } = useI18n()

const collectionName = computed(() => `content_${locale.value}` as const)

const { data: page } = await useAsyncData(
  `index-${locale.value}`,
  () => queryCollection(collectionName.value).path(`/${locale.value}`).first(),
)

useHead({
  title: () => page.value?.title,
  meta: [
    { name: 'description', content: () => page.value?.description },
  ],
})

const faqItems = computed(() => {
  const raw = tm('faq.items')
  return Array.isArray(raw) ? raw as { question: string, answer: string }[] : []
})

useSchemaOrg([
  defineWebPage(),
  {
    '@type': 'FAQPage',
    'mainEntity': faqItems.value.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer,
      },
    })),
  },
])
</script>

<template>
  <div v-if="page">
    <ContentRenderer :value="page">
      <template #empty>
        <p class="text-muted">
          {{ t('page.empty') }}
        </p>
      </template>
    </ContentRenderer>
  </div>
</template>
