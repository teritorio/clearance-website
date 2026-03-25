<script setup lang="ts">
const { t, locale } = useI18n()

const collectionName = computed(() => `content_${locale.value}` as const)

const { data: page } = await useAsyncData(
  `contact-${locale.value}`,
  () => queryCollection(collectionName.value).path(`/${locale.value}/contact`).first(),
  { watch: [locale] },
)

useHead({
  title: () => page.value?.title,
  meta: [
    { name: 'description', content: () => page.value?.description },
  ],
})

const form = reactive({
  name: '',
  email: '',
  organization: '',
  message: '',
})

function onSubmit() {
  const subject = encodeURIComponent(`[Clearance] Contact from ${form.name}`)
  const body = encodeURIComponent(
    `Name: ${form.name}\nOrganization: ${form.organization}\nEmail: ${form.email}\n\n${form.message}`,
  )
  window.location.href = `mailto:contact@teritorio.fr?subject=${subject}&body=${body}`
  Object.assign(form, { name: '', email: '', organization: '', message: '' })
}
</script>

<template>
  <UContainer class="py-16">
    <div class="mx-auto max-w-xl">
      <h1 class="text-3xl font-bold tracking-tight">
        {{ t('contact.title') }}
      </h1>
      <p class="mt-4 text-muted">
        {{ t('contact.description') }}
      </p>

      <div class="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-6">
        <h2 class="text-lg font-semibold">
          {{ t('contact.demoTitle') }}
        </h2>
        <p class="mt-2 text-sm text-muted">
          {{ t('contact.demoDescription') }}
        </p>
        <ul class="mt-3 space-y-1 text-sm text-muted list-disc list-inside">
          <li>{{ t('contact.demoItem1') }}</li>
          <li>{{ t('contact.demoItem2') }}</li>
          <li>{{ t('contact.demoItem3') }}</li>
          <li>{{ t('contact.demoItem4') }}</li>
        </ul>
      </div>

      <div class="mt-8 rounded-lg border border-muted/20 bg-muted/5 p-6">
        <h2 class="text-lg font-semibold">
          {{ t('contact.whyTitle') }}
        </h2>
        <ul class="mt-3 space-y-1 text-sm text-muted list-disc list-inside">
          <li>{{ t('contact.whyItem1') }}</li>
          <li>{{ t('contact.whyItem2') }}</li>
          <li>{{ t('contact.whyItem3') }}</li>
          <li>{{ t('contact.whyItem4') }}</li>
        </ul>
        <p class="mt-3 text-sm text-muted">
          <i18n-t keypath="contact.openSource" tag="span">
            <template #link>
              <a href="https://github.com/teritorio/clearance" target="_blank" class="text-primary underline">{{ t('contact.github') }}</a>
            </template>
          </i18n-t>
        </p>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="onSubmit">
        <UFormField :label="t('contact.name')">
          <UInput
            v-model="form.name"
            :placeholder="t('contact.namePlaceholder')"
            required
            class="w-full"
          />
        </UFormField>

        <UFormField :label="t('contact.email')">
          <UInput
            v-model="form.email"
            type="email"
            :placeholder="t('contact.emailPlaceholder')"
            required
            class="w-full"
          />
        </UFormField>

        <UFormField :label="t('contact.organization')">
          <UInput
            v-model="form.organization"
            :placeholder="t('contact.organizationPlaceholder')"
            class="w-full"
          />
        </UFormField>

        <UFormField :label="t('contact.message')">
          <UTextarea
            v-model="form.message"
            :placeholder="t('contact.messagePlaceholder')"
            :rows="5"
            required
            class="w-full"
          />
        </UFormField>

        <UButton type="submit" size="lg">
          {{ t('contact.send') }}
        </UButton>
      </form>
    </div>
  </UContainer>
</template>
