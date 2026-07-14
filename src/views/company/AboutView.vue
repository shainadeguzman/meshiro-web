  <!--
===============================================================================
Component: AboutView.vue

Purpose:
Displays the About page for the Meshiro marketing website.

Props:
None

Slots:
None

Usage:

<Route
  path="/about"
  component="{AboutView}"
/>

Notes:
- Introduces the Meshiro vision and mission.
- Explains why the platform exists.
- Reinforces enterprise positioning.
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
  Link2,
  ShieldCheck,
  BriefcaseBusiness,
} from 'lucide-vue-next'
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

      <div
        class="mx-auto max-w-4xl text-center"
      >

        <AppSectionHeading
          title="About Meshiro"
          subtitle="We're building the AI Integration Hub that securely connects every AI assistant to every business system through one connection."
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
  <!-- Our Mission -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">

    <AppContainer>

      <AppSectionHeading
        title="Our Mission"
        subtitle="Making enterprise AI simple, secure and accessible."
        centered
      />

      <div
        class="mx-auto mt-16 max-w-4xl space-y-8 text-center"
      >

        <p
          class="text-lg leading-8 text-zinc-300"
        >
          We believe employees should be able to use AI naturally without
          worrying about APIs, authentication, permissions or integrations.
          They should simply ask questions and get answers.
        </p>

        <p
          class="text-lg leading-8 text-zinc-300"
        >
          Meshiro securely connects AI assistants to enterprise systems through
          one centralized platform, allowing organizations to govern access,
          protect credentials and expose business capabilities instead of
          technical APIs.
        </p>

      </div>

    </AppContainer>

  </section>

  <!-- ========================================================================= -->
  <!-- Why Meshiro Exists -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">

    <AppContainer>

      <AppSectionHeading
        title="Why Meshiro Exists"
        subtitle="Enterprise AI should be powerful without becoming complicated."
        centered
      />

      <div
        class="mt-16 grid gap-8 lg:grid-cols-3"
      >

        <!-- One Connection -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >

          <Link2
            class="h-10 w-10 text-red-500"
          />

          <h3
            class="mt-6 text-xl font-semibold text-white"
          >
            One Connection
          </h3>

          <p
            class="mt-4 leading-7 text-zinc-400"
          >
            Connect once and allow every supported AI assistant to securely
            access your approved business capabilities.
          </p>

        </div>

        <!-- Enterprise Security -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >

          <ShieldCheck
            class="h-10 w-10 text-red-500"
          />

          <h3
            class="mt-6 text-xl font-semibold text-white"
          >
            Enterprise Security
          </h3>

          <p
            class="mt-4 leading-7 text-zinc-400"
          >
            Credentials remain inside Meshiro while permissions, governance and
            audit logs ensure every action is secure and accountable.
          </p>

        </div>

        <!-- Business Capabilities -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >

          <BriefcaseBusiness
            class="h-10 w-10 text-red-500"
          />

          <h3
            class="mt-6 text-xl font-semibold text-white"
          >
            Business Capabilities
          </h3>

          <p
            class="mt-4 leading-7 text-zinc-400"
          >
            Instead of exposing APIs, Meshiro exposes meaningful business tools
            like Customer Lookup, Employee Directory and Invoice Search.
          </p>

        </div>

      </div>

    </AppContainer>

  </section>

    <!-- ========================================================================= -->
  <!-- Core Principles -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">

    <AppContainer>

      <AppSectionHeading
        title="Our Core Principles"
        subtitle="Every decision we make is guided by these foundational principles."
        centered
      />

      <div class="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <!-- Security First -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 text-center transition-all duration-200 hover:border-red-500/30"
        >
          <ShieldCheck
            class="mx-auto h-10 w-10 text-red-500"
          />

          <h3
            class="mt-6 text-lg font-semibold text-white"
          >
            Security First
          </h3>

          <p
            class="mt-4 text-sm leading-7 text-zinc-400"
          >
            Protect credentials, enforce permissions and audit every AI action
            across the organization.
          </p>

        </div>

        <!-- AI First -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 text-center transition-all duration-200 hover:border-red-500/30"
        >
          <BriefcaseBusiness
            class="mx-auto h-10 w-10 text-red-500"
          />

          <h3
            class="mt-6 text-lg font-semibold text-white"
          >
            AI First
          </h3>

          <p
            class="mt-4 text-sm leading-7 text-zinc-400"
          >
            Employees should interact naturally with AI while Meshiro handles
            the complexity behind the scenes.
          </p>

        </div>

        <!-- Enterprise Ready -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 text-center transition-all duration-200 hover:border-red-500/30"
        >
          <Link2
            class="mx-auto h-10 w-10 text-red-500"
          />

          <h3
            class="mt-6 text-lg font-semibold text-white"
          >
            Enterprise Ready
          </h3>

          <p
            class="mt-4 text-sm leading-7 text-zinc-400"
          >
            Built for organizations that require governance, scalability,
            compliance and centralized management.
          </p>

        </div>

        <!-- Future Proof -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 text-center transition-all duration-200 hover:border-red-500/30"
        >
          <ArrowRight
            class="mx-auto h-10 w-10 text-red-500"
          />

          <h3
            class="mt-6 text-lg font-semibold text-white"
          >
            Future Proof
          </h3>

          <p
            class="mt-4 text-sm leading-7 text-zinc-400"
          >
            New AI assistants, connectors and business systems can be adopted
            without redesigning your architecture.
          </p>

        </div>

      </div>

    </AppContainer>

  </section>

  <!-- ========================================================================= -->
  <!-- The Future of Enterprise AI -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">

    <AppContainer>

      <AppSectionHeading
        title="The Future of Enterprise AI"
        subtitle="AI technology will continue to evolve. Your integration platform should evolve with it."
        centered
      />

      <div
        class="mx-auto mt-16 max-w-5xl rounded-3xl border border-white/10 bg-[#111317] p-10 lg:p-14"
      >

        <p
          class="text-lg leading-8 text-zinc-300"
        >
          Today, organizations are connecting ChatGPT, Claude, Gemini and
          Microsoft Copilot to their business systems. Tomorrow, new AI models,
          new enterprise applications and new workflows will emerge.
        </p>

        <p
          class="mt-8 text-lg leading-8 text-zinc-300"
        >
          Meshiro was designed with that future in mind. Instead of creating
          separate integrations for every AI assistant, organizations connect
          once and allow Meshiro to securely orchestrate permissions,
          connectors, business tools and enterprise policies.
        </p>

        <p
          class="mt-8 text-lg leading-8 text-zinc-300"
        >
          We believe AI should become another trusted interface to your
          business—not another platform your IT team has to manage.
        </p>

      </div>

    </AppContainer>

  </section>

    <!-- ========================================================================= -->
  <!-- Our Vision -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">

    <AppContainer>

      <div
        class="mx-auto max-w-5xl text-center"
      >

        <AppSectionHeading
          title="Our Vision"
          subtitle="One Connection. Every Tool. AI That Works."
          centered
        />

        <div
          class="mx-auto mt-12 max-w-4xl space-y-8"
        >

          <p
            class="text-lg leading-8 text-zinc-300"
          >
            We envision a future where employees use AI as naturally as they
            use email, search and collaboration tools today. AI should become
            the simplest way to interact with business systems—not another
            platform that organizations have to manage.
          </p>

          <p
            class="text-lg leading-8 text-zinc-300"
          >
            Meshiro is building the secure operating layer between AI assistants
            and enterprise systems, enabling organizations to adopt new AI
            technologies without rebuilding integrations or compromising
            governance.
          </p>

          <p
            class="text-lg font-medium leading-8 text-white"
          >
            One secure connection today. Every AI assistant tomorrow.
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
          title="Join Us in Building the Future of Enterprise AI"
          subtitle="Discover how Meshiro can securely connect your AI assistants, business tools and enterprise systems through one centralized platform."
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