<!--
===============================================================================
Component: SupportView.vue

Purpose:
Displays the Customer Support Solutions page for the Meshiro marketing website.

Props:
None

Slots:
None

Usage:

<Route
  path="/solutions/support"
  component="{SupportView}"
/>

Notes:
- Demonstrates how Meshiro empowers customer support teams.
- Focuses on productivity and customer experience.
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
  Users,
  Search,
  FileText,
  BookOpen,
  Bot,
  Workflow,
  MessageSquare,
} from 'lucide-vue-next'

const businessTools = [
  'Customer Lookup',
  'Customer History',
  'Knowledge Search',
  'Ticket Summary',
  'Invoice Search',
  'Order Status',
  'Contract Search',
  'Outstanding Receivables',
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

      <div class="mx-auto max-w-4xl text-center">

        <AppSectionHeading
          title="Deliver Faster, Smarter Customer Support with AI"
          subtitle="Help support teams resolve customer issues faster by securely accessing customer records, knowledge bases and business tools directly from their favorite AI assistant."
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
  <!-- Common Support Challenges -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">
    <AppContainer>

      <AppSectionHeading
        title="Common Support Challenges"
        subtitle="Support teams often spend more time searching for information than helping customers."
        centered
      />

      <div class="mt-16 grid gap-6 lg:grid-cols-3">

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8"
        >
          <Search class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            Multiple Systems
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Customer information is scattered across CRM, ticketing, finance
            and documentation systems.
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8"
        >
          <MessageSquare class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            Slow Responses
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Agents lose valuable time switching between applications before
            answering a customer's question.
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8"
        >
          <Users class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            Inconsistent Answers
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Different agents often provide different answers because they rely
            on different information sources.
          </p>
        </div>

      </div>

    </AppContainer>
  </section>

    <!-- ========================================================================= -->
  <!-- How Meshiro Helps -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">
    <AppContainer>

      <AppSectionHeading
        title="How Meshiro Helps Support Teams"
        subtitle="Give every support agent instant access to the right business information without switching between applications."
        centered
      />

      <div class="mt-16 grid gap-6 lg:grid-cols-3">

        <!-- Customer Lookup -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <Search class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            Customer Lookup
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Instantly retrieve customer profiles, account information,
            subscriptions, purchase history and recent activity from your CRM.
          </p>

        </div>

        <!-- Knowledge Search -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <BookOpen class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            Knowledge Search
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Search internal documentation, FAQs and knowledge bases using
            natural language without leaving the conversation.
          </p>

        </div>

        <!-- Ticket Assistance -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <FileText class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            Ticket Assistance
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Generate ticket summaries, suggest responses and surface relevant
            business information to help agents resolve issues faster.
          </p>

        </div>

      </div>

    </AppContainer>
  </section>

  <!-- ========================================================================= -->
  <!-- Typical AI Workflow -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">

    <AppContainer>

      <AppSectionHeading
        title="Typical AI Support Workflow"
        subtitle="Support agents continue using their favorite AI assistant while Meshiro securely retrieves information from the right business systems."
        centered
      />

      <div class="mt-16">

        <div
          class="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-0"
        >

          <!-- Agent -->

          <div
            class="flex w-52 flex-col items-center rounded-2xl border border-white/10 bg-[#111317] p-6 text-center"
          >
            <Users class="mb-4 h-10 w-10 text-red-500" />

            <h3 class="font-semibold text-white">
              Support Agent
            </h3>

            <p class="mt-2 text-sm text-zinc-400">
              Asks a question in ChatGPT
            </p>

          </div>

          <ArrowRight
            class="hidden h-6 w-6 text-zinc-600 lg:block"
          />

          <!-- AI -->

          <div
            class="flex w-52 flex-col items-center rounded-2xl border border-white/10 bg-[#111317] p-6 text-center"
          >
            <Bot class="mb-4 h-10 w-10 text-red-500" />

            <h3 class="font-semibold text-white">
              AI Assistant
            </h3>

            <p class="mt-2 text-sm text-zinc-400">
              Understands the request
            </p>

          </div>

          <ArrowRight
            class="hidden h-6 w-6 text-zinc-600 lg:block"
          />

          <!-- Meshiro -->

          <div
            class="flex w-52 flex-col items-center rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-center"
          >
            <Workflow class="mb-4 h-10 w-10 text-red-500" />

            <h3 class="font-semibold text-white">
              Meshiro
            </h3>

            <p class="mt-2 text-sm text-zinc-400">
              Applies permissions and business tools
            </p>

          </div>

          <ArrowRight
            class="hidden h-6 w-6 text-zinc-600 lg:block"
          />

          <!-- Business Systems -->

          <div
            class="flex w-52 flex-col items-center rounded-2xl border border-white/10 bg-[#111317] p-6 text-center"
          >
            <Search class="mb-4 h-10 w-10 text-red-500" />

            <h3 class="font-semibold text-white">
              Business Systems
            </h3>

            <p class="mt-2 text-sm text-zinc-400">
              CRM, Helpdesk and Knowledge Base
            </p>

          </div>

        </div>

        <div
          class="mx-auto mt-16 max-w-4xl rounded-2xl border border-white/10 bg-[#111317] p-8"
        >
          <p class="text-center text-lg leading-8 text-zinc-300">
            Agents stay inside one conversation while Meshiro securely gathers
            customer information, documentation and business data from multiple
            enterprise systems. The result is faster resolutions, more
            consistent responses and a better customer experience.
          </p>
        </div>

      </div>

    </AppContainer>

  </section>

    <!-- ========================================================================= -->
  <!-- Business Tools for Support -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">
    <AppContainer>

      <AppSectionHeading
        title="Business Tools Your Support Team Can Use"
        subtitle="Instead of exposing APIs, Meshiro provides secure business capabilities that support agents can access naturally through AI."
        centered
      />

      <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        <div
          v-for="tool in businessTools"
          :key="tool"
          class="rounded-2xl border border-white/10 bg-[#111317] p-6 text-center transition-all duration-200 hover:border-red-500/30"
        >
          <h3
            class="font-semibold text-white"
          >
            {{ tool }}
          </h3>
        </div>

      </div>

    </AppContainer>
  </section>

  <!-- ========================================================================= -->
  <!-- Benefits -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">
    <AppContainer>

      <AppSectionHeading
        title="Better Support. Better Customer Experience."
        subtitle="Spend less time searching for information and more time helping customers."
        centered
      />

      <div class="mt-16 grid gap-6 lg:grid-cols-3">

        <!-- Faster Resolution -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <MessageSquare class="h-10 w-10 text-red-500" />

          <h3
            class="mt-6 text-xl font-semibold text-white"
          >
            Faster Resolution Times
          </h3>

          <p
            class="mt-4 leading-7 text-zinc-400"
          >
            Give agents instant access to customer information, documentation
            and account history without switching between systems.
          </p>

        </div>

        <!-- Consistent Answers -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <BookOpen class="h-10 w-10 text-red-500" />

          <h3
            class="mt-6 text-xl font-semibold text-white"
          >
            Consistent Answers
          </h3>

          <p
            class="mt-4 leading-7 text-zinc-400"
          >
            AI retrieves information from approved business tools, helping every
            support agent provide accurate and consistent responses.
          </p>

        </div>

        <!-- Better Customer Experience -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <Users class="h-10 w-10 text-red-500" />

          <h3
            class="mt-6 text-xl font-semibold text-white"
          >
            Better Customer Experience
          </h3>

          <p
            class="mt-4 leading-7 text-zinc-400"
          >
            Resolve issues faster, reduce wait times and give customers the
            confidence that every interaction is informed and accurate.
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
          title="Empower Your Support Team with AI"
          subtitle="Give every support agent secure access to the business information they need—without exposing your enterprise systems."
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