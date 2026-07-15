<!--
===============================================================================
Component: FeatureSection.vue

Purpose:
Displays the primary feature highlights on the Meshiro homepage.

Props:
None

Slots:
None

Usage:

<FeatureSection />

Notes:
- Uses AppSection and AppContainer.
- Matches the original Meshiro homepage.
- Uses one shared bordered container.
- Desktop = 6 columns
- Tablet = 3 columns
- Mobile = 1 column
===============================================================================
-->

<script setup lang="ts">
import {
  ShieldCheck,
  Workflow,
  Lock,
  Bot,
  ChartColumn,
  Shield,
} from 'lucide-vue-next'

import AppContainer from '@/components/ui/AppContainer.vue'
import AppSection from '@/components/ui/AppSection.vue'

const features = [
  {
    title: 'Single Secure Connection',
    description: 'Connect ChatGPT once to MESHIRO. We handle the rest.',
    icon: ShieldCheck,
    color: 'text-red-500',
  },
  {
    title: 'Connect Everything',
    description: 'Integrate all your tools, apps, databases, and systems.',
    icon: Workflow,
    color: 'text-cyan-400',
  },
  {
    title: 'Control Access',
    description:
      'Granular permissions, roles, and policies for every department.',
    icon: Lock,
    color: 'text-violet-400',
  },
  {
    title: 'AI-Ready Tools',
    description:
      'Use pre-built or custom tools designed for how your business really works.',
    icon: Bot,
    color: 'text-orange-400',
  },
  {
    title: 'Monitor & Optimize',
    description:
      'Real-time insights, usage analytics, and audit logs keep you in control.',
    icon: ChartColumn,
    color: 'text-blue-400',
  },
  {
    title: 'Enterprise Grade',
    description:
      'Security, compliance, and reliability built for the modern enterprise.',
    icon: Shield,
    color: 'text-amber-400',
  },
]
</script>

<template>
  <AppSection size="sm">
    <AppContainer>

      <div class="overflow-hidden rounded-xl border border-zinc-800 bg-[#0d0d0d]">

        <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6">

          <div
            v-for="(feature, index) in features"
            :key="feature.title"
            class="group p-8 transition-colors duration-200 hover:bg-zinc-900 flex flex-col items-center justify-center text-center"

            :class="[
              // Mobile
              index !== features.length - 1 && 'border-b border-zinc-800',

              // Tablet
              index < 3 && 'md:border-b md:border-zinc-800',
              index % 3 !== 2 && 'md:border-r md:border-zinc-800',

              // Desktop
              'xl:border-b-0',
              'xl:border-r xl:border-zinc-800',
              index === features.length - 1 && 'xl:border-r-0',
            ]"
          >
            <!-- Icon -->

            <div
              :class="[
                'mb-5 flex h-11 w-11 items-center justify-center rounded-lg border',
                feature.color,
              ]"
            >
              <div
                class="flex h-5 w-5 items-center justify-center"
              >
                <component
                  :is="feature.icon"
                  class="h-5 w-5 stroke-[2]"
                />
              </div>
            </div>

            <!-- Title -->

            <h3
              class="mb-3 text-[15px] font-semibold text-white"
            >
              {{ feature.title }}
            </h3>

            <!-- Description -->

            <p
              class="text-xs leading-7 text-zinc-500"
            >
              {{ feature.description }}
            </p>

          </div>

        </div>

      </div>

    </AppContainer>
  </AppSection>
</template>