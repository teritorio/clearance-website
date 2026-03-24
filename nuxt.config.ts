export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxt/image',
  ],

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://clearance.teritorio.xyz',
    name: 'Clearance',
    description: 'Quality gate for OpenStreetMap data',
    defaultLocale: 'fr',
  },

  i18n: {
    baseUrl: 'https://clearance.teritorio.xyz',
    strategy: 'prefix',
    defaultLocale: 'fr',
    langDir: 'locales',
    locales: [
      { code: 'en', name: 'English', language: 'en-US', file: 'en.ts' },
      { code: 'fr', name: 'Français', language: 'fr-FR', file: 'fr.ts' },
      { code: 'es', name: 'Español', language: 'es-ES', file: 'es.ts' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root',
    },
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  compatibilityDate: '2025-03-24',
  devtools: { enabled: true },
})
