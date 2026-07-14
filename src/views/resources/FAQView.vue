<!--
===============================================================================
Component: FAQView.vue

Purpose:
Displays the Frequently Asked Questions page for the Meshiro marketing website.

Props:
None

Slots:
None

Usage:

<Route
  path="/resources/faq"
  component="{FAQView}"
/>

Notes:
- Answers common pre-sales and product questions.
- Organized into logical categories.
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
} from 'lucide-vue-next'

const sections = [
  {
    title: 'General',
    questions: [
      {
        question: 'What is Meshiro?',
        answer:
          'Meshiro is an AI Integration Hub that securely connects AI assistants like ChatGPT, Claude, Gemini and Copilot to your business systems through one centralized platform.',
      },
      {
        question: 'How is Meshiro different from MCP servers?',
        answer:
          'Instead of configuring multiple MCP servers, Meshiro provides one secure connection that manages authentication, permissions, business tools and connectors for every supported AI assistant.',
      },
      {
        question: 'Which AI assistants are supported?',
        answer:
          'Meshiro is designed to work with ChatGPT, Claude, Gemini, Microsoft Copilot and future AI assistants through a single integration layer.',
      },
    ],
  },
  {
    title: 'Platform',
    questions: [
      {
        question: 'Can I build my own Business Tools?',
        answer:
          'Yes. Organizations can create reusable Business Tools that expose business capabilities instead of low-level APIs.',
      },
      {
        question: 'Can I connect my existing systems?',
        answer:
          'Yes. Meshiro supports popular enterprise applications, databases, REST APIs and custom connectors.',
      },
      {
        question: 'Can different departments have different permissions?',
        answer:
          'Yes. Meshiro includes role-based access control, department-based permissions and centralized governance.',
      },
    ],
  },
  {
    title: 'Security',
    questions: [
      {
        question: 'Where are credentials stored?',
        answer:
          'Credentials remain securely stored inside Meshiro. AI assistants never receive connector credentials or API keys.',
      },
      {
        question: 'Are all actions audited?',
        answer:
          'Yes. Every business tool execution and connector action can be recorded through centralized audit logs.',
      },
      {
        question: 'Does Meshiro support enterprise security?',
        answer:
          'Yes. Meshiro is designed around enterprise security with RBAC, audit logs, credential isolation and secure connector management.',
      },
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
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about Meshiro, deployment, security and enterprise AI integrations."
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
            Contact Us
          </AppButton>
        </div>

      </div>

    </AppContainer>
  </section>

  <!-- ========================================================================= -->
  <!-- FAQ Sections -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">

    <AppContainer>

      <div
        class="mx-auto max-w-5xl space-y-16"
      >

        <div
          v-for="section in sections"
          :key="section.title"
        >

          <AppSectionHeading
            :title="section.title"
          />

          <div
            class="mt-8 space-y-6"
          >

            <div
              v-for="item in section.questions"
              :key="item.question"
              class="rounded-2xl border border-white/10 bg-[#111317] p-8"
            >

              <h3
                class="text-xl font-semibold text-white"
              >
                {{ item.question }}
              </h3>

              <p
                class="mt-4 leading-7 text-zinc-400"
              >
                {{ item.answer }}
              </p>

            </div>

          </div>

        </div>

      </div>

    </AppContainer>

  </section>

    <!-- ========================================================================= -->
  <!-- Pricing -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">

    <AppContainer>

      <AppSectionHeading
        title="Pricing"
      />

      <div class="mt-8 space-y-6">

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8"
        >
          <h3 class="text-xl font-semibold text-white">
            Do you publish fixed pricing?
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            No. Every organization has different integration, security and
            deployment requirements. We tailor each proposal based on your
            environment and business goals.
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8"
        >
          <h3 class="text-xl font-semibold text-white">
            Can we start with a pilot deployment?
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Absolutely. Many customers begin with a single department or use
            case before expanding Meshiro across the organization.
          </p>
        </div>

      </div>

    </AppContainer>

  </section>

  <!-- ========================================================================= -->
  <!-- Deployment -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">

    <AppContainer>

      <AppSectionHeading
        title="Deployment"
      />

      <div class="mt-8 space-y-6">

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8"
        >
          <h3 class="text-xl font-semibold text-white">
            How long does deployment usually take?
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Deployment timelines depend on the number of connectors,
            integrations and business tools required. Pilot deployments can be
            completed quickly, while enterprise implementations are planned
            collaboratively with your team.
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8"
        >
          <h3 class="text-xl font-semibold text-white">
            Can Meshiro integrate with our existing systems?
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Yes. Meshiro supports leading SaaS platforms, databases, REST APIs
            and custom enterprise systems through its connector architecture.
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8"
        >
          <h3 class="text-xl font-semibold text-white">
            Do you provide onboarding and implementation support?
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Yes. Our team assists with deployment planning, connector
            configuration, business tool setup and administrator onboarding to
            ensure a successful rollout.
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
          title="Still Have Questions?"
          subtitle="We're happy to answer your questions, discuss your use case and help you determine whether Meshiro is the right fit for your organization."
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
            Contact Us
          </AppButton>
        </div>

      </div>

    </AppContainer>

  </section>

  <AppFooter />
</template>