<!--
===============================================================================
Component: HeroSection.vue

Purpose:
Displays the main hero section of the Meshiro homepage.

Props:
None

Slots:
None

Usage:

<HeroSection />

Notes:
- Uses AppSection and AppContainer.
- Fully responsive.
- Desktop matches the original HTML.
- Mobile stacks content above the hero artwork.
===============================================================================
-->

<script setup lang="ts">
import { ArrowRight, PlayCircle } from 'lucide-vue-next'

import AppSection from '@/components/ui/AppSection.vue'
import AppContainer from '@/components/ui/AppContainer.vue'
import AppBadge from '@/components/ui/AppBadge.vue'
import AppButton from '@/components/ui/AppButton.vue'
</script>

<template>
  <AppSection
    size="xl"
    class="overflow-x-hidden pt-10 lg:pt-16"
  >
    <AppContainer>

      <div
        class="grid items-center gap-16 lg:grid-cols-2"
      >

        <!-- ==========================================================
             LEFT
        =========================================================== -->

        <div>

          <!-- Badge -->

          <AppBadge
            dot
            class="mb-8"
          >
            AI Integration Hub for Modern Businesses
          </AppBadge>

          <!-- Heading -->

          <h1
            class="
              text-4xl
              font-black
              leading-tight
              tracking-tight
              text-white

              sm:text-5xl

              lg:text-6xl

              xl:text-7xl
			  whitespace-nowrap
            "
          >
            One Connection.

            <br>

            All Your Tools.

            <br>

            <span class="text-red-500">
              AI
            </span>

            That Works.
          </h1>

          <!-- Description -->

          <p
            class="
              mt-8
              max-w-xl
              text-base
              leading-8
              text-zinc-400

              sm:text-lg
            "
          >
            MESHIRO is your secure AI Integration Hub.

            Connect ChatGPT to your company tools,

            organize permissions,

            manage users,

            and unlock the power of your business data safely and intelligently.
          </p>

          <!-- Buttons -->

          <div
            class="
              mt-10
              flex
              flex-col
              gap-4

              sm:flex-row
            "
          >
            <AppButton
              :right-icon="ArrowRight"
              :to="'/book-demo'"
            >
              Book a Demo
            </AppButton>

            <AppButton
              variant="secondary"
              :to="'/platform'"
              :right-icon="PlayCircle"
            >
              Explore Platform
            </AppButton>
          </div>

        </div>

        <!-- ==========================================================
             RIGHT
        =========================================================== -->

        <div
          class="
            flex
            justify-center

            lg:justify-end
          "
        >
          <img
            src="@/assets/hero.png"
            alt="Meshiro Platform"

            class="
              w-full
              max-w-md

              sm:max-w-xl

              lg:max-w-3xl

              xl:max-w-6xl
            "
          >
        </div>

      </div>

    </AppContainer>
  </AppSection>
</template>