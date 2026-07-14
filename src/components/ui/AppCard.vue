<!--
===============================================================================
Component: AppCard.vue

Purpose:
Reusable card component used throughout the Meshiro website. Provides a
consistent container for features, integrations, pricing plans, security
items, and other content.

Props:
- hover (boolean)
  Enables hover animations.

- padding (sm | md | lg)
  Controls the card's internal padding.

- bordered (boolean)
  Displays the default border.

Slots:
- default
  Main card content.

Usage:

<AppCard>
  <h3>Card Title</h3>
  <p>Card description.</p>
</AppCard>

<AppCard :hover="false">
  Static content
</AppCard>

<AppCard padding="lg">
  Large padded content
</AppCard>

Notes:
- Use AppCard for all content cards across the Meshiro website.
- Do not apply custom borders or backgrounds directly; use the provided props
  to keep the design consistent.
===============================================================================
-->

<script setup lang="ts">
import { computed } from 'vue'

type Padding = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    hover?: boolean
    padding?: Padding
    bordered?: boolean
  }>(),
  {
    hover: true,
    padding: 'md',
    bordered: true,
  },
)

const paddingClasses = computed(() => {
  switch (props.padding) {
    case 'sm':
      return 'p-4'

    case 'lg':
      return 'p-8'

    default:
      return 'p-6'
  }
})
</script>

<template>
  <div
    :class="[
      'rounded-2xl',
      'bg-zinc-900/80',
      'backdrop-blur-sm',
      bordered && 'border border-white/10',
      hover && [
        'transition-all',
        'duration-300',
        'hover:-translate-y-1',
        'hover:border-red-500/40',
        'hover:shadow-xl',
        'hover:shadow-red-600/10',
      ],
      paddingClasses,
    ]"
  >
    <slot />
  </div>
</template>