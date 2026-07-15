<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
}>()
const { t, locale } = useI18n()
const localePath = useLocalePath()

const collectionName = computed(() => `news_${locale.value}` as 'news_fr' | 'news_en' | 'news_es')

const { data: news } = await useAsyncData(
  `news-latest-${locale.value}`,
  async () => {
    const items = await queryCollection(collectionName.value).all()
    return items
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3)
  },
)

function typeColor(type: string | undefined) {
  const map: Record<string, 'primary' | 'success' | 'info'> = {
    release: 'primary',
    post: 'info',
    announcement: 'success',
  }
  return map[type ?? 'announcement'] ?? 'primary'
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <section class="py-16 sm:py-24">
    <UContainer>
      <LandingSectionHeader :headline="headline" :title="title" />
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="item in news"
          :key="item.id"
          class="flex flex-col gap-4 rounded-xl border border-default bg-default p-6"
        >
          <div class="flex items-center justify-between gap-2">
            <UBadge :color="typeColor(item.type)" variant="subtle" size="sm">
              {{ t(`news.types.${item.type}`) }}
            </UBadge>
            <time :datetime="item.date" class="text-sm text-muted">
              {{ formatDate(item.date) }}
            </time>
          </div>
          <h3 class="font-semibold leading-snug">
            {{ item.title }}
          </h3>
          <p class="flex-1 text-sm text-muted line-clamp-3">
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
      <div class="mt-10 text-center">
        <UButton :to="localePath('/news')" variant="outline" size="lg">
          {{ t('news.seeAll') }}
        </UButton>
      </div>
    </UContainer>
  </section>
</template>
