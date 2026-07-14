<!--
===============================================================================
Component: AppSection.vue

Purpose:
Provides consistent vertical spacing between major sections.

Props:
None

Slots:
- default
  The section content.

Usage:

<AppSection>
  <AppContainer>

    Content goes here

  </AppContainer>
</AppSection>

Notes:
Use for every major section such as Hero, Features, Pricing, FAQ, and CTA.
Avoid adding custom vertical padding unless necessary.
===============================================================================
-->

<template>
  <section>
    <slot />
  </section>
</template>