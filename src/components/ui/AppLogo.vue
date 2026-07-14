<!--
===============================================================================
Component: AppLogo.vue

Purpose:
Displays the Meshiro logo and wordmark.

Props:
None

Slots:
None

Usage:

<AppLogo />

Notes:
Currently uses a temporary SVG icon until the final Meshiro brand assets are
completed. Replacing the logo only requires updating this component.
===============================================================================
-->

<template>
  <RouterLink
    to="/"
    class="flex items-center gap-3"
  >
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
    >
      <circle
        cx="21"
        cy="21"
        r="20"
        fill="#E53935"
      />

      <path
        d="M13 24
           C13 16 29 16 29 24
           L26 29
           H16
           Z"
        fill="white"
      />

      <circle
        cx="18"
        cy="20"
        r="1.3"
        fill="#E53935"
      />

      <circle
        cx="24"
        cy="20"
        r="1.3"
        fill="#E53935"
      />
    </svg>

    <div class="leading-none">
      <h1 class="text-lg font-bold tracking-wider text-white">
        MESHIRO
      </h1>

      <p class="text-[10px] uppercase tracking-[0.35em] text-red-400">
        Mesh-Hero
      </p>
    </div>
  </RouterLink>
</template>