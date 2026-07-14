<!--
===============================================================================
Component: LoginView.vue

Purpose:
Displays the login page for Meshiro users.

Props:
None

Slots:
None

Usage:

<Route
  path="/login"
  component="{LoginView}"
/>

Notes:
- Uses AuthLayout for consistent authentication page layout.
- Uses AppInput and AppButton components.
- Includes client-side validation.
- Ready to integrate with the authentication API.
===============================================================================
-->

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { LogIn } from 'lucide-vue-next'

import AuthLayout from '@/components/layout/AuthLayout.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppInput from '@/components/forms/AppInput.vue'

const loading = ref(false)

const form = reactive({
  username: '',
  password: '',
})

const errors = reactive({
  username: '',
  password: '',
})

function validate() {
  errors.username = ''
  errors.password = ''

  let valid = true

  if (!form.username.trim()) {
    errors.username = 'Email or username is required.'
    valid = false
  }

  if (!form.password) {
    errors.password = 'Password is required.'
    valid = false
  } else if (form.password.length < 8) {
    errors.password = 'Password must be at least 8 characters.'
    valid = false
  }

  return valid
}

async function submit() {
  if (!validate()) return

  loading.value = true

  try {
    // TODO:
    // await authStore.login(form)

    console.log('Login', form)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <AuthLayout>
    <template #title>
      Welcome Back
    </template>

    <template #subtitle>
      Sign in to your Meshiro account.
    </template>

    <form
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

      <AppInput
        v-model="form.password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        autocomplete="current-password"
        required
        :error="errors.password"
      />

      <div class="flex justify-end">
        <RouterLink
          to="/forgot-password"
          class="text-sm text-zinc-400 transition hover:text-red-500"
        >
          Forgot Password?
        </RouterLink>
      </div>

      <AppButton
        type="submit"
        full-width
        :loading="loading"
        :right-icon="LogIn"
      >
        Sign In
      </AppButton>
    </form>

    <template #footer>
      <p class="text-zinc-400">
        Don't have an account?

        <RouterLink
          to="/register"
          class="ml-1 font-semibold text-white transition hover:text-red-500"
        >
          Create one
        </RouterLink>
      </p>
    </template>
  </AuthLayout>
</template>