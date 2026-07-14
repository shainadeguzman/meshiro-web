<!--
===============================================================================
Component: AIModelsView.vue

Purpose:
Displays the AI Models marketing page for the Meshiro website.

Props:
None

Slots:
None

Usage:

<Route
  path="/product/ai-models"
  component="{AIModelsView}"
/>

Notes:
- Explains Meshiro's AI-agnostic architecture.
- Showcases supported AI assistants.
- Reuses existing marketing components.
- Mobile responsive.
===============================================================================
-->

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

import AppContainer from '@/components/ui/AppContainer.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppSectionHeading from '@/components/ui/AppSectionHeading.vue'

import {
  ArrowRight,
  Bot,
  Brain,
  Cpu,
  Sparkles,
} from 'lucide-vue-next'

const aiModels = [
  {
    name: 'ChatGPT',
    vendor: 'OpenAI',
    description:
      'Enterprise-grade conversational AI for productivity and business automation.',
    icon: Bot,
  },
  {
    name: 'Claude',
    vendor: 'Anthropic',
    description:
      'Safe and reliable AI assistant built for enterprise collaboration.',
    icon: Brain,
  },
  {
    name: 'Gemini',
    vendor: 'Google',
    description:
      'Google’s multimodal AI integrated across Workspace and Cloud.',
    icon: Sparkles,
  },
  {
    name: 'Microsoft Copilot',
    vendor: 'Microsoft',
    description:
      'AI built directly into Microsoft 365 and enterprise workflows.',
    icon: Cpu,
  },
  {
    name: 'Meta Llama',
    vendor: 'Meta',
    description:
      'Open-weight large language models for flexible enterprise deployments.',
    icon: Brain,
  },
  {
    name: 'Mistral',
    vendor: 'Mistral AI',
    description:
      'Fast and efficient open models optimized for business applications.',
    icon: Sparkles,
  },
]
</script>

