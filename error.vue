<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const { t, locale } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <main class="flex-1 flex items-center justify-center px-4">
      <div class="text-center max-w-md">
        <p class="text-8xl font-bold text-primary">
          {{ error.statusCode }}
        </p>
        <h1 class="mt-4 text-2xl font-semibold">
          {{ error.statusCode === 404 ? t('error.title') : error.message }}
        </h1>
        <p class="mt-2 text-muted">
          {{ error.statusCode === 404 ? t('error.message') : '' }}
        </p>
        <UButton
          :to="localePath('/', locale)"
          size="lg"
          class="mt-8"
          :label="t('error.backHome')"
          icon="i-lucide-arrow-left"
        />
      </div>
    </main>

    <AppFooter />
  </div>
</template>
