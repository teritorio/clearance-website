<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
  number?: string
}>()
</script>

<template>
  <div class="landing-step relative">
    <!-- Floating step number badge -->
    <div
      v-if="number"
      class="absolute top-0 left-1/2 z-10 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-white text-lg font-bold text-primary shadow-sm"
    >
      {{ number }}
    </div>

    <!-- Card -->
    <div class="flex h-full flex-col items-center rounded-xl border border-zinc-200 bg-white px-6 pb-6 pt-8 text-center shadow-sm">
      <h3 class="text-lg font-semibold">
        {{ title }}
      </h3>
      <div class="mt-2 text-sm text-muted">
        <MDCSlot :use="$slots.default" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Horizontal chevron arrow between steps (desktop) */
@media (min-width: 640px) {
  .landing-step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -1.875rem;
    width: 12px;
    height: 12px;
    border-right: 2.5px solid var(--ui-primary);
    border-top: 2.5px solid var(--ui-primary);
    transform: translateY(-50%) rotate(45deg);
  }
}

/* Vertical chevron arrow between steps (mobile) */
@media (max-width: 639px) {
  .landing-step:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: -1.875rem;
    left: 50%;
    width: 12px;
    height: 12px;
    border-right: 2.5px solid var(--ui-primary);
    border-bottom: 2.5px solid var(--ui-primary);
    transform: translateX(-50%) rotate(45deg);
  }
}
</style>
