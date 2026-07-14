<!--
===============================================================================
Component: AuthLayout.vue

Purpose:
Provides the shared layout for all authentication pages including Login,
Register, Forgot Password, and future auth-related screens.

Props:
None

Slots:
- title
  Page heading.

- subtitle
  Supporting text displayed below the title.

- default
  Main authentication form.

- footer
  Footer links (Login, Register, Forgot Password, etc.)

Usage:

<AuthLayout>
  <template #title>
    Welcome Back
  </template>

  <template #subtitle>
    Sign in to your Meshiro account.
  </template>

  <form>
    ...
  </form>

  <template #footer>
    Don't have an account?
  </template>
</AuthLayout>

Notes:
- Uses AppContainer for consistent spacing.
- Displays the Meshiro logo at the top.
- Centers content vertically on desktop.
- Optimized for mobile, tablet, and desktop.
- Intended to wrap only authentication forms.
===============================================================================
-->

<script setup lang="ts">
import { RouterLink } from 'vue-router'

import AppContainer from '../ui/AppContainer.vue';
</script>

<template>
  <main
    class="
      min-h-screen
      bg-[#070707]
      text-white
    "
  >
    <AppContainer>
      <div
        class="
          flex
          min-h-screen
          items-center
          justify-center
          py-10
          sm:py-14
          lg:py-20
        "
      >
        <div
          class="
            w-full
            max-w-md
          "
        >
          <!-- Logo -->

          <RouterLink
            to="/"
            class="mb-10 flex justify-center"
          >
            <img
              src="@/assets/logo.png"
              alt="Meshiro"
              class="h-16 w-auto"
            >
          </RouterLink>

          <!-- Card -->

          <div
            class="
              rounded-3xl
              border
              border-white/10
              bg-[#111111]
              p-6
              shadow-2xl
              shadow-black/40

              sm:p-8
            "
          >
            <!-- Heading -->

            <header class="text-center">
              <h1
                class="
                  text-3xl
                  font-extrabold
                  tracking-tight
                  sm:text-4xl
                "
              >
                <slot name="title" />
              </h1>

              <p
                class="
                  mt-3
                  text-sm
                  leading-relaxed
                  text-zinc-400
                "
              >
                <slot name="subtitle" />
              </p>
            </header>

            <!-- Form -->

            <div class="mt-8">
              <slot />
            </div>

            <!-- Footer -->

            <footer
              v-if="$slots.footer"
              class="
                mt-8
                border-t
                border-white/10
                pt-6
                text-center
                text-sm
                text-zinc-400
              "
            >
              <slot name="footer" />
            </footer>
          </div>
        </div>
      </div>
    </AppContainer>
  </main>
</template>