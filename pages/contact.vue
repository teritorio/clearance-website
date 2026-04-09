<script setup lang="ts">
const { t, locale } = useI18n()

const collectionName = computed(() => `content_${locale.value}` as const)

const { data: page } = await useAsyncData(
  `contact-${locale.value}`,
  () => queryCollection(collectionName.value).path(`/${locale.value}/contact`).first(),
)

useHead({
  title: () => page.value?.title,
  meta: [
    { name: 'description', content: () => page.value?.description },
  ],
})
</script>

<template>
  <UContainer class="py-16">
    <div class="mx-auto max-w-xl">
      <h1 class="text-2xl sm:text-3xl font-bold tracking-tight">
        {{ t('contact.title') }}
      </h1>
      <p class="mt-4 text-muted">
        {{ t('contact.description') }}
      </p>

      <div class="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-6">
        <h2 class="text-lg font-semibold">
          {{ t('contact.demoTitle') }}
        </h2>
        <p class="mt-2 text-sm text-muted">
          {{ t('contact.demoDescription') }}
        </p>
        <ul class="mt-3 space-y-1 text-sm text-muted list-disc list-inside">
          <li>{{ t('contact.demoItem1') }}</li>
          <li>{{ t('contact.demoItem2') }}</li>
          <li>{{ t('contact.demoItem3') }}</li>
          <li>{{ t('contact.demoItem4') }}</li>
        </ul>
      </div>

      <div class="mt-8 text-center">
        <UButton
          :to="t('contact.externalUrl')"
          target="_blank"
          rel="noopener"
          size="xl"
          icon="i-lucide-external-link"
        >
          {{ t('contact.ctaLabel') }}
        </UButton>
        <p class="mt-3 text-sm text-muted">
          {{ t('contact.externalNotice') }}
        </p>
      </div>
    </div>
  </UContainer>
</template>
