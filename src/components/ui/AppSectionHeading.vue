<!--
===============================================================================
Component: AppSectionHeading.vue

Purpose:
Displays a consistent section title and optional subtitle.

Props:
- title (string)
  Main heading text.

- subtitle (string, optional)
  Supporting text displayed below the title.

- centered (boolean, optional)
  Centers the heading and subtitle.

Usage:

- Centered -
<AppSectionHeading
  title="Everything Your AI Needs"
  subtitle="One secure platform for enterprise AI."
  centered
/>

- Left aligned -
<AppSectionHeading
  title="Enterprise Security"
  subtitle="Built for modern organizations."
/>

Notes:
Use this component for all section headings to keep typography consistent
across the website.
===============================================================================
-->

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    centered?: boolean
  }>(),
  {
    centered: false,
  },
)
</script>

<template>
  <div :class="{ 'text-center': centered }">
    <h2 class="text-4xl font-bold tracking-tight text-white lg:text-5xl">
      {{ title }}
    </h2>

    <p
      v-if="subtitle"
      class="mt-5 max-w-2xl text-lg text-gray-400"
      :class="{ 'mx-auto': centered }"
    >
      {{ subtitle }}
    </p>
  </div>
</template>