<!--
===============================================================================
Component: TrustBar.vue

Purpose:
Displays the trusted companies section below the hero.

Props:
None

Slots:
None

Usage:

<TrustBar />

Notes:
- Uses AppContainer for consistent spacing.
- Uses SVG logos instead of text.
- Logos are monochrome and slightly muted by default.
- Hover subtly brightens the logos.
===============================================================================
-->

<script setup lang="ts">
import AppContainer from '@/components/ui/AppContainer.vue'

import acmeLogo from '@/assets/logos/acme.png'
import nexoraLogo from '@/assets/logos/nexora.png'
import veridianLogo from '@/assets/logos/veridian.png'
import globaltekLogo from '@/assets/logos/globaltek.png'
import pinnacleLogo from '@/assets/logos/pinnacle.png'

const companies = [
  {
    name: 'ACME',
    logo: acmeLogo,
  },
  {
    name: 'NEXORA',
    logo: nexoraLogo,
  },
  {
    name: 'VERIDIAN',
    logo: veridianLogo,
  },
  {
    name: 'GLOBALTEK',
    logo: globaltekLogo,
  },
  {
    name: 'PINNACLE',
    logo: pinnacleLogo,
  },
]
</script>

<template>
  <section class="pb-8 pt-12">
    <AppContainer>
      <div class="text-center lg:text-left">

        <p
          class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500"
        >
          Trusted by Innovative Companies
        </p>

        <div
          class="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 lg:justify-start"
        >
          <div
            v-for="company in companies"
            :key="company.name"
            class="flex w-30 h-20 justify-center"
          >
            <img
              :src="company.logo"
              :alt="company.name"
              class="
                h-full
                w-full
                object-contain
                opacity-50
                grayscale
                transition-all
                duration-300
                hover:opacity-100
                hover:grayscale-0
              "
            >
          </div>
        </div>

      </div>
    </AppContainer>
  </section>
</template>