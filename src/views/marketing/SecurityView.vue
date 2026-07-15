<!--
===============================================================================
Component: SecurityView.vue

Purpose:
Displays the Security page for the Meshiro marketing website.

Props:
None

Slots:
None

Usage:

<Route
  path="/product/security"
  component="{SecurityView}"
/>

Notes:
- Highlights Meshiro's enterprise-grade security model.
- Reuses the marketing SecuritySection component.
- Mobile responsive.
===============================================================================
-->

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

import AppContainer from '@/components/ui/AppContainer.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppSectionHeading from '@/components/ui/AppSectionHeading.vue'

import SecuritySection from './components/SecuritySection.vue'

import {
  ArrowRight,
  ShieldCheck,
  Lock,
  Fingerprint,
  UserCheck,
  ScrollText,
  KeyRound,
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
        class="mx-auto max-w-4xl text-center"
      >

        <AppSectionHeading
          title="Enterprise Security Built Into Every Connection"
          subtitle="Meshiro protects your AI integrations with enterprise-grade authentication, authorization, encrypted credentials, audit logging and role-based access control—without exposing your business systems directly to AI assistants."
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
  <!-- Existing Security Overview -->
  <!-- ========================================================================= -->

  <SecuritySection />

    <!-- ========================================================================= -->
  <!-- Security Principles -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">
    <AppContainer>

      <AppSectionHeading
        title="Security Principles"
        subtitle="Every request flowing through Meshiro follows enterprise security best practices from authentication to execution."
        centered
      />

      <div class="mt-16 grid gap-6 lg:grid-cols-3">

        <!-- Zero Trust -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <ShieldCheck class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            Zero Trust
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Every request is authenticated, authorized and validated before any
            business system is accessed. Nothing is trusted by default.
          </p>

        </div>

        <!-- Least Privilege -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <UserCheck class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            Least Privilege
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Employees only gain access to the business tools, connectors and
            information they are explicitly permitted to use.
          </p>

        </div>

        <!-- Defense in Depth -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >
          <Fingerprint class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-xl font-semibold text-white">
            Defense in Depth
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Authentication, authorization, encrypted credentials and auditing
            work together to secure every interaction.
          </p>

        </div>

      </div>

    </AppContainer>
  </section>

  <!-- ========================================================================= -->
  <!-- Enterprise Security Features -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">
    <AppContainer>

      <AppSectionHeading
        title="Enterprise Security Features"
        subtitle="Purpose-built controls help organizations securely connect AI assistants to internal business systems."
        centered
      />

      <div class="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        <!-- RBAC -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8"
        >
          <UserCheck class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-lg font-semibold text-white">
            Role-Based Access Control
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Assign permissions based on roles, departments and organizational
            policies to ensure users only access what they need.
          </p>

        </div>

        <!-- Credential Vault -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8"
        >
          <KeyRound class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-lg font-semibold text-white">
            Secure Credential Vault
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Connector credentials remain securely stored inside Meshiro and are
            never exposed to employees or AI assistants.
          </p>

        </div>

        <!-- Audit Logs -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8"
        >
          <ScrollText class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-lg font-semibold text-white">
            Complete Audit Logs
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Every action is recorded for compliance, troubleshooting and
            operational visibility across your organization.
          </p>

        </div>

        <!-- Encryption -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8"
        >
          <Lock class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-lg font-semibold text-white">
            Encryption Everywhere
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Data is protected both in transit and at rest using modern
            encryption standards and secure communication channels.
          </p>

        </div>

        <!-- Department Permissions -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8"
        >
          <ShieldCheck class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-lg font-semibold text-white">
            Department Permissions
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Restrict business tools and connectors by department, role or team
            so sensitive resources remain protected.
          </p>

        </div>

        <!-- Connector Isolation -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8"
        >
          <Fingerprint class="h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-lg font-semibold text-white">
            Connector Isolation
          </h3>

          <p class="mt-4 leading-7 text-zinc-400">
            Each connector operates independently, helping minimize risk and
            reducing the impact of failures or unauthorized access.
          </p>

        </div>

      </div>

    </AppContainer>
  </section>

    <!-- ========================================================================= -->
  <!-- Compliance & Privacy -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">
    <AppContainer>

      <AppSectionHeading
        title="Designed for Enterprise Compliance"
        subtitle="Meshiro is built with security and governance in mind, making it easier for organizations to meet internal policies and industry requirements."
        centered
      />

      <div class="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 text-center transition-all duration-200 hover:border-red-500/30"
        >
          <ShieldCheck class="mx-auto h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-lg font-semibold text-white">
            SOC 2 Ready
          </h3>

          <p class="mt-4 text-sm leading-7 text-zinc-400">
            Designed with enterprise security controls that align with
            modern compliance expectations.
          </p>

        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 text-center transition-all duration-200 hover:border-red-500/30"
        >
          <Lock class="mx-auto h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-lg font-semibold text-white">
            GDPR Friendly
          </h3>

          <p class="mt-4 text-sm leading-7 text-zinc-400">
            Privacy-first architecture helps organizations manage
            customer and employee data responsibly.
          </p>

        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 text-center transition-all duration-200 hover:border-red-500/30"
        >
          <ScrollText class="mx-auto h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-lg font-semibold text-white">
            Audit Ready
          </h3>

          <p class="mt-4 text-sm leading-7 text-zinc-400">
            Centralized audit logs provide visibility into AI requests,
            connector usage and administrative actions.
          </p>

        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 text-center transition-all duration-200 hover:border-red-500/30"
        >
          <Fingerprint class="mx-auto h-10 w-10 text-red-500" />

          <h3 class="mt-6 text-lg font-semibold text-white">
            Privacy by Design
          </h3>

          <p class="mt-4 text-sm leading-7 text-zinc-400">
            Security and privacy are considered from the start—not added
            as an afterthought.
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
          title="Secure Your Enterprise AI"
          subtitle="Protect your business systems while giving employees the freedom to use the AI assistants they already love."
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