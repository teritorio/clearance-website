<script setup lang="ts">
const { t, locale } = useI18n()

const collectionName = computed(() => `content_${locale.value}` as const)

const { data: page } = await useAsyncData(
  'index',
  () => queryCollection(collectionName.value).path(`/${locale.value}`).first(),
  { watch: [locale] },
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
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
        {{ t('hero.title') }}
      </h1>
      <p class="mt-6 text-lg text-gray-600 dark:text-gray-400">
        {{ t('hero.subtitle') }}
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <UButton
          to="https://github.com/teritorio/clearance"
          target="_blank"
          size="lg"
        >
          {{ t('hero.viewOnGithub') }}
        </UButton>
      </div>
    </div>

    <div v-if="page?.body" class="mt-16 max-w-3xl mx-auto prose dark:prose-invert">
      <ContentRenderer :value="page" />
    </div>
  </UContainer>
</template>
