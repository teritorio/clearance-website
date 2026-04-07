<script setup lang="ts">
const { t, locale } = useI18n()

const route = useRoute()
const mobileNavOpen = ref(false)

watch(() => route.path, () => {
  mobileNavOpen.value = false
})

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

const docsPathPattern = /\/how-it-works\/?$/

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
  if (!docsSection)
    return []
  return [{
    ...docsSection,
    children: docsSection.children?.filter(child => child.path !== docsSection.path),
  }]
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <UContainer class="flex-1">
      <div class="flex gap-4 py-4 sm:gap-8 sm:py-8">
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
          <div class="mb-4 lg:hidden">
            <UButton
              icon="i-lucide-menu"
              variant="outline"
              color="neutral"
              :label="t('nav.docs')"
              @click="mobileNavOpen = true"
            />
          </div>
          <slot />
        </main>

        <aside class="hidden xl:block w-56 shrink-0">
          <div class="sticky top-20">
            <slot name="toc" />
          </div>
        </aside>
      </div>
    </UContainer>

    <USlideover v-model:open="mobileNavOpen" side="left" title="Clearance">
      <template #title>
        <div class="flex items-center gap-2">
          <NuxtImg src="/logo.svg" alt="Clearance" width="28" height="28" />
          <span>Clearance</span>
        </div>
      </template>
      <template #description>
        <span class="sr-only">{{ t('nav.docs') }}</span>
      </template>
      <template #body>
        <UContentNavigation
          v-if="docsNavigation.length"
          :navigation="docsNavigation"
          highlight
        />
      </template>
    </USlideover>

    <AppFooter />
  </div>
</template>
