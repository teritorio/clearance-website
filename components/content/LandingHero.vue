<script setup lang="ts">
const props = defineProps<{
  headline?: string
  title: string
  description: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}>()

const localePath = useLocalePath()

function resolveTo(path?: string) {
  if (!path)
    return undefined
  if (path.startsWith('http'))
    return path
  return localePath(path)
}

const resolvedPrimaryTo = computed(() => resolveTo(props.primaryTo))
const resolvedSecondaryTo = computed(() => resolveTo(props.secondaryTo))
</script>

<template>
  <section class="relative py-24 sm:py-32">
    <UContainer>
      <div class="mx-auto max-w-3xl text-center">
        <p v-if="headline" class="text-sm font-semibold text-primary">
          {{ headline }}
        </p>
        <h1 class="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          {{ title }}
        </h1>
        <p class="mt-6 text-lg text-muted">
          {{ description }}
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-4">
          <UButton
            v-if="primaryLabel && resolvedPrimaryTo"
            :to="resolvedPrimaryTo"
            size="xl"
          >
            {{ primaryLabel }}
          </UButton>
          <UButton
            v-if="secondaryLabel && resolvedSecondaryTo"
            :to="resolvedSecondaryTo"
            size="xl"
            variant="outline"
          >
            {{ secondaryLabel }}
          </UButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>
