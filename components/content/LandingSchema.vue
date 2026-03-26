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
  <div class="mx-auto max-w-3xl">
    <svg
      viewBox="0 -15 560 170"
      class="block w-full"
      role="img"
      :aria-label="`${changesLabel} → ${osmLabel} → ${clearanceLabel} → ${extractLabel}`"
    >
      <defs>
        <!-- Main flow gradient: sweeps left-to-right across entire SVG -->
        <linearGradient
          id="main-flow-grad"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="200"
          y2="0"
          spreadMethod="pad"
        >
          <stop offset="0%" stop-color="#f59e0b" />
          <stop offset="60%" stop-color="#fbbf24" />
          <stop offset="100%" stop-color="#d4d4d8" />
          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            values="-200 0;600 0;600 0;-200 0;-200 0"
            keyTimes="0;0.65;0.85;0.86;1"
            dur="16s"
            repeatCount="indefinite"
          />
        </linearGradient>

        <!-- Feedback flow gradient: sweeps right-to-left along the arc -->
        <linearGradient
          id="feedback-flow-grad"
          gradientUnits="userSpaceOnUse"
          x1="350"
          y1="0"
          x2="150"
          y2="0"
          spreadMethod="pad"
        >
          <stop offset="0%" stop-color="#f59e0b" />
          <stop offset="60%" stop-color="#fbbf24" />
          <stop offset="100%" stop-color="#d4d4d8" />
          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            values="0 0;0 0;-250 0;-250 0;0 0;0 0"
            keyTimes="0;0.42;0.82;0.85;0.86;1"
            dur="16s"
            repeatCount="indefinite"
          />
        </linearGradient>

        <!-- Arrow markers for feedback (symmetrical triangle) -->
        <marker
          id="schema-arrow-grey"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
        >
          <polygon points="0 0, 10 5, 0 10" fill="#d4d4d8" />
        </marker>
        <marker
          id="schema-arrow-amber"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
        >
          <polygon points="0 0, 10 5, 0 10" fill="#f59e0b" />
        </marker>
      </defs>

      <!-- Layer 1: Grey base lines -->
      <!-- Main horizontal line -->
      <line x1="42" y1="70" x2="518" y2="70" stroke="#d4d4d8" stroke-width="2" />
      <!-- Grey circle borders -->
      <circle cx="70" cy="70" r="28" fill="none" stroke="#d4d4d8" stroke-width="2" />
      <circle cx="210" cy="70" r="28" fill="none" stroke="#d4d4d8" stroke-width="2" />
      <circle cx="350" cy="70" r="28" fill="none" stroke="#d4d4d8" stroke-width="2" />
      <circle cx="490" cy="70" r="28" fill="none" stroke="#d4d4d8" stroke-width="2" />
      <!-- Grey feedback arc -->
      <path
        d="M 346,38 C 328,2 232,2 214,38"
        fill="none"
        stroke="#d4d4d8"
        stroke-width="2"
        stroke-dasharray="6 4"
        marker-end="url(#schema-arrow-grey)"
      />

      <!-- Layer 2: Animated amber overlay -->
      <!-- Main horizontal line -->
      <line x1="42" y1="70" x2="518" y2="70" stroke="url(#main-flow-grad)" stroke-width="2" />
      <!-- Amber circle borders -->
      <circle cx="70" cy="70" r="28" fill="none" stroke="url(#main-flow-grad)" stroke-width="2" />
      <circle cx="210" cy="70" r="28" fill="none" stroke="url(#main-flow-grad)" stroke-width="2" />
      <circle cx="350" cy="70" r="28" fill="none" stroke="url(#main-flow-grad)" stroke-width="2" />
      <circle cx="490" cy="70" r="28" fill="none" stroke="url(#main-flow-grad)" stroke-width="2" />
      <!-- Amber feedback arc -->
      <path
        d="M 346,38 C 328,2 232,2 214,38"
        fill="none"
        stroke="url(#feedback-flow-grad)"
        stroke-width="2"
        stroke-dasharray="6 4"
        marker-end="url(#schema-arrow-amber)"
      />

      <!-- Layer 3: White circle fills (hide line inside nodes) -->
      <circle cx="70" cy="70" r="27" fill="white" />
      <circle cx="210" cy="70" r="27" fill="white" />
      <circle cx="350" cy="70" r="27" fill="white" />
      <circle cx="490" cy="70" r="27" fill="white" />

      <!-- Layer 4: Inner decorative circles -->
      <circle cx="70" cy="70" r="27" fill="#fafafa" stroke="#f4f4f5" stroke-width="1" />
      <circle cx="210" cy="70" r="27" fill="#fafafa" stroke="#f4f4f5" stroke-width="1" />
      <circle cx="350" cy="70" r="27" fill="#fafafa" stroke="#f4f4f5" stroke-width="1" />
      <circle cx="490" cy="70" r="27" fill="#fafafa" stroke="#f4f4f5" stroke-width="1" />

      <!-- Layer 5: Node icons -->
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

      <!-- Extract: database + check -->
      <g transform="translate(490, 70)">
        <ellipse cx="-2" cy="-5" rx="8" ry="3.5" fill="none" stroke="#3f3f46" stroke-width="1.8" />
        <path d="M -10,-5 L -10,5 C -10,8.5 6,8.5 6,5 L 6,-5" fill="none" stroke="#3f3f46" stroke-width="1.8" />
        <path d="M 5,-1 L 8,3 L 14,-5" fill="none" stroke="#f59e0b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
      </g>

      <!-- Layer 6: Feedback label -->
      <text
        x="280"
        y="-2"
        text-anchor="middle"
        fill="#a1a1aa"
        font-size="11"
        font-style="italic"
        font-family="system-ui, sans-serif"
      >
        {{ feedbackLabel }}
      </text>

      <!-- Layer 7: Node labels (TresJS-style small captions) -->
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
