<!--
===============================================================================
Component: AppContainer.vue

Purpose:
Provides a consistent maximum width and horizontal padding for page content.

Props:
None

Slots:
- default
  The content to render inside the container.

Usage:

<AppContainer>
  <h1>Welcome to Meshiro</h1>
</AppContainer>

Notes:
Use this component inside AppSection to maintain consistent spacing across
the entire website.
===============================================================================
-->

<template>
  <div class="mx-auto w-full max-w-7xl px-6 lg:px-8">
    <slot />
  </div>
</template>