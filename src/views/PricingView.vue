<!--
===============================================================================
Component: PricingView.vue

Purpose:
Displays the pricing page for the Meshiro marketing website.

Props:
None

Slots:
None

Usage:

<Route
  path="/pricing"
  component="{PricingView}"
/>

Notes:
- Enterprise-focused pricing page.
- Uses package tiers instead of fixed pricing.
- Encourages visitors to book a demo.
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
  Check,
} from 'lucide-vue-next'

const plans = [
  {
    name: 'Pilot',
    badge: 'Ideal for AI Pilots',
    description:
      'Perfect for organizations evaluating AI with a single department or initial business use case.',
    features: [
      'Core Platform',
      'Limited Connectors',
      'Standard Support',
      'Business Tools',
      'Basic Audit Logs',
    ],
  },
  {
    name: 'Growth',
    badge: 'Most Popular',
    featured: true,
    description:
      'Expand AI across multiple departments with governance, automation and additional integrations.',
    features: [
      'Everything in Pilot',
      'Unlimited Business Tools',
      'More Connectors',
      'RBAC',
      'AI Agents',
      'Workflows',
      'Marketplace Access',
    ],
  },
  {
    name: 'Enterprise',
    badge: 'Custom Deployment',
    description:
      'Designed for enterprise-wide deployments requiring advanced security, compliance and dedicated support.',
    features: [
      'Unlimited Users',
      'Unlimited Connectors',
      'SSO',
      'Custom Integrations',
      'Premium Support',
      'Dedicated Success Manager',
      'Enterprise SLA',
    ],
  },
]
</script>

