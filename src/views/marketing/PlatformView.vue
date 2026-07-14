<!--
===============================================================================
Component: PlatformView.vue

Purpose:
Displays the Meshiro platform overview page.

Props:
None

Slots:
None

Usage:

<Route
  path="/platform"
  component="{PlatformView}"
/>

Notes:
- Marketing page describing how Meshiro works.
- Reuses existing marketing components.
===============================================================================
-->

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

import AppContainer from '@/components/ui/AppContainer.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppSectionHeading from '@/components/ui/AppSectionHeading.vue'

import SecuritySection from '@/components/home/SecuritySection.vue'

import {
  ArrowDown,
  ArrowRight,
  Bot,
  ShieldCheck,
  BriefcaseBusiness,
  Plug2,
  Building2,
} from 'lucide-vue-next'
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
            title="One Connection. Every Tool. AI That Works."
            subtitle="Connect ChatGPT, Claude, Gemini, Copilot, and every future AI assistant to your business through one secure AI Integration Hub."
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
              to="/contact"
            >
              Contact Sales
            </AppButton>
          </div>

        </div>

        <!-- Right -->

        <div
          class="flex justify-center"
        >
          <img
            src="@/assets/hero.png"
            alt="Meshiro Platform"
            class="w-full max-w-lg"
          >
        </div>

      </div>

    </AppContainer>
  </section>

  <!-- ========================================================================= -->
  <!-- How It Works -->
  <!-- ========================================================================= -->

  <section class="py-24">

    <AppContainer>

      <AppSectionHeading
  title="How Meshiro Works"
  subtitle="Employees continue using their favorite AI assistant. Meshiro securely orchestrates permissions, business tools, and connectors behind the scenes."
  centered
/>

<div class="mt-16">

  <div
    class="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-0"
  >

    <!-- ChatGPT -->

    <div
      class="flex w-52 flex-col items-center rounded-2xl border border-white/10 bg-[#111317] p-6 text-center"
    >
      <Bot class="mb-4 h-10 w-10 text-red-500" />

      <h3 class="font-semibold text-white">
        AI Assistant
      </h3>

      <p class="mt-2 text-sm text-zinc-400">
        ChatGPT, Claude,
        Gemini or Copilot
      </p>
    </div>

    <ArrowRight
      class="hidden h-6 w-6 text-zinc-600 lg:block"
    />

    <ArrowDown
      class="h-6 w-6 text-zinc-600 lg:hidden"
    />

    <!-- Meshiro -->

    <div
      class="flex w-52 flex-col items-center rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-center"
    >
      <ShieldCheck class="mb-4 h-10 w-10 text-red-500" />

      <h3 class="font-semibold text-white">
        Meshiro
      </h3>

      <p class="mt-2 text-sm text-zinc-400">
        AI Integration Hub
      </p>
    </div>

    <ArrowRight
      class="hidden h-6 w-6 text-zinc-600 lg:block"
    />

    <ArrowDown
      class="h-6 w-6 text-zinc-600 lg:hidden"
    />

    <!-- Business Tools -->

    <div
      class="flex w-52 flex-col items-center rounded-2xl border border-white/10 bg-[#111317] p-6 text-center"
    >
      <BriefcaseBusiness
        class="mb-4 h-10 w-10 text-red-500"
      />

      <h3 class="font-semibold text-white">
        Business Tools
      </h3>

      <p class="mt-2 text-sm text-zinc-400">
        Customer Lookup,
        Invoice Search,
        Employee Directory
      </p>
    </div>

    <ArrowRight
      class="hidden h-6 w-6 text-zinc-600 lg:block"
    />

    <ArrowDown
      class="h-6 w-6 text-zinc-600 lg:hidden"
    />

    <!-- Connectors -->

    <div
      class="flex w-52 flex-col items-center rounded-2xl border border-white/10 bg-[#111317] p-6 text-center"
    >
      <Plug2 class="mb-4 h-10 w-10 text-red-500" />

      <h3 class="font-semibold text-white">
        Connectors
      </h3>

      <p class="mt-2 text-sm text-zinc-400">
        HubSpot, Microsoft,
        Google, Slack
      </p>
    </div>

    <ArrowRight
      class="hidden h-6 w-6 text-zinc-600 lg:block"
    />

    <ArrowDown
      class="h-6 w-6 text-zinc-600 lg:hidden"
    />

    <!-- Business Systems -->

    <div
      class="flex w-52 flex-col items-center rounded-2xl border border-white/10 bg-[#111317] p-6 text-center"
    >
      <Building2
        class="mb-4 h-10 w-10 text-red-500"
      />

      <h3 class="font-semibold text-white">
        Business Systems
      </h3>

      <p class="mt-2 text-sm text-zinc-400">
        CRM, ERP,
        HRIS, Finance,
        Databases
      </p>
    </div>

  </div>

  <div
    class="mx-auto mt-16 max-w-4xl rounded-2xl border border-white/10 bg-[#111317] p-8"
  >
    <p class="text-center text-lg leading-8 text-zinc-300">
      Employees continue using their favorite AI assistant. Meshiro securely
      determines which business tools, connectors, credentials, and permissions
      to use behind the scenes—without exposing APIs or requiring users to think
      about integrations.
    </p>
  </div>

