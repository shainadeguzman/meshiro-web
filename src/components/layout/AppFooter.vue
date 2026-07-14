<!--
===============================================================================
Component: AppFooter.vue

Purpose:
Displays the primary footer used throughout the Meshiro website.

Props:
None

Slots:
None

Usage:

<AppFooter />

Notes:
- Uses AppContainer for consistent spacing.
- Navigation links should match AppHeader.
- Footer is shared across all marketing pages.
===============================================================================
-->

<script setup lang="ts">
import { RouterLink } from 'vue-router'

import AppContainer from '../ui/AppContainer.vue'

const navigation = [
  {
    label: 'Product',
    to: '/product',
  },
  {
    label: 'Solutions',
    to: '/solutions',
  },
  {
    label: 'Pricing',
    to: '/pricing',
  },
  {
    label: 'Resources',
    to: '/resources',
  },
  {
    label: 'Company',
    to: '/company',
  },
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-white/10 bg-[#070707]">
    <AppContainer>
      <div class="py-12">

        <!-- Top -->

        <div
          class="flex flex-col items-center justify-between gap-8 lg:flex-row"
        >
          <!-- Logo -->

          <RouterLink to="/">
            <img
              src="@/assets/logo.png"
              alt="MESHIRO"
              class="h-14 w-auto"
            >
          </RouterLink>

          <!-- Navigation -->

          <nav>
            <ul
              class="flex flex-wrap justify-center gap-x-8 gap-y-4"
            >
              <li
                v-for="item in navigation"
                :key="item.label"
              >
                <RouterLink
                  :to="item.to"
                  class="text-sm text-gray-400 transition hover:text-white"
                >
                  {{ item.label }}
                </RouterLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Bottom -->

        <div
          class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center lg:flex-row lg:text-left"
        >
          <p class="text-sm text-gray-500">
            © {{ year }} MESHIRO. All rights reserved.
          </p>

          <div
            class="flex flex-wrap justify-center gap-6 text-sm"
          >
            <RouterLink
              to="/privacy"
              class="text-gray-500 transition hover:text-white"
            >
              Privacy
            </RouterLink>

            <RouterLink
              to="/terms"
              class="text-gray-500 transition hover:text-white"
            >
              Terms
            </RouterLink>

            <RouterLink
              to="/contact"
              class="text-gray-500 transition hover:text-white"
            >
              Contact
            </RouterLink>
          </div>
        </div>

      </div>
    </AppContainer>
  </footer>
</template>