<template>
  <AppHeader />

  <!-- ========================================================================= -->
  <!-- Hero -->
  <!-- ========================================================================= -->

  <section
    class="overflow-hidden border-b border-white/10 py-20 lg:py-28"
  >
    <AppContainer>

      <div
        class="grid items-center gap-16 lg:grid-cols-2"
      >

        <!-- Left -->

        <div>

          <AppSectionHeading
            title="Use Any AI Assistant."
            subtitle="Meshiro securely connects ChatGPT, Claude, Gemini, Microsoft Copilot and future AI assistants to your business systems through one secure AI Integration Hub."
          />

          <div
            class="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <AppButton
              to="/book-demo"
              :right-icon="ArrowRight"
            >
              Book a Demo
            </AppButton>

            <AppButton
              variant="secondary"
              to="/product/platform"
            >
              Explore Platform
            </AppButton>
          </div>

        </div>

        <!-- Right -->

        <div
          class="grid gap-4 sm:grid-cols-2"
        >

          <div
            v-for="model in aiModels"
            :key="model.name"
            class="rounded-2xl border border-white/10 bg-[#111317] p-6 transition-all duration-200 hover:border-red-500/30"
          >
            <component
              :is="model.icon"
              class="h-8 w-8 text-red-500"
            />

            <h3
              class="mt-5 text-lg font-semibold text-white"
            >
              {{ model.name }}
            </h3>

            <p
              class="mt-1 text-sm text-zinc-500"
            >
              {{ model.vendor }}
            </p>

            <p
              class="mt-4 text-sm leading-7 text-zinc-400"
            >
              {{ model.description }}
            </p>

          </div>

        </div>

      </div>

    </AppContainer>
  </section>

  <!-- ========================================================================= -->
  <!-- Supported AI Models -->
  <!-- ========================================================================= -->

  <section
    class="border-b border-white/10 py-24"
  >
    <AppContainer>

      <AppSectionHeading
        title="Supported AI Models"
        subtitle="Choose the AI assistant that best fits your organization. Meshiro keeps your integrations independent from the underlying AI provider."
        centered
      />

      <div
        class="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >

        <div
          v-for="model in aiModels"
          :key="`${model.name}-supported`"
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <component
            :is="model.icon"
            class="h-10 w-10 text-red-500"
          />

          <h3
            class="mt-6 text-xl font-semibold text-white"
          >
            {{ model.name }}
          </h3>

          <p
            class="mt-2 text-sm text-zinc-500"
          >
            {{ model.vendor }}
          </p>

          <span
            class="mt-6 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400"
          >
            Enterprise Ready
          </span>

          <p
            class="mt-5 text-sm leading-7 text-zinc-400"
          >
            {{ model.description }}
          </p>

        </div>

      </div>

    </AppContainer>
  </section>

   <!-- ========================================================================= -->
  <!-- Why AI Agnostic Matters -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">
    <AppContainer>

      <AppSectionHeading
        title="Why AI Agnostic Matters"
        subtitle="Meshiro separates your enterprise integrations from the AI model you choose, giving you complete flexibility today and in the future."
        centered
      />

      <div class="mt-16 grid gap-8 lg:grid-cols-2">

        <!-- Without Meshiro -->

        <div
          class="rounded-3xl border border-white/10 bg-[#111317] p-8"
        >

          <h3 class="text-2xl font-semibold text-white">
            Without Meshiro
          </h3>

          <p class="mt-3 text-zinc-400">
            Every AI assistant requires its own integrations,
            permissions and maintenance.
          </p>

          <div class="mt-10 space-y-5">

            <div class="flex items-center gap-4">
              <span class="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/10 text-red-500">✕</span>
              <span class="text-zinc-300">ChatGPT Integration</span>
            </div>

            <div class="flex items-center gap-4">
              <span class="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/10 text-red-500">✕</span>
              <span class="text-zinc-300">Claude Integration</span>
            </div>

            <div class="flex items-center gap-4">
              <span class="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/10 text-red-500">✕</span>
              <span class="text-zinc-300">Gemini Integration</span>
            </div>

            <div class="flex items-center gap-4">
              <span class="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/10 text-red-500">✕</span>
              <span class="text-zinc-300">Microsoft Copilot Integration</span>
            </div>

          </div>

          <div
            class="mt-10 rounded-2xl border border-red-500/20 bg-red-500/10 p-5"
          >
            <p class="text-sm leading-7 text-red-300">
              Every new AI provider means another project, another
              integration, additional maintenance and more security reviews.
            </p>
          </div>

        </div>

        <!-- With Meshiro -->

        <div
          class="rounded-3xl border border-red-500/20 bg-red-500/5 p-8"
        >

          <h3 class="text-2xl font-semibold text-white">
            With Meshiro
          </h3>

          <p class="mt-3 text-zinc-400">
            Connect once and securely use every AI assistant.
          </p>

          <div class="mt-12 flex flex-col items-center">

            <div
              class="rounded-xl border border-white/10 bg-[#111317] px-8 py-4"
            >
              <p class="font-medium text-white">
                Any AI Assistant
              </p>
            </div>

            <div class="my-5 h-10 w-px bg-white/10"></div>

            <div
              class="rounded-xl border border-red-500/30 bg-red-500/10 px-10 py-6 text-center"
            >
              <Brain class="mx-auto h-8 w-8 text-red-500" />

              <p class="mt-3 font-semibold text-white">
                Meshiro
              </p>

              <p class="mt-1 text-sm text-zinc-400">
                One Secure AI Integration Hub
              </p>
            </div>

            <div class="my-5 h-10 w-px bg-white/10"></div>

            <div
              class="rounded-xl border border-white/10 bg-[#111317] px-8 py-4"
            >
              <p class="font-medium text-white">
                Every Business System
              </p>
            </div>

          </div>

          <div
            class="mt-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5"
          >
            <p class="text-sm leading-7 text-emerald-300">
              Switch AI providers whenever you want without rebuilding
              your integrations.
            </p>
          </div>

        </div>

      </div>

    </AppContainer>
  </section>

  <!-- ========================================================================= -->
  <!-- Future-Proof Your AI Strategy -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">
    <AppContainer>

      <AppSectionHeading
        title="Future-Proof Your AI Strategy"
        subtitle="AI evolves quickly. Meshiro ensures your organization can adopt new models without disrupting existing business integrations."
        centered
      />

      <div class="mt-16 grid gap-6 lg:grid-cols-3">

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <Brain class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            Avoid Vendor Lock-In
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Replace one AI model with another without changing your
            enterprise integrations.
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <Cpu class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            Support Multiple Models
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Different departments can use different AI assistants
            while sharing the same secure platform.
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <Sparkles class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            Adopt New AI Instantly
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            As new AI assistants emerge, simply connect them to
            Meshiro without rebuilding your business workflows.
          </p>
        </div>

      </div>

    </AppContainer>
  </section>

    <!-- ========================================================================= -->
  <!-- Call To Action -->
  <!-- ========================================================================= -->

  <section class="py-24">
    <AppContainer>

      <div
        class="rounded-3xl border border-white/10 bg-[#111317] px-8 py-16 text-center lg:px-16"
      >

        <AppSectionHeading
          title="Ready to Connect Every AI Assistant?"
          subtitle="Whether your organization uses ChatGPT today or adopts the next generation of AI tomorrow, Meshiro keeps your integrations secure, centralized and future-proof."
          centered
        />

        <div
          class="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <AppButton
            to="/book-demo"
            :right-icon="ArrowRight"
          >
            Book a Demo
          </AppButton>

          <AppButton
            variant="secondary"
            to="/product/platform"
          >
            Explore Platform
          </AppButton>
        </div>

      </div>

    </AppContainer>
  </section>

  <AppFooter />
</template>