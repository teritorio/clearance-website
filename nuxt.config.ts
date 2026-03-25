export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxt/image',
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [
        { name: 'theme-color', content: '#ffbb00' },
        { property: 'og:image', content: 'https://clearance.teritorio.xyz/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Clearance — Quality filter for OpenStreetMap data' },
        { name: 'twitter:image', content: 'https://clearance.teritorio.xyz/og-image.png' },
      ],
    },
  },

  site: {
    url: 'https://clearance.teritorio.xyz',
    name: 'Clearance',
    description: 'Open source quality filter for OpenStreetMap data — filter, validate, and secure your OSM data pipeline.',
    defaultLocale: 'fr',
  },

  ogImage: {
    enabled: false,
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

  routeRules: {
    '/en/docs': { redirect: '/en/docs/getting-started/overview' },
    '/fr/docs': { redirect: '/fr/docs/getting-started/overview' },
    '/es/docs': { redirect: '/es/docs/getting-started/overview' },
  },

  nitro: {
    prerender: {
      routes: ['fr', 'en', 'es'].flatMap(locale => [
        `/${locale}`,
        `/${locale}/contact`,
        `/${locale}/docs`,
        `/${locale}/docs/getting-started`,
        `/${locale}/docs/getting-started/overview`,
        `/${locale}/docs/getting-started/how-it-works`,
        `/${locale}/docs/getting-started/rules`,
        `/${locale}/docs/going-further`,
        `/${locale}/docs/going-further/integration`,
        `/${locale}/docs/going-further/deployment`,
        `/${locale}/docs/going-further/references`,
        `/${locale}/docs/going-further/roadmap`,
      ]),
    },
  },

  colorMode: {
    preference: 'light',
  },

  compatibilityDate: '2025-03-24',
  devtools: { enabled: true },
})
