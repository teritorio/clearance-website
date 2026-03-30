<script setup lang="ts">
const { locale } = useI18n({ useScope: 'global' })

const head = useLocaleHead({ seo: true })
useHead({
  htmlAttrs: { lang: () => head.value.htmlAttrs?.lang },
  link: () => [...(head.value.link || [])],
  meta: () => [...(head.value.meta || [])],
})

const collectionName = computed(() => `content_${locale.value}` as const)

const { data: navigation } = await useAsyncData(
  `docs-navigation-${locale.value}`,
  () => queryCollectionNavigation(collectionName.value),
  { watch: [locale] },
)

const docsPathPattern = /\/docs\/?$/

const docsNavigation = computed(() => {
  if (!navigation.value)
    return []

  // Recursively find the docs section in the navigation tree
  // (it's nested under the locale root node, not at the top level)
  type NavItems = typeof navigation.value
  type NavItem = NavItems[number]
  function findDocsNode(items: NavItems): NavItem | undefined {
    for (const item of items) {
      if (item.path && docsPathPattern.test(item.path))
        return item
      if (item.children) {
        const found = findDocsNode(item.children)
        if (found)
          return found
      }
    }
  }

  const docsSection = findDocsNode(navigation.value)
  return (docsSection?.children || []).map(section => ({
    ...section,
    children: section.children?.filter(child => child.path !== section.path),
  }))
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <UContainer class="flex-1">
      <div class="flex gap-8 py-8">
        <aside class="hidden lg:block w-64 shrink-0">
          <nav class="sticky top-20">
            <UContentNavigation
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
