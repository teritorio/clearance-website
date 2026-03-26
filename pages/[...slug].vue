<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()

const collectionName = computed(() => `content_${locale.value}` as const)

const slug = computed(() => (route.params.slug as string[]) || [])

const path = computed(() => {
  return `/${locale.value}/${slug.value.join('/')}`
})

const { data: page } = await useAsyncData(
  `slug-${locale.value}-${slug.value.join('/')}`,
  () => queryCollection(collectionName.value).path(path.value).first(),
  { watch: [locale] },
)

const isDocsPage = computed(() => path.value.includes('/docs'))

const sectionSlug = computed(() => {
  const parts = slug.value
  return isDocsPage.value && parts.length >= 3 ? parts[1] : undefined
})

const { data: docsIndex } = await useAsyncData(
  `breadcrumb-docs-${locale.value}`,
  () => queryCollection(collectionName.value).path(`/${locale.value}/docs`).first(),
  { watch: [locale] },
)

const { data: sectionIndex } = await useAsyncData(
  `breadcrumb-section-${locale.value}-${sectionSlug.value}`,
  () => sectionSlug.value
    ? queryCollection(collectionName.value).path(`/${locale.value}/docs/${sectionSlug.value}`).first()
    : Promise.resolve(null),
  { watch: [locale] },
)

useHead({
  title: () => page.value?.title,
  meta: [
    { name: 'description', content: () => page.value?.description },
  ],
})

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: computed(() => {
      const items: Array<{ name: string, item: string }> = [
        { name: 'Clearance', item: `/${locale.value}` },
      ]
      if (isDocsPage.value) {
        const parts = slug.value
        if (parts.length >= 2)
          items.push({ name: docsIndex.value?.title || t('nav.docs'), item: `/${locale.value}/docs` })
        if (parts.length >= 3 && sectionIndex.value?.title)
          items.push({ name: sectionIndex.value.title, item: `/${locale.value}/docs/${parts[1]}` })
        if (page.value?.title)
          items.push({ name: page.value.title, item: `/${locale.value}/${parts.join('/')}` })
      }
      return items
    }),
  }),
])

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
