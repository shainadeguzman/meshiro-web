<!--
===============================================================================
Component: BookDemoView.vue

Purpose:
Displays the Book a Demo marketing page.

Props:
None

Slots:
None

Usage:

<Route
  path="/book-demo"
  component="{BookDemoView}"
/>

Notes:
- Uses the shared marketing layout components.
- Client-side validation only.
- Backend integration will be added later.
===============================================================================
-->

<script setup lang="ts">
import { reactive, ref } from 'vue'

import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppContainer from '@/components/ui/AppContainer.vue'
import AppSectionHeading from '@/components/ui/AppSectionHeading.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppCard from '@/components/ui/AppCard.vue'
import AppInput from '@/components/forms/AppInput.vue'
import AppSelect from '@/components/forms/AppSelect.vue'
import AppTextarea from '@/components/forms/AppTextarea.vue'

import { ArrowDown, Check } from 'lucide-vue-next'

const formRef = ref<HTMLElement | null>(null)

const submitted = ref(false)
const loading = ref(false)

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  companySize: '',
  industry: '',
  country: '',
  aiPlatform: '',
  message: '',
})

const errors = reactive({
  name: '',
  company: '',
  email: '',
  companySize: '',
  industry: '',
  country: '',
})

const companySizes = [
  { label: '1 - 10 Employees', value: '1-10' },
  { label: '11 - 50 Employees', value: '11-50' },
  { label: '51 - 200 Employees', value: '51-200' },
  { label: '201 - 500 Employees', value: '201-500' },
  { label: '501 - 1000 Employees', value: '501-1000' },
  { label: '1000+ Employees', value: '1000+' },
]

const industries = [
  { label: 'Technology', value: 'technology' },
  { label: 'Finance', value: 'finance' },
  { label: 'Healthcare', value: 'healthcare' },
  { label: 'Education', value: 'education' },
  { label: 'Retail', value: 'retail' },
  { label: 'Manufacturing', value: 'manufacturing' },
  { label: 'Government', value: 'government' },
  { label: 'Professional Services', value: 'professional-services' },
  { label: 'Other', value: 'other' },
]

const aiPlatforms = [
  { label: 'ChatGPT', value: 'chatgpt' },
  { label: 'Claude', value: 'claude' },
  { label: 'Gemini', value: 'gemini' },
  { label: 'Microsoft Copilot', value: 'copilot' },
  { label: 'Multiple AI Platforms', value: 'multiple' },
  { label: 'Not Using AI Yet', value: 'none' },
]

function scrollToForm() {
  formRef.value?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

function validate() {
  errors.name = ''
  errors.company = ''
  errors.email = ''
  errors.companySize = ''
  errors.industry = ''
  errors.country = ''

  let valid = true

  if (!form.name.trim()) {
    errors.name = 'Full name is required.'
    valid = false
  }

  if (!form.company.trim()) {
    errors.company = 'Company is required.'
    valid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required.'
    valid = false
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  ) {
    errors.email = 'Please enter a valid email address.'
    valid = false
  }

  if (!form.companySize) {
    errors.companySize = 'Please select your company size.'
    valid = false
  }

  if (!form.industry) {
    errors.industry = 'Please select your industry.'
    valid = false
  }

  if (!form.country.trim()) {
    errors.country = 'Country is required.'
    valid = false
  }

  return valid
}

async function submit() {
  if (!validate()) return

  loading.value = true

  try {
    // Future API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    submitted.value = true
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <AppHeader />

  <!-- Hero -->

  <section class="border-b border-white/10 py-20 lg:py-32">
    <AppContainer>

        <AppSectionHeading
            title="Schedule a Personalized Demo"
            subtitle="Discover how Meshiro securely connects ChatGPT, Claude, Gemini, Copilot, and your business systems through one AI Integration Hub."
            centered
        />

      <div class="mt-10 flex justify-center">
        <AppButton
          size="lg"
          :right-icon="ArrowDown"
          @click="scrollToForm"
        >
          Request a Demo
        </AppButton>
      </div>

    </AppContainer>
  </section>

  <!-- Demo Form -->
  <section
    ref="formRef"
    class="py-20"
  >
  <AppContainer class="max-w-4xl">

  <AppCard class="p-6 md:p-8 lg:p-10">

    <!-- Success State -->

    <div
      v-if="submitted"
      class="py-10 text-center"
    >
      <div
        class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600/15"
      >
        <Check
          class="h-8 w-8 text-red-500"
        />
      </div>

      <h2 class="mt-6 text-3xl font-bold text-white">
        Demo Request Received
      </h2>

      <p class="mx-auto mt-4 max-w-xl text-zinc-400">
        Thank you for your interest in Meshiro.
        Our team will review your request and contact you shortly.
      </p>

      <div class="mt-8">
        <AppButton to="/">
          Back to Home
        </AppButton>
      </div>
    </div>

    <!-- Form -->

    <form
      v-else
      class="space-y-8"
      @submit.prevent="submit"
    >

      <SectionHeading
        title="Request a Demo"
        description="Complete the form below and we'll get in touch."
      />

      <!-- Basic Information -->

      <div class="grid gap-6 md:grid-cols-2">

        <AppInput
          v-model="form.name"
          label="Full Name"
          required
          :error="errors.name"
        />

        <AppInput
          v-model="form.company"
          label="Company"
          required
          :error="errors.company"
        />

        <AppInput
          v-model="form.email"
          label="Work Email"
          type="email"
          required
          :error="errors.email"
        />

        <AppInput
          v-model="form.phone"
          label="Phone Number"
        />

      </div>

      <!-- Company Details -->

      <div class="grid gap-6 md:grid-cols-2">

        <AppSelect
          v-model="form.companySize"
          label="Company Size"
          placeholder="Select company size"
          :options="companySizes"
          required
          :error="errors.companySize"
        />

        <AppSelect
          v-model="form.industry"
          label="Industry"
          placeholder="Select industry"
          :options="industries"
          required
          :error="errors.industry"
        />

        <AppInput
          v-model="form.country"
          label="Country"
          required
          :error="errors.country"
        />

        <AppSelect
          v-model="form.aiPlatform"
          label="Current AI Platform"
          placeholder="Select AI platform"
          :options="aiPlatforms"
        />

      </div>

      <!-- Message -->

      <AppTextarea
        v-model="form.message"
        label="Message"
        placeholder="Tell us a little about your organization and how you'd like to use Meshiro."
        :maxlength="500"
      />

      <div class="flex justify-end">

        <AppButton
          type="submit"
          size="lg"
          :loading="loading"
        >
          Request Demo
        </AppButton>

      </div>

    </form>

  </AppCard>

</AppContainer>
  </section>

  <AppFooter />
</template>