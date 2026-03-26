<script setup lang="ts">
import { en, es, fr } from '@nuxt/ui/locale'

const uiLocales: Record<string, typeof en> = { en, fr, es }

const { t, locale } = useI18n()
const route = useRoute()
const uiLocale = computed(() => uiLocales[locale.value] || en)

useSeoMeta({
  description: () => t('seo.description'),
  ogImageAlt: () => t('seo.ogImageAlt'),
})

useHead({
  link: [
    { rel: 'manifest', href: () => `/site.${locale.value}.webmanifest` },
  ],
})

useSchemaOrg([
  defineOrganization({
    name: 'Teritorio',
    url: 'https://teritorio.fr',
    logo: 'https://www.teritorio.fr/wp-content/themes/teritorio/assets/images/favicon/favicon-194x194.png',
  }),
  defineSoftwareApp({
    name: 'Clearance',
    operatingSystem: 'Any',
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
