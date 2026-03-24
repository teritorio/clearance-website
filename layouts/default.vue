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

const localeItems = computed(() =>
  (locales.value as Array<{ code: string, name: string }>).map(l => ({
    label: l.name,
    to: switchLocalePath(l.code as typeof locale.value),
  })),
)
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="border-b border-gray-200 dark:border-gray-800">
      <UContainer>
        <nav class="flex items-center justify-between h-16">
          <NuxtLink :to="localePath('/')" class="text-xl font-bold">
            {{ t('nav.home') }}
          </NuxtLink>
          <UDropdownMenu :items="localeItems">
            <UButton
              variant="ghost"
              icon="i-lucide-languages"
              :label="locale.toUpperCase()"
              :aria-label="t('nav.changeLanguage')"
            />
          </UDropdownMenu>
        </nav>
      </UContainer>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t border-gray-200 dark:border-gray-800">
      <UContainer>
        <div class="py-8 text-center text-sm text-gray-500">
          {{ t('footer.copyright', { year: new Date().getFullYear() }) }}
        </div>
      </UContainer>
    </footer>
  </div>
</template>
