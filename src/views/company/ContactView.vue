<!--
===============================================================================
Component: ContactView.vue

Purpose:
Displays the Contact page for the Meshiro marketing website.

Props:
None

Slots:
None

Usage:

<Route
  path="/contact"
  component="{ContactView}"
/>

Notes:
- Enterprise contact page.
- Simulates contact form submission until backend API is available.
- Mobile responsive.
===============================================================================
-->

<script setup lang="ts">
import { ref } from 'vue'

import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

import AppContainer from '@/components/ui/AppContainer.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppSectionHeading from '@/components/ui/AppSectionHeading.vue'

import {
  ArrowRight,
  Handshake,
  Headphones,
  BadgeDollarSign,
} from 'lucide-vue-next'

const form = ref({
  name: '',
  company: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const submitForm = async () => {
  isSubmitting.value = true

  await new Promise((resolve) => {
    setTimeout(resolve, 1500)
  })

  isSubmitting.value = false
  isSubmitted.value = true

  form.value = {
    name: '',
    company: '',
    email: '',
    message: '',
  }

  setTimeout(() => {
    isSubmitted.value = false
  }, 5000)
}
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
          title="Contact Us"
          subtitle="Whether you're exploring enterprise AI, planning a deployment or looking for technical guidance, we'd love to hear from you."
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
            to="/resources/documentation"
          >
            Documentation
          </AppButton>

        </div>

      </div>

    </AppContainer>

  </section>

  <!-- ========================================================================= -->
  <!-- Contact Options -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">

    <AppContainer>

      <AppSectionHeading
        title="How Can We Help?"
        subtitle="Choose the option that best matches your needs."
        centered
      />

      <div
        class="mt-16 grid gap-8 lg:grid-cols-3"
      >

        <!-- Sales -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >

          <BadgeDollarSign
            class="h-10 w-10 text-red-500"
          />

          <h3
            class="mt-6 text-xl font-semibold text-white"
          >
            Talk to Sales
          </h3>

          <p
            class="mt-4 leading-7 text-zinc-400"
          >
            Learn how Meshiro can securely connect AI assistants to your
            business systems and discuss pricing, deployment and licensing.
          </p>

        </div>

        <!-- Support -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >

          <Headphones
            class="h-10 w-10 text-red-500"
          />

          <h3
            class="mt-6 text-xl font-semibold text-white"
          >
            Technical Support
          </h3>

          <p
            class="mt-4 leading-7 text-zinc-400"
          >
            Need implementation guidance or technical assistance? Our team is
            here to help you deploy Meshiro successfully.
          </p>

        </div>

        <!-- Partnerships -->

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8 transition-all duration-200 hover:border-red-500/30"
        >

          <Handshake
            class="h-10 w-10 text-red-500"
          />

          <h3
            class="mt-6 text-xl font-semibold text-white"
          >
            Partnerships
          </h3>

          <p
            class="mt-4 leading-7 text-zinc-400"
          >
            Interested in becoming a technology partner, systems integrator or
            reseller? We'd love to explore opportunities together.
          </p>

        </div>

      </div>

    </AppContainer>

  </section>

    <!-- ========================================================================= -->
  <!-- Contact Form -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">

    <AppContainer>

      <div
        class="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#111317] p-8 lg:p-12"
      >

        <AppSectionHeading
          title="Send Us a Message"
          subtitle="Tell us about your organization and how we can help."
        />

        <form
          class="mt-10 space-y-6"
          @submit.prevent="submitForm"
        >

          <div
            class="grid gap-6 md:grid-cols-2"
          >

            <div>

              <label
                class="mb-2 block text-sm font-medium text-zinc-300"
              >
                Full Name
              </label>

              <input
                v-model="form.name"
                type="text"
                required
                placeholder="John Doe"
                class="w-full rounded-xl border border-white/10 bg-[#050608] px-4 py-3 text-white placeholder:text-zinc-500 transition focus:border-red-500 focus:outline-none"
              >

            </div>

            <div>

              <label
                class="mb-2 block text-sm font-medium text-zinc-300"
              >
                Company
              </label>

              <input
                v-model="form.company"
                type="text"
                placeholder="Acme Corporation"
                class="w-full rounded-xl border border-white/10 bg-[#050608] px-4 py-3 text-white placeholder:text-zinc-500 transition focus:border-red-500 focus:outline-none"
              >

            </div>

          </div>

          <div>

            <label
              class="mb-2 block text-sm font-medium text-zinc-300"
            >
              Work Email
            </label>

            <input
              v-model="form.email"
              type="email"
              required
              placeholder="you@company.com"
              class="w-full rounded-xl border border-white/10 bg-[#050608] px-4 py-3 text-white placeholder:text-zinc-500 transition focus:border-red-500 focus:outline-none"
            >

          </div>

          <div>

            <label
              class="mb-2 block text-sm font-medium text-zinc-300"
            >
              Message
            </label>

            <textarea
              v-model="form.message"
              rows="6"
              required
              placeholder="Tell us about your project..."
              class="w-full rounded-xl border border-white/10 bg-[#050608] px-4 py-3 text-white placeholder:text-zinc-500 transition focus:border-red-500 focus:outline-none"
            />

          </div>

          <div
            v-if="isSubmitted"
            class="rounded-xl border border-green-500/30 bg-green-500/10 p-4"
          >
            <p class="text-sm text-green-300">
              Thank you! Your message has been received.
              This is currently a simulated submission while the backend API is
              under development.
            </p>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {{ isSubmitting ? 'Sending Message...' : 'Submit Message' }}
          </button>

        </form>

      </div>

    </AppContainer>

  </section>

  <!-- ========================================================================= -->
  <!-- Why Contact Meshiro -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">

    <AppContainer>

      <AppSectionHeading
        title="Why Contact Meshiro?"
        subtitle="Every conversation is focused on helping your organization successfully adopt enterprise AI."
        centered
      />

      <div
        class="mt-16 grid gap-8 lg:grid-cols-2"
      >

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8"
        >

          <h3
            class="text-xl font-semibold text-white"
          >
            What We'll Discuss
          </h3>

          <ul
            class="mt-6 space-y-4 text-zinc-400"
          >
            <li>• Your AI strategy and business goals</li>
            <li>• Existing business systems and integrations</li>
            <li>• Security and governance requirements</li>
            <li>• Recommended Business Tools and connectors</li>
            <li>• Deployment roadmap and next steps</li>
          </ul>

        </div>

        <div
          class="rounded-2xl border border-white/10 bg-[#111317] p-8"
        >

          <h3
            class="text-xl font-semibold text-white"
          >
            Who You'll Speak With
          </h3>

          <p
            class="mt-6 leading-7 text-zinc-400"
          >
            Our team works with organizations evaluating enterprise AI,
            designing secure integration strategies and planning phased
            deployments. Whether you're exploring possibilities or preparing
            for production, we'll help identify the best approach for your
            organization.
          </p>

        </div>

      </div>

    </AppContainer>

  </section>

    <!-- ========================================================================= -->
  <!-- FAQ Shortcut -->
  <!-- ========================================================================= -->

  <section class="border-b border-white/10 py-24">

    <AppContainer>

      <div
        class="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#111317] p-10 text-center"
      >

        <AppSectionHeading
          title="Looking for Quick Answers?"
          subtitle="Before reaching out, you may find what you're looking for in our documentation or frequently asked questions."
          centered
        />

        <div
          class="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >

          <AppButton
            variant="secondary"
            to="/resources/documentation"
          >
            Browse Documentation
          </AppButton>

          <AppButton
            variant="secondary"
            to="/resources/faq"
          >
            View FAQ
          </AppButton>

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
          subtitle="Book a personalized demo and see how Meshiro securely connects ChatGPT, Claude, Gemini, Copilot and your enterprise systems through one centralized AI Integration Hub."
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