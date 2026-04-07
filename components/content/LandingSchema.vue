<script setup lang="ts">
defineProps<{
  changesLabel?: string
  osmLabel?: string
  clearanceLabel?: string
  extractLabel?: string
  anomaliesLabel?: string
  correctionsLabel?: string
}>()
</script>

<template>
  <div class="mx-auto max-w-3xl">
    <!-- Mobile: simplified vertical flow -->
    <div class="flex flex-col items-center gap-3 sm:hidden" role="img" :aria-label="`${changesLabel} → ${osmLabel} → ${clearanceLabel} → ${extractLabel}`">
      <div class="flex w-full max-w-xs items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
        <div class="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-zinc-300 bg-white">
          <svg viewBox="0 0 30 14" class="h-3.5 w-[30px]" aria-hidden="true"><path d="M 0,7 Q 5,0 10,7 Q 15,14 20,7 Q 25,0 30,7" fill="none" stroke="#3f3f46" stroke-width="2.2" stroke-linecap="round" /></svg>
        </div>
        <span class="text-sm text-muted">{{ changesLabel }}</span>
      </div>
      <UIcon name="i-lucide-chevron-down" class="size-5 text-primary" />
      <div class="flex w-full max-w-xs items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
        <div class="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-zinc-300 bg-white">
          <NuxtImg src="/logos/openstreetmap.png" alt="OpenStreetMap" class="size-6 object-contain" />
        </div>
        <div class="flex flex-col">
          <span class="text-sm text-muted">{{ osmLabel }}</span>
          <span v-if="correctionsLabel" class="text-xs text-muted italic">↑ {{ correctionsLabel }}</span>
        </div>
      </div>
      <UIcon name="i-lucide-chevron-down" class="size-5 text-primary" />
      <div class="flex w-full max-w-xs items-center gap-3 rounded-xl border-2 border-primary/30 bg-primary/5 px-4 py-3">
        <div class="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white">
          <svg viewBox="0 0 24 24" class="size-6" aria-hidden="true"><circle cx="10" cy="10" r="8" fill="#ffbb00" stroke="#000" stroke-width="0.8" /><circle cx="15" cy="15" r="6.5" fill="#f00" stroke="#000" stroke-width="0.8" /></svg>
        </div>
        <div class="flex flex-col">
          <span class="text-sm font-medium">{{ clearanceLabel }}</span>
          <span v-if="anomaliesLabel" class="text-xs text-muted italic">→ {{ anomaliesLabel }}</span>
        </div>
      </div>
      <UIcon name="i-lucide-chevron-down" class="size-5 text-primary" />
      <div class="flex w-full max-w-xs items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
        <div class="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-zinc-300 bg-white">
          <UIcon name="i-lucide-database" class="size-5 text-zinc-700" />
        </div>
        <span class="text-sm text-muted">{{ extractLabel }}</span>
      </div>
    </div>

    <!-- Desktop: full SVG diagram -->
    <svg
      viewBox="0 -40 560 195"
      class="hidden w-full sm:block"
      role="img"
      :aria-label="`${changesLabel} → ${osmLabel} → ${clearanceLabel} → ${extractLabel}`"
    >
      <defs>
        <!-- Arrow marker for main flow -->
        <marker
          id="schema-arrow-flow"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
        >
          <polygon points="0 0, 10 5, 0 10" fill="#d4d4d8" />
        </marker>
        <!-- Arrow marker for anomalies (going out of Clearance) -->
        <marker
          id="schema-arrow-anomalies"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
        >
          <polygon points="0 0, 10 5, 0 10" fill="#a1a1aa" />
        </marker>
        <!-- Arrow marker for corrections (going into OSM) -->
        <marker
          id="schema-arrow-corrections"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
        >
          <polygon points="0 0, 10 5, 0 10" fill="#a1a1aa" />
        </marker>
      </defs>

      <!-- Main horizontal line segments with arrows -->
      <line x1="98" y1="70" x2="178" y2="70" stroke="#d4d4d8" stroke-width="2" marker-end="url(#schema-arrow-flow)" />
      <line x1="238" y1="70" x2="318" y2="70" stroke="#d4d4d8" stroke-width="2" marker-end="url(#schema-arrow-flow)" />
      <line x1="378" y1="70" x2="458" y2="70" stroke="#d4d4d8" stroke-width="2" marker-end="url(#schema-arrow-flow)" />

      <!-- Anomalies: arrow going up from Clearance -->
      <line x1="350" y1="42" x2="350" y2="-5" stroke="#a1a1aa" stroke-width="1.5" stroke-dasharray="5 3" marker-end="url(#schema-arrow-anomalies)" />

      <!-- Corrections: arrow going down into OSM -->
      <line x1="210" y1="-5" x2="210" y2="38" stroke="#a1a1aa" stroke-width="1.5" stroke-dasharray="5 3" marker-end="url(#schema-arrow-corrections)" />

      <!-- Circle borders -->
      <circle cx="70" cy="70" r="28" fill="none" stroke="#d4d4d8" stroke-width="2" />
      <circle cx="210" cy="70" r="28" fill="none" stroke="#d4d4d8" stroke-width="2" />
      <circle cx="350" cy="70" r="28" fill="none" stroke="#d4d4d8" stroke-width="2" />
      <circle cx="490" cy="70" r="28" fill="none" stroke="#d4d4d8" stroke-width="2" />

      <!-- White circle fills (hide line inside nodes) -->
      <circle cx="70" cy="70" r="27" fill="white" />
      <circle cx="210" cy="70" r="27" fill="white" />
      <circle cx="350" cy="70" r="27" fill="white" />
      <circle cx="490" cy="70" r="27" fill="white" />

      <!-- Inner decorative circles -->
      <circle cx="70" cy="70" r="27" fill="#fafafa" stroke="#f4f4f5" stroke-width="1" />
      <circle cx="210" cy="70" r="27" fill="#fafafa" stroke="#f4f4f5" stroke-width="1" />
      <circle cx="350" cy="70" r="27" fill="#fafafa" stroke="#f4f4f5" stroke-width="1" />
      <circle cx="490" cy="70" r="27" fill="#fafafa" stroke="#f4f4f5" stroke-width="1" />

      <!-- Node icons -->
      <!-- Changes: wavy line -->
      <g transform="translate(70, 70)">
        <path d="M -11,0 Q -6,-7 -1,0 Q 4,7 9,0 Q 14,-7 19,0" fill="none" stroke="#3f3f46" stroke-width="2.2" stroke-linecap="round" transform="translate(-4, 0)" />
      </g>

      <!-- OSM: logo -->
      <image href="/logos/openstreetmap.png" x="192" y="52" width="36" height="36" />

      <!-- Clearance: logo (two overlapping circles) -->
      <g transform="translate(350, 70)">
        <circle cx="-4" cy="-2" r="8" fill="#ffbb00" stroke="#000" stroke-width="0.8" />
        <circle cx="3" cy="3" r="6.5" fill="#f00" stroke="#000" stroke-width="0.8" />
      </g>

      <!-- Extract: database + green check -->
      <g transform="translate(490, 70)">
        <ellipse cx="-2" cy="-5" rx="8" ry="3.5" fill="none" stroke="#3f3f46" stroke-width="1.8" />
        <path d="M -10,-5 L -10,5 C -10,8.5 6,8.5 6,5 L 6,-5" fill="none" stroke="#3f3f46" stroke-width="1.8" />
        <path d="M 5,-1 L 8,3 L 14,-5" fill="none" stroke="#16a34a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
      </g>

      <!-- Anomalies label (above Clearance) -->
      <text
        x="350"
        y="-22"
        text-anchor="middle"
        fill="#a1a1aa"
        font-size="11"
        font-style="italic"
        font-family="system-ui, sans-serif"
      >
        {{ anomaliesLabel }}
      </text>

      <!-- Corrections label (above OSM) -->
      <text
        x="210"
        y="-22"
        text-anchor="middle"
        fill="#a1a1aa"
        font-size="11"
        font-style="italic"
        font-family="system-ui, sans-serif"
      >
        {{ correctionsLabel }}
      </text>

      <!-- Node labels -->
      <text x="70" y="115" text-anchor="middle" fill="#a1a1aa" font-size="11" font-family="system-ui, sans-serif">
        {{ changesLabel }}
      </text>
      <text x="210" y="115" text-anchor="middle" fill="#a1a1aa" font-size="11" font-family="system-ui, sans-serif">
        {{ osmLabel }}
      </text>
      <text x="350" y="115" text-anchor="middle" fill="#a1a1aa" font-size="11" font-family="system-ui, sans-serif">
        {{ clearanceLabel }}
      </text>
      <text x="490" y="115" text-anchor="middle" fill="#a1a1aa" font-size="11" font-family="system-ui, sans-serif">
        {{ extractLabel }}
      </text>
    </svg>
  </div>
</template>
