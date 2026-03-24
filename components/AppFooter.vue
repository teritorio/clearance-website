<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const footerColumns = computed(() => [
  {
    label: t('footer.product'),
    children: [
      { label: t('nav.docs'), to: localePath('/docs') },
      { label: t('nav.contact'), to: localePath('/contact') },
    ],
  },
  {
    label: t('footer.resources'),
    children: [
      { label: 'GitHub', to: 'https://github.com/teritorio/clearance', target: '_blank' },
      { label: 'OpenStreetMap', to: 'https://www.openstreetmap.org', target: '_blank' },
    ],
  },
  {
    label: t('footer.company'),
    children: [
      { label: 'Teritorio', to: 'https://teritorio.fr', target: '_blank' },
    ],
  },
])
</script>

<template>
  <UFooter>
    <template #top>
      <UFooterColumns :columns="footerColumns" />
    </template>
    <template #left>
      <p class="text-sm text-muted">
        {{ t('footer.copyright', { year: new Date().getFullYear() }) }}
      </p>
    </template>
  </UFooter>
</template>
