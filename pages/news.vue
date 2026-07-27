<script setup lang="ts">
const { t, locale } = useI18n()
const { formatDate } = useNewsFormatting()

const collectionName = computed(() => `news_${locale.value}` as 'news_fr' | 'news_en' | 'news_es')

const { data: news } = await useAsyncData(
  `news-all-${locale.value}`,
  async () => {
    const items = await queryCollection(collectionName.value).all()
    return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  },
)

useHead({
  title: () => t('news.seoTitle'),
  meta: [{ name: 'description', content: () => t('news.pageDescription') }],
})
</script>

<template>
  <div>
    <UContainer class="py-16 sm:py-24">
      <div class="mb-12">
        <p class="text-sm font-semibold text-primary uppercase tracking-wide">
          {{ t('news.headline') }}
        </p>
        <h1 class="mt-2 text-3xl font-bold sm:text-4xl">
          {{ t('news.pageTitle') }}
        </h1>
      </div>

      <div v-if="news?.length" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="item in news"
          :key="item.id"
          class="flex flex-col gap-4 rounded-xl border border-default bg-default p-6"
        >
          <time :datetime="item.date" class="text-sm text-muted">
            {{ formatDate(item.date) }}
          </time>
          <h2 class="font-semibold leading-snug">
            {{ item.title }}
          </h2>
          <p class="flex-1 text-sm text-muted">
            {{ item.description }}
          </p>
          <UButton
            v-if="item.url"
            :to="item.url"
            target="_blank"
            rel="noopener"
            variant="ghost"
            size="sm"
            trailing-icon="i-lucide-arrow-up-right"
            class="self-start"
          >
            {{ t('news.readMore') }}
          </UButton>
        </article>
      </div>

      <p v-else class="text-muted">
        {{ t('news.empty') }}
      </p>
    </UContainer>
  </div>
</template>