<template>
  <AppHeader />

  <!-- ========================================================================= -->
  <!-- Hero -->
  <!-- ========================================================================= -->

  <section
    class="border-b border-white/10 py-20 lg:py-28"
  >
    <AppContainer>

      <div class="mx-auto max-w-4xl text-center">

        <AppSectionHeading
          title="Simple, Transparent Enterprise Pricing"
          subtitle="Whether you're connecting one AI assistant or deploying AI across your organization, Meshiro scales with your business."
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
            to="/contact"
          >
            Contact Sales
          </AppButton>
        </div>

      </div>

    </AppContainer>
  </section>

  <!-- ========================================================================= -->
  <!-- Pricing Philosophy -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">

    <AppContainer>

      <AppSectionHeading
        title="Pricing Built Around Your Organization"
        subtitle="Every deployment is different. Rather than forcing predefined pricing, we tailor each plan to your business requirements."
        centered
      />

      <div
        class="mx-auto mt-16 max-w-4xl rounded-3xl border border-white/10 bg-[#111317] p-10"
      >

        <ul
          class="grid gap-6 text-lg text-zinc-300 md:grid-cols-2"
        >
          <li>• Number of users</li>

          <li>• Business tools required</li>

          <li>• Connectors & integrations</li>

          <li>• AI assistants & models</li>

          <li>• Security & compliance needs</li>

          <li>• Deployment & onboarding</li>

        </ul>

        <p
          class="mt-10 text-center leading-8 text-zinc-400"
        >
          Our team will work with you to recommend the right package and
          deployment strategy for your organization.
        </p>

      </div>

    </AppContainer>

  </section>

  <!-- ========================================================================= -->
  <!-- Plans -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">

    <AppContainer>

      <AppSectionHeading
        title="Choose the Right Deployment"
        subtitle="Start with a pilot or roll out AI across your entire enterprise."
        centered
      />

      <div
        class="mt-16 grid gap-8 lg:grid-cols-3"
      >

        <div
          v-for="plan in plans"
          :key="plan.name"
          class="rounded-3xl border p-8 transition-all duration-200"
          :class="plan.featured
            ? 'border-red-500 bg-red-500/5'
            : 'border-white/10 bg-[#111317]'"
        >

          <div
            class="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-red-400"
          >
            {{ plan.badge }}
          </div>

          <h3
            class="mt-6 text-3xl font-bold text-white"
          >
            {{ plan.name }}
          </h3>

          <p
            class="mt-4 leading-7 text-zinc-400"
          >
            {{ plan.description }}
          </p>

          <ul
            class="mt-8 space-y-4"
          >
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-center gap-3 text-zinc-300"
            >
              <Check class="h-5 w-5 text-red-500" />

              {{ feature }}
            </li>
          </ul>

          <AppButton
            class="mt-10 w-full"
            to="/book-demo"
          >
            Contact Sales
          </AppButton>

        </div>

      </div>

    </AppContainer>

  </section>

    <!-- ========================================================================= -->
  <!-- Feature Comparison -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">
    <AppContainer>

      <AppSectionHeading
        title="Compare Plans"
        subtitle="Every plan includes the core Meshiro platform. Higher tiers unlock additional enterprise capabilities."
        centered
      />

      <div class="mt-16 overflow-x-auto">

        <table
          class="min-w-full overflow-hidden rounded-3xl border border-white/10 bg-[#111317]"
        >

          <thead>

            <tr class="border-b border-white/10">

              <th
                class="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wide text-zinc-400"
              >
                Feature
              </th>

              <th
                class="px-6 py-5 text-center text-sm font-semibold text-white"
              >
                Pilot
              </th>

              <th
                class="bg-red-500/5 px-6 py-5 text-center text-sm font-semibold text-white"
              >
                Growth
              </th>

              <th
                class="px-6 py-5 text-center text-sm font-semibold text-white"
              >
                Enterprise
              </th>

            </tr>

          </thead>

          <tbody class="divide-y divide-white/10">

            <tr>
              <td class="px-6 py-4 text-zinc-300">Users</td>
              <td class="text-center text-zinc-300">✓</td>
              <td class="bg-red-500/5 text-center text-zinc-300">✓</td>
              <td class="text-center text-zinc-300">Unlimited</td>
            </tr>

            <tr>
              <td class="px-6 py-4 text-zinc-300">AI Models</td>
              <td class="text-center text-zinc-300">✓</td>
              <td class="bg-red-500/5 text-center text-zinc-300">✓</td>
              <td class="text-center text-zinc-300">✓</td>
            </tr>

            <tr>
              <td class="px-6 py-4 text-zinc-300">Connectors</td>
              <td class="text-center text-zinc-300">Limited</td>
              <td class="bg-red-500/5 text-center text-zinc-300">
                Expanded
              </td>
              <td class="text-center text-zinc-300">Unlimited</td>
            </tr>

            <tr>
              <td class="px-6 py-4 text-zinc-300">Business Tools</td>
              <td class="text-center text-zinc-300">✓</td>
              <td class="bg-red-500/5 text-center text-zinc-300">✓</td>
              <td class="text-center text-zinc-300">✓</td>
            </tr>

            <tr>
              <td class="px-6 py-4 text-zinc-300">AI Agents</td>
              <td class="text-center text-zinc-500">—</td>
              <td class="bg-red-500/5 text-center text-zinc-300">✓</td>
              <td class="text-center text-zinc-300">✓</td>
            </tr>

            <tr>
              <td class="px-6 py-4 text-zinc-300">Workflows</td>
              <td class="text-center text-zinc-500">—</td>
              <td class="bg-red-500/5 text-center text-zinc-300">✓</td>
              <td class="text-center text-zinc-300">✓</td>
            </tr>

            <tr>
              <td class="px-6 py-4 text-zinc-300">Marketplace</td>
              <td class="text-center text-zinc-300">✓</td>
              <td class="bg-red-500/5 text-center text-zinc-300">✓</td>
              <td class="text-center text-zinc-300">✓</td>
            </tr>

            <tr>
              <td class="px-6 py-4 text-zinc-300">Role-Based Access Control</td>
              <td class="text-center text-zinc-300">✓</td>
              <td class="bg-red-500/5 text-center text-zinc-300">✓</td>
              <td class="text-center text-zinc-300">✓</td>
            </tr>

            <tr>
              <td class="px-6 py-4 text-zinc-300">Audit Logs</td>
              <td class="text-center text-zinc-300">✓</td>
              <td class="bg-red-500/5 text-center text-zinc-300">✓</td>
              <td class="text-center text-zinc-300">✓</td>
            </tr>

            <tr>
              <td class="px-6 py-4 text-zinc-300">Single Sign-On (SSO)</td>
              <td class="text-center text-zinc-500">—</td>
              <td class="bg-red-500/5 text-center text-zinc-500">—</td>
              <td class="text-center text-zinc-300">✓</td>
            </tr>

            <tr>
              <td class="px-6 py-4 text-zinc-300">Premium Support</td>
              <td class="text-center text-zinc-500">—</td>
              <td class="bg-red-500/5 text-center text-zinc-300">✓</td>
              <td class="text-center text-zinc-300">✓</td>
            </tr>

            <tr>
              <td class="px-6 py-4 text-zinc-300">Enterprise SLA</td>
              <td class="text-center text-zinc-500">—</td>
              <td class="bg-red-500/5 text-center text-zinc-500">—</td>
              <td class="text-center text-zinc-300">✓</td>
            </tr>

          </tbody>

        </table>

      </div>

    </AppContainer>
  </section>

  <!-- ========================================================================= -->
  <!-- Frequently Asked Questions -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">

    <AppContainer>

      <AppSectionHeading
        title="Frequently Asked Questions"
        subtitle="Answers to some of the most common questions about Meshiro pricing and deployment."
        centered
      />

      <div class="mx-auto mt-16 max-w-4xl space-y-6">

        <div class="rounded-2xl border border-white/10 bg-[#111317] p-8">
          <h3 class="text-lg font-semibold text-white">
            Why doesn't Meshiro publish fixed pricing?
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Every organization has unique integration, security and deployment
            requirements. We tailor each proposal to your environment rather
            than forcing predefined plans.
          </p>
        </div>

        <div class="rounded-2xl border border-white/10 bg-[#111317] p-8">
          <h3 class="text-lg font-semibold text-white">
            Can we start with a pilot?
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Absolutely. Many organizations begin with a single department or
            business use case before expanding across the enterprise.
          </p>
        </div>

        <div class="rounded-2xl border border-white/10 bg-[#111317] p-8">
          <h3 class="text-lg font-semibold text-white">
            Which AI assistants are supported?
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Meshiro is designed to work with ChatGPT, Claude, Gemini, Copilot
            and future AI assistants through one centralized integration layer.
          </p>
        </div>

        <div class="rounded-2xl border border-white/10 bg-[#111317] p-8">
          <h3 class="text-lg font-semibold text-white">
            Can you integrate with our existing systems?
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Yes. Meshiro supports popular enterprise applications, databases,
            APIs and custom connectors.
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
          title="Ready to Connect AI to Your Business?"
          subtitle="Whether you're evaluating AI for a single team or planning an enterprise-wide deployment, we'd love to learn about your goals and recommend the right solution."
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
            to="/contact"
          >
            Contact Sales
          </AppButton>
        </div>

      </div>

    </AppContainer>
  </section>

  <AppFooter />
</template>