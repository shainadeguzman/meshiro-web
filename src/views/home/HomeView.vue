<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

import HeroSection from './components/HeroSection.vue'
import TrustBar from './components/TrustBar.vue'
import FeatureSection from './components/FeatureSection.vue'
import SecuritySection from '../marketing/components/SecuritySection.vue'
</script>

<template>
  <div class="min-h-screen bg-[#070707] text-white">

    <AppHeader />

    <main>
      <HeroSection />

      <TrustBar />

      <FeatureSection />

      <SecuritySection />
    </main>

    <AppFooter />

  </div>
</template>