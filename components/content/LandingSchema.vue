<script setup lang="ts">
defineProps<{
  changesLabel?: string
  osmLabel?: string
  clearanceLabel?: string
  extractLabel?: string
  feedbackLabel?: string
}>()
</script>

<template>
  <div class="flex items-center justify-center rounded-2xl border border-zinc-200 bg-white p-6">
    <svg
      viewBox="0 0 480 520"
      class="mx-auto block w-full"
      role="img"
      :aria-label="`${changesLabel} → ${osmLabel} → ${clearanceLabel} → ${extractLabel}`"
    >
      <defs>
        <linearGradient id="line-grad-1" gradientUnits="userSpaceOnUse" x1="290" y1="76" x2="290" y2="134">
          <stop offset="0%" stop-color="#fde68a" />
          <stop offset="100%" stop-color="#f59e0b" />
        </linearGradient>
        <linearGradient id="line-grad-2" gradientUnits="userSpaceOnUse" x1="290" y1="216" x2="290" y2="274">
          <stop offset="0%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#d97706" />
        </linearGradient>
        <linearGradient id="line-grad-3" gradientUnits="userSpaceOnUse" x1="290" y1="356" x2="290" y2="414">
          <stop offset="0%" stop-color="#d97706" />
          <stop offset="100%" stop-color="#b45309" />
        </linearGradient>
        <marker id="schema-arrow" viewBox="0 0 10 7" refX="10" refY="3.5" markerWidth="8" markerHeight="7" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#fcd34d" />
        </marker>
      </defs>

      <!-- Connection lines (vertical, gradient, animated) -->
      <line x1="290" y1="76" x2="290" y2="134" stroke="url(#line-grad-1)" stroke-width="2" class="flow-down" stroke-dasharray="6 4" />
      <line x1="290" y1="216" x2="290" y2="274" stroke="url(#line-grad-2)" stroke-width="2" class="flow-down" stroke-dasharray="6 4" />
      <line x1="290" y1="356" x2="290" y2="414" stroke="url(#line-grad-3)" stroke-width="2" class="flow-down" stroke-dasharray="6 4" />

      <!-- Feedback loop (curved, left side, animated upward) -->
      <path
        d="M 254,310 C 170,300 170,180 256,170"
        fill="none"
        stroke="#fcd34d"
        stroke-width="2"
        stroke-dasharray="6 4"
        marker-end="url(#schema-arrow)"
        class="flow-up"
      />

      <!-- Feedback label with white background for readability -->
      <rect x="12" y="231" :width="feedbackLabel ? feedbackLabel.length * 7.5 + 12 : 150" height="22" rx="4" fill="white" fill-opacity="0.85" />
      <text x="18" y="248" fill="#71717a" font-size="13" font-style="italic" font-family="system-ui, sans-serif">
        {{ feedbackLabel }}
      </text>

      <!-- Node: Changes -->
      <g transform="translate(290, 40)">
        <circle r="34" fill="white" stroke="#e4e4e7" stroke-width="2" />
        <circle r="28" fill="#fafafa" stroke="#f4f4f5" stroke-width="1" />
        <path d="M -14,0 Q -8,-9 -2,0 Q 4,9 10,0 Q 16,-9 22,0" fill="none" stroke="#3f3f46" stroke-width="2.5" stroke-linecap="round" transform="translate(-4, 0)" />
      </g>
      <text x="290" y="90" text-anchor="middle" fill="#3f3f46" font-size="14" font-weight="500" font-family="system-ui, sans-serif">
        {{ changesLabel }}
      </text>

      <!-- Node: OpenStreetMap -->
      <g transform="translate(290, 170)">
        <circle r="34" fill="white" stroke="#e4e4e7" stroke-width="2" />
        <circle r="28" fill="#fafafa" stroke="#f4f4f5" stroke-width="1" />
        <ellipse cx="0" cy="-8" rx="12" ry="5" fill="none" stroke="#3f3f46" stroke-width="2" />
        <path d="M -12,-8 L -12,8 C -12,13 12,13 12,8 L 12,-8" fill="none" stroke="#3f3f46" stroke-width="2" />
      </g>
      <text x="290" y="220" text-anchor="middle" fill="#3f3f46" font-size="14" font-weight="500" font-family="system-ui, sans-serif">
        {{ osmLabel }}
      </text>

      <!-- Node: Clearance (highlighted) -->
      <g transform="translate(290, 310)">
        <circle r="36" fill="white" stroke="#f59e0b" stroke-width="2.5" />
        <circle r="29" fill="#fffbeb" stroke="#fde68a" stroke-width="1" />
        <path d="M -12,-11 L 12,-11 L 3,2 L 3,13 L -3,13 L -3,2 Z" fill="none" stroke="#3f3f46" stroke-width="2" stroke-linejoin="round" />
      </g>
      <text x="290" y="362" text-anchor="middle" fill="#18181b" font-size="15" font-weight="600" font-family="system-ui, sans-serif">
        {{ clearanceLabel }}
      </text>

      <!-- Node: Extract -->
      <g transform="translate(290, 450)">
        <circle r="34" fill="white" stroke="#e4e4e7" stroke-width="2" />
        <circle r="28" fill="#fafafa" stroke="#f4f4f5" stroke-width="1" />
        <ellipse cx="-2" cy="-7" rx="10" ry="4" fill="none" stroke="#3f3f46" stroke-width="2" />
        <path d="M -12,-7 L -12,6 C -12,10 8,10 8,6 L 8,-7" fill="none" stroke="#3f3f46" stroke-width="2" />
        <path d="M 7,0 L 11,5 L 18,-4" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <text x="290" y="500" text-anchor="middle" fill="#3f3f46" font-size="14" font-weight="500" font-family="system-ui, sans-serif">
        {{ extractLabel }}
      </text>
    </svg>
  </div>
</template>

<style scoped>
.flow-down {
  animation: dash-down 1.5s linear infinite;
}

.flow-up {
  animation: dash-up 2s linear infinite;
}

@keyframes dash-down {
  to {
    stroke-dashoffset: -20;
  }
}

@keyframes dash-up {
  to {
    stroke-dashoffset: 20;
  }
}

@media (prefers-reduced-motion: reduce) {
  .flow-down,
  .flow-up {
    animation: none;
  }
}
</style>
