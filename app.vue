<script setup lang="ts">
import { en, es, fr } from '@nuxt/ui/locale'

const uiLocales: Record<string, typeof en> = { en, fr, es }

const { locale } = useI18n()
const route = useRoute()
const uiLocale = computed(() => uiLocales[locale.value] || en)

const colorMode = useColorMode()
colorMode.preference = 'light'
</script>

<template>
  <UApp :locale="uiLocale">
    <NuxtLayout>
      <NuxtPage :page-key="route.path" />
    </NuxtLayout>
  </UApp>
</template>
