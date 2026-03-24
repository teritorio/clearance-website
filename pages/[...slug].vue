<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()

const collectionName = computed(() => `content_${locale.value}` as const)

const path = computed(() => {
  const slug = (route.params.slug as string[]) || []
  return `/${locale.value}/${slug.join('/')}`
})

const { data: page } = await useAsyncData(
  'page-content',
  () => queryCollection(collectionName.value).path(path.value).first(),
  { watch: [locale, path] },
)

const isDocsPage = computed(() => path.value.includes('/docs'))

useHead({
  title: () => page.value?.title,
  meta: [
    { name: 'description', content: () => page.value?.description },
  ],
})

definePageMeta({
  layout: false,
})
</script>

<template>
  <NuxtLayout :name="isDocsPage ? 'docs' : 'default'">
    <div v-if="page" class="prose dark:prose-invert max-w-none">
      <ContentRenderer :value="page">
        <template #empty>
          <p class="text-muted">
            {{ t('page.empty') }}
          </p>
        </template>
      </ContentRenderer>
    </div>
    <div v-else class="py-16 text-center">
      <p class="text-muted">
        {{ t('page.notFound') }}
      </p>
    </div>

    <template v-if="isDocsPage && page?.body?.toc?.links?.length" #toc>
      <UContentToc :links="page.body.toc.links" :title="t('docs.toc')" highlight />
    </template>
  </NuxtLayout>
</template>
