<script setup lang="ts">
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const localeItems = computed(() =>
  (locales.value as Array<{ code: string, name: string }>).map(l => ({
    label: l.name,
    to: switchLocalePath(l.code as typeof locale.value),
  })),
)
</script>

<template>
  <UDropdownMenu :items="localeItems">
    <UButton
      variant="ghost"
      icon="i-lucide-languages"
      :label="locale.toUpperCase()"
      :aria-label="t('nav.changeLanguage')"
    />
  </UDropdownMenu>
</template>
