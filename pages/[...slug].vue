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

const { data: rawSurround } = await useAsyncData(
  `surround-${locale.value}-${slug.value.join('/')}`,
  () => isDocsPage.value
    ? queryCollectionItemSurroundings(collectionName.value, path.value, { before: 2, after: 2 })
    : Promise.resolve(null),
  { watch: [locale] },
)

const surround = computed(() => {
  if (!rawSurround.value)
    return null
  const items = rawSurround.value as Array<{ path?: string, redirect?: string } | null>
  const isDocsItem = (item: typeof items[number]) => item && !item.redirect && item.path?.includes('/docs/')
  const prev = [...items.slice(0, 2)].reverse().find(isDocsItem) ?? null
  const next = items.slice(2).find(isDocsItem) ?? null
  return [prev, next] as typeof rawSurround.value
})

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

    <UContentSurround v-if="isDocsPage && surround" :surround="surround" />

    <template v-if="isDocsPage && page?.body?.toc?.links?.length" #toc>
      <UContentToc :links="page.body.toc.links" :title="t('docs.toc')" highlight />
    </template>
  </NuxtLayout>
</template>
