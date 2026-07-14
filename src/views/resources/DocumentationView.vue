<!--
===============================================================================
Component: DocumentationView.vue

Purpose:
Displays the Documentation page for the Meshiro marketing website.

Props:
None

Slots:
None

Usage:

<Route
  path="/resources/documentation"
  component="{DocumentationView}"
/>

Notes:
- Introduces Meshiro documentation.
- Organizes documentation into logical categories.
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
  BookOpen,
  Rocket,
  LayoutDashboard,
  BriefcaseBusiness,
  Plug2,
  ShieldCheck,
  Code2,
} from 'lucide-vue-next'

const categories = [
  {
    title: 'Getting Started',
    icon: Rocket,
    items: [
      'Installation',
      'Create Organization',
      'Invite Users',
    ],
  },
  {
    title: 'Platform',
    icon: LayoutDashboard,
    items: [
      'Dashboard',
      'Organizations',
      'Departments',
      'Roles & Permissions',
    ],
  },
  {
    title: 'Business Tools',
    icon: BriefcaseBusiness,
    items: [
      'Create Business Tools',
      'Tool Permissions',
      'AI Capabilities',
    ],
  },
  {
    title: 'Connectors',
    icon: Plug2,
    items: [
      'HubSpot',
      'Microsoft 365',
      'Google Workspace',
      'REST APIs',
    ],
  },
  {
    title: 'Security',
    icon: ShieldCheck,
    items: [
      'RBAC',
      'Audit Logs',
      'Credential Storage',
      'Encryption',
    ],
  },
  {
    title: 'Developer',
    icon: Code2,
    items: [
      'REST API',
      'Authentication',
      'Webhooks',
      'SDK',
    ],
  },
]

const guides = [
  'Connect ChatGPT to Meshiro',
  'Create Your First Business Tool',
  'Add Your First Connector',
  'Configure AI Permissions',
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
          title="Documentation"
          subtitle="Everything you need to deploy, configure and manage Meshiro across your organization."
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
            Contact Support
          </AppButton>
        </div>

      </div>

    </AppContainer>
  </section>

  <!-- ========================================================================= -->
  <!-- Documentation Categories -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">

    <AppContainer>

      <AppSectionHeading
        title="Browse Documentation"
        subtitle="Explore guides, tutorials and reference materials organized by topic."
        centered
      />

      <div
        class="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >

        <div
          v-for="category in categories"
          :key="category.title"
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >

          <component
            :is="category.icon"
            class="h-10 w-10 text-red-500"
          />

          <h3
            class="mt-6 text-xl font-semibold text-white"
          >
            {{ category.title }}
          </h3>

          <ul
            class="mt-6 space-y-3"
          >
            <li
              v-for="item in category.items"
              :key="item"
              class="text-zinc-400"
            >
              • {{ item }}
            </li>
          </ul>

        </div>

      </div>

    </AppContainer>

  </section>

    <!-- ========================================================================= -->
  <!-- Popular Guides -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">

    <AppContainer>

      <AppSectionHeading
        title="Popular Guides"
        subtitle="Start with the most frequently accessed documentation to get up and running quickly."
        centered
      />

      <div
        class="mt-16 grid gap-6 lg:grid-cols-2"
      >

        <div
          v-for="guide in guides"
          :key="guide"
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >

          <BookOpen
            class="h-10 w-10 text-red-500"
          />

          <h3
            class="mt-6 text-xl font-semibold text-white"
          >
            {{ guide }}
          </h3>

          <p
            class="mt-4 leading-7 text-zinc-400"
          >
            Step-by-step documentation designed to help your team deploy and
            configure Meshiro quickly using enterprise best practices.
          </p>

        </div>

      </div>

    </AppContainer>

  </section>

  <!-- ========================================================================= -->
  <!-- Documentation Philosophy -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">

    <AppContainer>

      <AppSectionHeading
        title="Documentation Built Around Business Capabilities"
        subtitle="Meshiro documentation focuses on what your organization wants to accomplish—not low-level APIs."
        centered
      />

      <div
        class="mx-auto mt-16 max-w-4xl rounded-3xl border border-white/10 bg-[#111317] p-10"
      >

        <p
          class="text-lg leading-8 text-zinc-300"
        >
          Instead of requiring teams to understand connectors, APIs or
          authentication flows, Meshiro organizes documentation around
          business capabilities such as Customer Lookup, Employee Directory,
          Invoice Search and Knowledge Search.
        </p>

        <p
          class="mt-6 text-lg leading-8 text-zinc-300"
        >
          Whether you're an administrator deploying the platform or a developer
          extending it with custom integrations, our documentation provides
          practical guidance with enterprise security and governance in mind.
        </p>

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
          title="Need More Help?"
          subtitle="Our team is here to help you deploy Meshiro successfully and answer any technical or implementation questions."
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
            Contact Support
          </AppButton>
        </div>

      </div>

    </AppContainer>

  </section>

  <AppFooter />
</template>