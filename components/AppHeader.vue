<script setup lang="ts">
const { t } = useI18n()
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
</script>

<template>
  <UHeader :to="localePath('/')" mode="drawer">
    <template #title>
      <div class="flex items-center gap-2">
        <NuxtImg src="/logo.svg" alt="Clearance" width="28" height="28" />
        <span>{{ t('nav.home') }}</span>
      </div>
    </template>
    <template #right>
      <UNavigationMenu class="hidden md:flex" :items="navItems" />
      <AppLanguageSwitcher />
    </template>
    <template #body>
      <UNavigationMenu orientation="vertical" :items="navItems" />
      <AppLanguageSwitcher />
    </template>
  </UHeader>
</template>
