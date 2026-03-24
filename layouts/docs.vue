<script setup lang="ts">
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const head = useLocaleHead({ seo: true })
useHead({
  htmlAttrs: { lang: () => head.value.htmlAttrs?.lang },
  link: () => [...(head.value.link || [])],
  meta: () => [...(head.value.meta || [])],
})

const collectionName = computed(() => `content_${locale.value}` as const)

const { data: navigation } = await useAsyncData(
  `docs-nav-${locale.value}`,
  () => queryCollectionNavigation(collectionName.value),
  { watch: [locale] },
)

const docsNavigation = computed(() => {
  if (!navigation.value)
    return []
  const docsSection = navigation.value.find(n => n.path?.includes('/docs'))
  return docsSection?.children || []
})

const navItems = computed(() => [
  {
    label: t('nav.home'),
    icon: 'i-lucide-home',
    to: localePath('/'),
  },
  {
    label: t('nav.docs'),
    icon: 'i-lucide-book-open',
    to: localePath('/docs'),
  },
  {
    label: t('nav.github'),
    icon: 'i-lucide-github',
    to: 'https://github.com/teritorio/clearance',
    target: '_blank',
  },
])

const localeItems = computed(() =>
  (locales.value as Array<{ code: string, name: string }>).map(l => ({
    label: l.name,
    to: switchLocalePath(l.code as typeof locale.value),
  })),
)
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <UHeader :title="t('nav.home')" :to="localePath('/')">
      <template #right>
        <UNavigationMenu :items="navItems" />
        <UDropdownMenu :items="localeItems">
          <UButton
            variant="ghost"
            icon="i-lucide-languages"
            :label="locale.toUpperCase()"
            :aria-label="t('nav.changeLanguage')"
          />
        </UDropdownMenu>
      </template>
    </UHeader>

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

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          {{ t('footer.copyright', { year: new Date().getFullYear() }) }}
        </p>
      </template>
    </UFooter>
  </div>
</template>
