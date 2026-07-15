import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const locales = ['en', 'fr', 'es'] as const

function defineLocaleCollection(locale: typeof locales[number]) {
  return defineCollection({
    type: 'page',
    source: {
      include: `${locale}/**`,
      prefix: `/${locale}`,
    },
  })
}

const newsSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string(),
  url: z.string().optional(),
  type: z.enum(['release', 'post', 'announcement']).default('announcement'),
})

export default defineContentConfig({
  collections: {
    ...Object.fromEntries(
      locales.map(locale => [`content_${locale}`, defineLocaleCollection(locale)]),
    ),
    ...Object.fromEntries(
      locales.map(locale => [`news_${locale}`, defineCollection({
        type: 'data',
        source: `news/${locale}/*.yaml`,
        schema: newsSchema,
      })]),
    ),
  },
})
