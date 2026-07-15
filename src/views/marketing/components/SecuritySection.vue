<!--
===============================================================================
Component: SecuritySection.vue

Purpose:
Displays the enterprise benefits bar used across marketing pages.

Props:
None

Slots:
None

Usage:

<SecuritySection />

Notes:
- Reusable across Meshiro marketing pages.
- One continuous bordered container.
- Items are separated only by vertical divider lines.
- Mobile stacks into a single column.
===============================================================================
-->

<script setup lang="ts">
import {
  ShieldCheck,
  UserLock,
  Server,
  Cloud,
  Headset,
} from 'lucide-vue-next'

import AppContainer from '@/components/ui/AppContainer.vue'
import AppSection from '@/components/ui/AppSection.vue'

const benefits = [
  {
    title: 'Enterprise Security',
    subtitle: 'SOC 2 • ISO 27001 • SSO',
    icon: ShieldCheck,
  },
  {
    title: 'Granular Permissions',
    subtitle: 'Users • Roles • Departments',
    icon: UserLock,
  },
  {
    title: 'Global & Scalable',
    subtitle: 'Built for high availability',
    icon: Server,
  },
  {
    title: '100+ Pre-built Connectors',
    subtitle: 'And growing every day',
    icon: Cloud,
  },
  {
    title: '24/7 Support',
    subtitle: "We're here when you need us",
    icon: Headset,
  },
]
</script>

<template>
  <AppSection class="py-6">
    <AppContainer>
      <div
        class="overflow-hidden rounded-xl border border-zinc-800 bg-[#0d0d0d]"
      >
        <div
          class="grid grid-cols-1 lg:grid-cols-5"
        >
          <div
            v-for="(benefit, index) in benefits"
            :key="benefit.title"
            class="flex items-center justify-center px-6 py-5"

            :class="[
              // Mobile
              index !== benefits.length - 1 &&
                'border-b border-zinc-800',

              // Desktop
              'lg:border-b-0',

              index !== benefits.length - 1 &&
                'lg:border-r lg:border-zinc-800',
            ]"
          >
            <!-- Icon -->

            <div
              class="mr-4 flex h-10 w-10 shrink-0 items-center justify-center"
            >
              <component
                :is="benefit.icon"
                class="h-10 w-10 text-zinc-300"
                :stroke-width="2"
              />
            </div>

            <!-- Text -->

            <div class="min-w-0">
              <h3
                class="text-sm font-semibold leading-tight text-white"
              >
                {{ benefit.title }}
              </h3>

              <p
                class="mt-1 text-xs leading-tight text-zinc-500"
              >
                {{ benefit.subtitle }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </AppSection>
</template>