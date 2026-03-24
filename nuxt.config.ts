export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxt/image',
  ],

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://clearance.teritorio.xyz',
    name: 'Clearance',
    description: 'Quality gate for OpenStreetMap data',
    defaultLocale: 'en',
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  compatibilityDate: '2025-03-24',
  devtools: { enabled: true },
})
