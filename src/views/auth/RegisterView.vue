<!--
===============================================================================
Component: RegisterView.vue

Purpose:
Displays the account registration page for new Meshiro users.

Props:
None

Slots:
None

Usage:

<Route
  path="/register"
  component="{RegisterView}"
/>

Notes:
- Uses AuthLayout for consistent authentication page layout.
- Uses AppInput, AppCheckbox, and AppButton components.
- Includes client-side validation.
- Ready to integrate with the registration API.
===============================================================================
-->

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { UserPlus } from 'lucide-vue-next'

import AuthLayout from '@/components/layout/AuthLayout.vue'
import AppInput from '@/components/forms/AppInput.vue'
import AppCheckbox from '@/components/forms/AppCheckbox.vue'
import AppButton from '@/components/ui/AppButton.vue'

const loading = ref(false)

const form = reactive({
  username: '',
  email: '',
  password: '',
  agree: false,
})

const errors = reactive({
  username: '',
  email: '',
  password: '',
  agree: '',
})

const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate() {
  errors.username = ''
  errors.email = ''
  errors.password = ''
  errors.agree = ''

  let valid = true

  // Username

  if (!form.username.trim()) {
    errors.username = 'Username is required.'
    valid = false
  } else if (form.username.length < 3) {
    errors.username =
      'Username must be at least 3 characters.'
    valid = false
  } else if (form.username.length > 30) {
    errors.username =
      'Username cannot exceed 30 characters.'
    valid = false
  } else if (
    !/^[a-zA-Z0-9_]+$/.test(form.username)
  ) {
    errors.username =
      'Only letters, numbers, and underscores are allowed.'
    valid = false
  }

  // Email

  if (!form.email.trim()) {
    errors.email = 'Email is required.'
    valid = false
  } else if (!emailRegex.test(form.email)) {
    errors.email = 'Enter a valid email address.'
    valid = false
  }

  // Password

  if (!form.password) {
    errors.password = 'Password is required.'
    valid = false
  } else if (form.password.length < 8) {
    errors.password =
      'Password must be at least 8 characters.'
    valid = false
  }

  // Terms

  if (!form.agree) {
    errors.agree =
      'You must agree to the Terms & Conditions.'
    valid = false
  }

  return valid
}

async function submit() {
  if (!validate()) return

  loading.value = true

  try {
    // TODO:
    // await authStore.register(form)

    console.log('Register', form)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <AuthLayout>

    <template #title>
      Create Account
    </template>

    <template #subtitle>
      Start using Meshiro today.
    </template>

    <form
      class="space-y-6"
      @submit.prevent="submit"
    >

      <AppInput
        v-model="form.username"
        label="Username"
        placeholder="Choose a username"
        autocomplete="username"
        required
        :error="errors.username"
      />

      <AppInput
        v-model="form.email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        autocomplete="email"
        required
        :error="errors.email"
      />

      <AppInput
        v-model="form.password"
        label="Password"
        type="password"
        placeholder="Create a password"
        autocomplete="new-password"
        required
        :error="errors.password"
      />

      <AppCheckbox
        v-model="form.agree"
        :error="errors.agree"
      >
        I agree to the

        <RouterLink
          to="/terms"
          class="font-semibold text-white hover:text-red-500"
        >
          Terms &amp; Conditions
        </RouterLink>
      </AppCheckbox>

      <AppButton
        type="submit"
        full-width
        :loading="loading"
        :right-icon="UserPlus"
      >
        Create Account
      </AppButton>

    </form>

    <template #footer>

      <p class="text-zinc-400">
        Already have an account?

        <RouterLink
          to="/login"
          class="ml-1 font-semibold text-white transition hover:text-red-500"
        >
          Sign In
        </RouterLink>

      </p>

    </template>

  </AuthLayout>
</template>