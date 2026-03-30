<script setup lang="ts">
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const navItems = computed(() => [
  {
    label: t('nav.docs'),
    icon: 'i-lucide-book-open',
    to: localePath('/docs'),
  },
  {
    label: t('nav.contact'),
    icon: 'i-lucide-mail',
    to: localePath('/contact'),
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
  <UHeader :to="localePath('/')">
    <template #title>
      <div class="flex items-center gap-2">
        <NuxtImg src="/logo.svg" alt="Clearance" width="28" height="28" />
        <span>{{ t('nav.home') }}</span>
      </div>
    </template>
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
</template>