</div>

    </AppContainer>

  </section>

  <!-- ========================================================================= -->
<!-- Business Tools Overview -->
<!-- ========================================================================= -->

<section class="border-t border-white/10 py-24">
  <AppContainer>

    <AppSectionHeading
      title="Business Tools Instead of APIs"
      subtitle="Meshiro exposes business capabilities instead of technical APIs, allowing employees to ask AI naturally while Meshiro handles the complexity behind the scenes."
      centered
    />

    <div class="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      <div
        v-for="tool in [
          {
            title: 'Customer Lookup',
            description: 'Retrieve customer information from multiple connected systems.',
          },
          {
            title: 'Outstanding Receivables',
            description: 'View unpaid invoices and customer balances instantly.',
          },
          {
            title: 'Employee Directory',
            description: 'Search employees across HR and identity providers.',
          },
          {
            title: 'Invoice Search',
            description: 'Find invoices without knowing which ERP stores them.',
          },
          {
            title: 'Leave Balance',
            description: 'Check available leave directly through AI.',
          },
          {
            title: 'Contract Search',
            description: 'Locate contracts across connected repositories.',
          },
        ]"
        :key="tool.title"
        class="rounded-2xl border border-white/10 bg-[#111317] p-6 transition hover:border-red-500/30"
      >
        <BriefcaseBusiness
          class="mb-5 h-8 w-8 text-red-500"
        />

        <h3 class="text-lg font-semibold text-white">
          {{ tool.title }}
        </h3>

        <p class="mt-3 text-sm leading-7 text-zinc-400">
          {{ tool.description }}
        </p>
      </div>

    </div>

    <div class="mt-12 text-center">
      <AppButton
        variant="secondary"
        to="/product/business-tools"
      >
        Learn More About Business Tools
      </AppButton>
    </div>

  </AppContainer>
</section>

<!-- ========================================================================= -->
<!-- Connectors Overview -->
<!-- ========================================================================= -->

<section class="border-t border-white/10 py-24">
  <AppContainer>

    <AppSectionHeading
      title="Connect Every Business System"
      subtitle="Meshiro includes secure connectors that communicate with your existing applications so employees never have to think about integrations."
      centered
    />

    <div class="mt-16 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

      <div
        v-for="connector in [
          'HubSpot',
          'Salesforce',
          'Microsoft 365',
          'Google Workspace',
          'Slack',
          'GitHub',
          'Jira',
          'QuickBooks',
          'SAP',
          'MySQL',
          'PostgreSQL',
          'REST APIs',
        ]"
        :key="connector"
        class="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111317] p-5 transition hover:border-red-500/30"
      >
        <Plug2
          class="h-6 w-6 shrink-0 text-red-500"
        />

        <span
          class="font-medium text-white"
        >
          {{ connector }}
        </span>
      </div>

    </div>

    <div class="mt-12 text-center">
      <AppButton
        variant="secondary"
        to="/product/connectors"
      >
        Explore Connectors
      </AppButton>
    </div>

  </AppContainer>
</section>

  <!-- ========================================================================= -->
  <!-- Security -->
  <!-- ========================================================================= -->

  <SecuritySection />

  <!-- ========================================================================= -->
  <!-- CTA -->
  <!-- ========================================================================= -->

  <!-- ========================================================================= -->
<!-- Call to Action -->
<!-- ========================================================================= -->

<section class="border-t border-white/10 py-24">
  <AppContainer>

    <div
      class="rounded-3xl border border-white/10 bg-[#111317] px-8 py-16 text-center lg:px-16"
    >
      <AppSectionHeading
        title="Ready to Connect AI to Your Business?"
        subtitle="See how Meshiro securely connects ChatGPT, Claude, Gemini, Copilot, and your enterprise systems through one AI Integration Hub."
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
          to="/pricing"
        >
          View Pricing
        </AppButton>
      </div>
    </div>

  </AppContainer>
</section>

  <AppFooter />

</template>