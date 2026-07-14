<!--
===============================================================================
Component: ITView.vue

Purpose:
Displays the IT Solutions page for the Meshiro marketing website.

Props:
None

Slots:
None

Usage:

<Route
  path="/solutions/it"
  component="{ITView}"
/>

Notes:
- Explains how Meshiro empowers enterprise IT teams.
- Focuses on governance, security and centralized management.
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
  ShieldCheck,
  Network,
  Users,
  Workflow,
  Settings2,
  ServerCog,
  LockKeyhole,
} from 'lucide-vue-next'

const managementItems = [
  {
    title: 'Users',
    icon: Users,
  },
  {
    title: 'Roles',
    icon: ShieldCheck,
  },
  {
    title: 'Departments',
    icon: Network,
  },
  {
    title: 'Permissions',
    icon: LockKeyhole,
  },
  {
    title: 'Business Tools',
    icon: Workflow,
  },
  {
    title: 'Connectors',
    icon: ServerCog,
  },
  {
    title: 'AI Models',
    icon: Settings2,
  },
  {
    title: 'Audit Logs',
    icon: ShieldCheck,
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
        class="mx-auto max-w-4xl text-center"
      >

        <AppSectionHeading
          title="Empower IT Without Slowing Innovation"
          subtitle="Give employees the freedom to use AI while IT maintains complete control over security, permissions, integrations and governance—all from one centralized platform."
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

  <!-- ========================================================================= -->
  <!-- Why IT Teams Choose Meshiro -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">
    <AppContainer>

      <AppSectionHeading
        title="Why IT Teams Choose Meshiro"
        subtitle="Provide employees with AI access while maintaining enterprise-grade governance, security and operational control."
        centered
      />

      <div class="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <Settings2 class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-lg font-semibold text-white">
            Centralized AI Management
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Manage AI assistants, business tools, connectors and permissions
            from one secure platform.
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <Workflow class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-lg font-semibold text-white">
            Reduce Shadow IT
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Give employees approved AI capabilities instead of unmanaged
            integrations and unofficial automation.
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <LockKeyhole class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-lg font-semibold text-white">
            Secure Integrations
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Protect enterprise credentials while securely connecting internal
            systems to AI assistants.
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <ServerCog class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-lg font-semibold text-white">
            Future-Proof Architecture
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Support today's AI models and tomorrow's innovations without
            rebuilding your integrations.
          </p>
        </div>

      </div>

    </AppContainer>
  </section>

    <!-- ========================================================================= -->
  <!-- What IT Can Manage -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">
    <AppContainer>

      <AppSectionHeading
        title="Everything IT Can Manage"
        subtitle="Manage your entire enterprise AI ecosystem from one centralized platform."
        centered
      />

      <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        <div
          v-for="item in managementItems"
          :key="item.title"
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 text-center transition-all duration-200 hover:border-red-500/30"
        >
          <component
            :is="item.icon"
            class="mx-auto h-10 w-10 text-red-500"
          />

          <h3
            class="mt-6 text-lg font-semibold text-white"
          >
            {{ item.title }}
          </h3>

        </div>

      </div>

    </AppContainer>
  </section>

  <!-- ========================================================================= -->
  <!-- Enterprise Benefits -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">
    <AppContainer>

      <AppSectionHeading
        title="Enterprise Benefits"
        subtitle="Accelerate AI adoption without sacrificing governance, security or operational control."
        centered
      />

      <div class="mt-16 grid gap-6 lg:grid-cols-3">

        <!-- Faster Adoption -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <Workflow class="h-10 w-10 text-red-500" />

          <h3
            class="mt-6 text-xl font-semibold text-white"
          >
            Faster AI Adoption
          </h3>

          <p
            class="mt-4 leading-7 text-zinc-400"
          >
            Deploy AI across departments using one secure platform instead of
            building custom integrations for every assistant and application.
          </p>

        </div>

        <!-- Lower Maintenance -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <ServerCog class="h-10 w-10 text-red-500" />

          <h3
            class="mt-6 text-xl font-semibold text-white"
          >
            Lower Maintenance
          </h3>

          <p
            class="mt-4 leading-7 text-zinc-400"
          >
            Maintain one integration hub instead of supporting separate
            integrations for ChatGPT, Claude, Gemini, Copilot and future AI
            assistants.
          </p>

        </div>

        <!-- Governance -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <ShieldCheck class="h-10 w-10 text-red-500" />

          <h3
            class="mt-6 text-xl font-semibold text-white"
          >
            Complete Governance
          </h3>

          <p
            class="mt-4 leading-7 text-zinc-400"
          >
            Gain complete visibility into AI activity with centralized audit
            logs, permission management and connector monitoring.
          </p>

        </div>

      </div>

      <div
        class="mx-auto mt-16 max-w-4xl rounded-2xl border border-white/10 bg-[#111317] p-8"
      >
        <p
          class="text-center text-lg leading-8 text-zinc-300"
        >
          Meshiro gives IT teams the confidence to embrace AI without
          compromising enterprise security, compliance or operational
          governance. Employees continue using the AI assistants they prefer,
          while IT stays in complete control of how business systems are
          accessed.
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
          title="Modernize Enterprise AI Management"
          subtitle="Give your employees the AI experience they want while giving IT the governance, security and control it needs."
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