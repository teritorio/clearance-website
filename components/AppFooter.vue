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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 57" fill="currentColor" class="size-5" aria-hidden="true">
          <path d="M39.2 0h-8.6L15.6 53.5h14.3v-38h12.2L46 6.1 48.5 0z" />
          <path d="M0 4.3v12h12.5v40.2h.3L27.7 4.3H0z" />
        </svg>
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
