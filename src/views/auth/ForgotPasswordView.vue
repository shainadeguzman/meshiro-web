<!--
===============================================================================
Component: ForgotPasswordView.vue

Purpose:
Displays the password reset request page for Meshiro users.

Props:
None

Slots:
None

Usage:

<Route
  path="/forgot-password"
  component="{ForgotPasswordView}"
/>

Notes:
- Uses AuthLayout for consistent authentication page layout.
- Uses AppInput and AppButton components.
- Includes client-side validation.
- Shows an inline success state after submission.
- Ready to integrate with the authentication API.
===============================================================================
-->

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Mail, ArrowLeft } from 'lucide-vue-next'

import AuthLayout from '@/components/layout/AuthLayout.vue'
import AppInput from '@/components/forms/AppInput.vue'
import AppButton from '@/components/ui/AppButton.vue'

const loading = ref(false)
const emailSent = ref(false)

const form = reactive({
  username: '',
})

const errors = reactive({
  username: '',
})

function validate() {
  errors.username = ''

  let valid = true

  if (!form.username.trim()) {
    errors.username = 'Email or username is required.'
    valid = false
  }

  return valid
}

async function submit() {
  if (!validate()) return

  loading.value = true

  try {
    // TODO:
    // await authStore.forgotPassword(form.username)

    console.log(form.username)

    emailSent.value = true
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <AuthLayout>

    <template #title>
      Forgot Password
    </template>

    <template #subtitle>
      Enter your email or username and we'll send you a password reset link.
    </template>

    <!-- Request Form -->

    <form
      v-if="!emailSent"
      class="space-y-6"
      @submit.prevent="submit"
    >
      <AppInput
        v-model="form.username"
        label="Email or Username"
        placeholder="Enter your email or username"
        autocomplete="username"
        required
        :error="errors.username"
      />

      <AppButton
        type="submit"
        full-width
        :loading="loading"
        :right-icon="Mail"
      >
        Send Reset Link
      </AppButton>
    </form>

    <!-- Success State -->

    <div
      v-else
      class="space-y-6 text-center"
    >
      <div
        class="
          mx-auto
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-red-600/15
          text-red-500
        "
      >
        <Mail class="h-8 w-8" />
      </div>

      <div class="space-y-2">
        <h2 class="text-xl font-bold">
          Check Your Email
        </h2>

        <p class="text-sm leading-7 text-zinc-400">
          If an account exists with the email or username you entered,
          we've sent instructions to reset your password.
        </p>
      </div>

      <AppButton
        to="/login"
        full-width
      >
        Back to Login
      </AppButton>
    </div>

    <template #footer>

      <RouterLink
        to="/login"
        class="
          inline-flex
          items-center
          gap-2
          font-medium
          text-zinc-400
          transition
          hover:text-white
        "
      >
        <ArrowLeft class="h-4 w-4" />

        Back to Login
      </RouterLink>

    </template>

  </AuthLayout>
</template>