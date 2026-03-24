<script setup lang="ts">
const { locale } = useI18n()

const head = useLocaleHead({ seo: true })
useHead({
  htmlAttrs: { lang: () => head.value.htmlAttrs?.lang },
  link: () => [...(head.value.link || [])],
  meta: () => [...(head.value.meta || [])],
})

const collectionName = computed(() => `content_${locale.value}` as const)

const { data: navigation } = await useAsyncData(
  'docs-navigation',
  () => queryCollectionNavigation(collectionName.value),
  { watch: [locale] },
)

const docsNavigation = computed(() => {
  if (!navigation.value)
    return []
  const docsSection = navigation.value.find(n => n.path?.includes('/docs'))
  return docsSection?.children || []
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader show-home />

    <UContainer class="flex-1">
      <div class="flex gap-8 py-8">
        <aside class="hidden lg:block w-64 shrink-0">
          <nav class="sticky top-20">
            <ContentNavigation
              v-if="docsNavigation.length"
              :navigation="docsNavigation"
              highlight
            />
          </nav>
        </aside>

        <main class="min-w-0 flex-1">
          <slot />
        </main>

        <aside class="hidden xl:block w-56 shrink-0">
          <div class="sticky top-20">
            <slot name="toc" />
          </div>
        </aside>
      </div>
    </UContainer>

    <AppFooter />
  </div>
</template>
