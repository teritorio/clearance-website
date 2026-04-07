<script setup lang="ts">
const APP_URL = 'https://clearance.teritorio.xyz'

const { t } = useI18n()
const localePath = useLocalePath()
const drawerOpen = ref(false)

const navItems = computed(() => [
  {
    label: t('nav.docs'),
    icon: 'i-lucide-book-open',
    to: localePath('/how-it-works/replication'),
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
  <UHeader v-model:open="drawerOpen" :to="localePath('/')" mode="drawer">
    <template #title>
      <div class="flex items-center gap-2">
        <NuxtImg src="/logo.svg" alt="Clearance" width="28" height="28" />
        <span>{{ t('nav.home') }}</span>
      </div>
    </template>
    <template #right>
      <UNavigationMenu class="hidden md:flex" :items="navItems" />
      <UButton
        :label="t('nav.seeClearance')"
        :to="APP_URL"
        target="_blank"
        rel="noopener"
        icon="i-lucide-external-link"
        class="hidden md:flex"
      />
      <AppLanguageSwitcher />
    </template>
    <template #body>
      <UNavigationMenu orientation="vertical" :items="navItems" />
      <UButton
        :label="t('nav.seeClearance')"
        :to="APP_URL"
        target="_blank"
        rel="noopener"
        icon="i-lucide-external-link"
        class="mt-4 w-full justify-center"
        @click="drawerOpen = false"
      />
    </template>
  </UHeader>
</template>
