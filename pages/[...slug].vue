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

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

const docsSections: string[] = ['how-it-works']
const isDocsPage = computed(() => slug.value.length > 0 && docsSections.includes(slug.value[0] as string))

const sectionSlug = computed<string | undefined>(() => {
  return isDocsPage.value ? slug.value[0] as string : undefined
})

const { data: sectionIndex } = await useAsyncData(
  `breadcrumb-section-${locale.value}-${sectionSlug.value ?? ''}`,
  () => {
    const section = sectionSlug.value
    return section
      ? queryCollection(collectionName.value).path(`/${locale.value}/${section}`).first()
      : Promise.resolve(null)
  },
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
  const isDocsItem = (item: typeof items[number]) => item && !item.redirect && item.path?.includes('/how-it-works/')
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
        if (sectionIndex.value?.title)
          items.push({ name: sectionIndex.value.title, item: `/${locale.value}/${parts[0]}` })
        if (parts.length >= 2 && page.value?.title)
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
    <div class="prose dark:prose-invert max-w-none">
      <ContentRenderer :value="page!">
        <template #empty>
          <p class="text-muted">
            {{ t('page.empty') }}
          </p>
        </template>
      </ContentRenderer>
    </div>

    <UContentSurround
      v-if="isDocsPage && surround"
      :surround="surround"
      :ui="{
        root: 'grid grid-cols-2 gap-4 sm:gap-8 mt-8 sm:mt-12',
        link: 'px-4 py-4 sm:px-6 sm:py-8',
        linkLeading: 'mb-2 sm:mb-4',
      }"
    />

    <template v-if="isDocsPage && page?.body?.toc?.links?.length" #toc>
      <UContentToc :links="page.body.toc.links" :title="t('docs.toc')" highlight />
    </template>
  </NuxtLayout>
</template>
