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
      { label: 'NLNet', to: 'https://nlnet.nl/project/Clearance/', target: '_blank' },
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
  <UFooter :ui="{ top: 'border-b border-t border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="footerColumns" :ui="{ root: 'block!', left: 'hidden!', center: 'grid! grid-cols-3! gap-8' }" />
      </UContainer>
    </template>
    <template #left>
      <div class="flex items-center gap-2">
        <img src="/teritorio-icon.svg" alt="Teritorio" class="size-5">
        <i18n-t keypath="footer.copyright" tag="p" class="text-sm text-muted">
          <template #year>
            {{ new Date().getFullYear() }}
          </template>
          <template #teritorio>
            <NuxtLink to="https://teritorio.fr" target="_blank" class="text-muted hover:text-default">
              Teritorio
            </NuxtLink>
          </template>
          <template #license>
            <NuxtLink to="https://github.com/teritorio/clearance/blob/dev/LICENSE" target="_blank" class="text-muted hover:text-default">
              {{ t('footer.licenseLabel') }}
            </NuxtLink>
          </template>
        </i18n-t>
      </div>
    </template>
    <template #right>
      <UButton
        to="https://github.com/teritorio/clearance"
        target="_blank"
        icon="i-lucide-github"
        variant="ghost"
        color="neutral"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
