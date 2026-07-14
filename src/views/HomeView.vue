<script setup lang="ts">
import AppHeader from '../components/layout/AppHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'

import HeroSection from '../components/home/HeroSection.vue'
import TrustBar from '../components/home/TrustBar.vue'
import FeatureSection from '../components/home/FeatureSection.vue'
import SecuritySection from '../components/home/SecuritySection.vue'
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

    <!-- <AppFooter /> -->

  </div>
</template>