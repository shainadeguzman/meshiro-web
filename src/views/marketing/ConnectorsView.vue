<!--
===============================================================================
Component: ConnectorsView.vue

Purpose:
Displays the Connectors page for the Meshiro marketing website.

Props:
None

Slots:
None

Usage:

<Route
  path="/product/connectors"
  component="{ConnectorsView}"
/>

Notes:
- Explains how Meshiro connects enterprise systems.
- Highlights supported connectors.
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
  Plug2,
  Database,
  Cloud,
  Building2,
  Server,
  Workflow,
} from 'lucide-vue-next'

const connectors = [
  {
    name: 'HubSpot',
    category: 'CRM',
    description:
      'Access customers, companies, deals and support tickets.',
    icon: Building2,
  },
  {
    name: 'Salesforce',
    category: 'CRM',
    description:
      'Enterprise CRM integration with complete permission control.',
    icon: Cloud,
  },
  {
    name: 'Microsoft 365',
    category: 'Productivity',
    description:
      'Outlook, Teams, SharePoint and Microsoft Graph.',
    icon: Server,
  },
  {
    name: 'Google Workspace',
    category: 'Productivity',
    description:
      'Gmail, Drive, Calendar and Workspace APIs.',
    icon: Cloud,
  },
  {
    name: 'Slack',
    category: 'Collaboration',
    description:
      'Channels, conversations and enterprise messaging.',
    icon: Workflow,
  },
  {
    name: 'Databases',
    category: 'Data',
    description:
      'MySQL, PostgreSQL, SQL Server and enterprise databases.',
    icon: Database,
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
            title="One Platform. Every Connector."
            subtitle="Connect your CRM, ERP, HRIS, collaboration tools, databases and custom APIs through one secure integration layer."
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
            v-for="connector in connectors"
            :key="connector.name"
            class="rounded-2xl border border-white/10 bg-[#111317] p-6 transition-all duration-200 hover:border-red-500/30"
          >
            <component
              :is="connector.icon"
              class="h-8 w-8 text-red-500"
            />

            <h3
              class="mt-5 text-lg font-semibold text-white"
            >
              {{ connector.name }}
            </h3>

            <p
              class="mt-1 text-sm text-zinc-500"
            >
              {{ connector.category }}
            </p>

            <p
              class="mt-4 text-sm leading-7 text-zinc-400"
            >
              {{ connector.description }}
            </p>

          </div>

        </div>

      </div>

    </AppContainer>
  </section>

  <!-- ========================================================================= -->
  <!-- Supported Connectors -->
  <!-- ========================================================================= -->

  <section
    class="border-b border-white/10 py-24"
  >
    <AppContainer>

      <AppSectionHeading
        title="Supported Connectors"
        subtitle="Meshiro provides one secure connection to your organization's business systems, regardless of vendor."
        centered
      />

      <div
        class="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >

        <div
          v-for="connector in connectors"
          :key="`${connector.name}-supported`"
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <component
            :is="connector.icon"
            class="h-10 w-10 text-red-500"
          />

          <h3
            class="mt-6 text-xl font-semibold text-white"
          >
            {{ connector.name }}
          </h3>

          <p
            class="mt-2 text-sm text-zinc-500"
          >
            {{ connector.category }}
          </p>

          <span
            class="mt-6 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400"
          >
            Supported
          </span>

          <p
            class="mt-5 text-sm leading-7 text-zinc-400"
          >
            {{ connector.description }}
          </p>

        </div>

      </div>

    </AppContainer>
  </section>

    <!-- ========================================================================= -->
  <!-- How Connectors Work -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">
    <AppContainer>

      <AppSectionHeading
        title="How Connectors Work"
        subtitle="Meshiro sits between AI assistants and your enterprise applications, securely routing requests through one centralized integration layer."
        centered
      />

      <div class="mt-16">

        <div
          class="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-0"
        >

          <!-- AI -->

          <div
            class="flex w-56 flex-col items-center rounded-2xl border border-white/10 bg-[#111317] p-6 text-center"
          >
            <Plug2 class="mb-4 h-10 w-10 text-red-500" />

            <h3 class="font-semibold text-white">
              AI Assistant
            </h3>

            <p class="mt-2 text-sm text-zinc-400">
              ChatGPT, Claude, Gemini,
              Copilot and more
            </p>

          </div>

          <ArrowRight
            class="hidden h-6 w-6 text-zinc-600 lg:block"
          />

          <!-- Meshiro -->

          <div
            class="flex w-56 flex-col items-center rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-center"
          >
            <Workflow class="mb-4 h-10 w-10 text-red-500" />

            <h3 class="font-semibold text-white">
              Meshiro
            </h3>

            <p class="mt-2 text-sm text-zinc-400">
              Connector Orchestration
            </p>

          </div>

          <ArrowRight
            class="hidden h-6 w-6 text-zinc-600 lg:block"
          />

          <!-- Systems -->

          <div
            class="flex w-56 flex-col items-center rounded-2xl border border-white/10 bg-[#111317] p-6 text-center"
          >
            <Database class="mb-4 h-10 w-10 text-red-500" />

            <h3 class="font-semibold text-white">
              Business Systems
            </h3>

            <p class="mt-2 text-sm text-zinc-400">
              CRM, ERP, HRIS,
              Finance and Databases
            </p>

          </div>

        </div>

        <div
          class="mx-auto mt-16 max-w-4xl rounded-2xl border border-white/10 bg-[#111317] p-8"
        >
          <p class="text-center text-lg leading-8 text-zinc-300">
            Employees continue using their preferred AI assistant while
            Meshiro securely determines which connector, credentials and
            permissions should be used for every request.
          </p>
        </div>

      </div>

    </AppContainer>
  </section>

  <!-- ========================================================================= -->
  <!-- Enterprise Integrations -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">
    <AppContainer>

      <AppSectionHeading
        title="Enterprise Integrations"
        subtitle="Meshiro connects to the systems your organization already relies on."
        centered
      />

      <div class="mt-16 grid gap-6 lg:grid-cols-3">

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <Building2 class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            CRM
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            HubSpot, Salesforce and custom customer relationship
            management platforms.
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <Database class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            ERP & Finance
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            SAP, Oracle, NetSuite, QuickBooks, Xero and
            financial platforms.
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <Server class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            HR & Identity
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Microsoft 365, Google Workspace,
            Okta, Azure AD and HRIS systems.
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <Workflow class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            Collaboration
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Slack, Microsoft Teams,
            Jira, Confluence and productivity tools.
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <Database class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            Databases
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            MySQL, PostgreSQL,
            SQL Server, MongoDB and cloud databases.
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <Plug2 class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            Custom APIs
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            REST APIs, GraphQL,
            SOAP services and proprietary enterprise systems.
          </p>
        </div>

      </div>

    </AppContainer>
  </section>

    <!-- ========================================================================= -->
  <!-- Why Meshiro Connectors -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">
    <AppContainer>

      <AppSectionHeading
        title="Why Meshiro Connectors?"
        subtitle="Enterprise integrations should be secure, reusable and invisible to employees."
        centered
      />

      <div class="mt-16 grid gap-6 lg:grid-cols-3">

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <Plug2 class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            One Connection
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Configure each business system only once.
            Every AI assistant can securely reuse the same connector.
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <Workflow class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            Centralized Management
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Authentication, permissions, auditing and credential
            management are handled centrally inside Meshiro.
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <Database class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            Enterprise Ready
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Connect cloud services, on-premise systems,
            databases and proprietary enterprise applications.
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
          title="Connect Every Business System"
          subtitle="From CRM and ERP platforms to databases and custom APIs, Meshiro brings every enterprise system together through one secure integration hub."
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