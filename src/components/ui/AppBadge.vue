<!--
===============================================================================
Component: AppBadge.vue

Purpose:
Reusable badge component used throughout the Meshiro website.

Props:
- dot (boolean)
  Displays a small status dot before the badge text.

Slots:
- default
  Badge label.

- leading
  Custom leading content. Overrides the default dot.

Usage:

<AppBadge>
  New
</AppBadge>

<AppBadge :dot="true">
  AI Integration Hub
</AppBadge>

<AppBadge>
  <template #leading>
    <Sparkles class="h-3 w-3 text-red-500" />
  </template>

  Featured
</AppBadge>

Notes:
- Automatically sizes to its content.
- Fully responsive.
- Use the `dot` prop for the standard Meshiro red status dot.
- Use the `leading` slot for custom icons or content.
===============================================================================
-->

<script setup lang="ts">
withDefaults(
  defineProps<{
    dot?: boolean
  }>(),
  {
    dot: false,
  },
)
</script>

<template>
  <div
    class="
      inline-flex
      max-w-full
      items-center
      justify-center
      gap-2

      rounded-full

      border
      border-white/10

      bg-zinc-900

      px-4
      py-2

      text-center

      text-[11px]
      font-semibold
      uppercase
      tracking-[0.18em]

      text-zinc-300

      sm:px-5
      sm:text-xs
    "
  >
    <!-- Custom Leading Slot -->

    <slot name="leading">
      <!-- Default Dot -->

      <span
        v-if="dot"
        class="h-2 w-2 shrink-0 rounded-full bg-red-500"
      />
    </slot>

    <!-- Badge Text -->

    <span
      class="
        whitespace-normal
        break-words
      "
    >
      <slot />
    </span>
  </div>
</template>