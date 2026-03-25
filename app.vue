<script setup lang="ts">
import { en, es, fr } from '@nuxt/ui/locale'

const uiLocales: Record<string, typeof en> = { en, fr, es }

const { locale } = useI18n()
const route = useRoute()
const uiLocale = computed(() => uiLocales[locale.value] || en)

useSchemaOrg([
  defineOrganization({
    name: 'Teritorio',
    url: 'https://teritorio.fr',
    logo: 'https://clearance.teritorio.xyz/logo.svg',
  }),
  defineSoftwareApp({
    name: 'Clearance',
    operatingSystem: 'Linux',
    applicationCategory: 'DeveloperApplication',
    offers: {
      price: '0',
      priceCurrency: 'EUR',
    },
  }),
])
</script>

<template>
  <UApp :locale="uiLocale">
    <NuxtLayout>
      <NuxtPage :page-key="route.path" />
    </NuxtLayout>
  </UApp>
</template>
