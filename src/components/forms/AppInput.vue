<!--
===============================================================================
Component: AppInput.vue

Purpose:
Reusable text input component for forms throughout the Meshiro application.
Supports labels, validation errors, helper text, password visibility toggle,
and left/right icons.

Props:
- modelValue (string)
  Current input value.

- label (string)
  Input label.

- placeholder (string)
  Placeholder text.

- type (text | email | password)
  Native input type.

- name (string)
  Input name attribute.

- autocomplete (string)
  Browser autocomplete value.

- error (string)
  Validation error message.

- helper (string)
  Helper text shown below the input.

- disabled (boolean)
  Disables the input.

- required (boolean)
  Shows required indicator.

- leftIcon (Vue Component)
  Optional icon displayed on the left.

Slots:
None

Usage:

<AppInput
  v-model="email"
  label="Email"
  type="email"
/>

<AppInput
  v-model="password"
  label="Password"
  type="password"
/>

<AppInput
  v-model="username"
  label="Username"
  :left-icon="User"
/>

Notes:
- Supports v-model.
- Password fields automatically get a show/hide toggle.
- Error message takes priority over helper text.
- Use for all form inputs across the application.
===============================================================================
-->

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Eye, EyeOff } from 'lucide-vue-next'
import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue'

type IconComponent = FunctionalComponent<HTMLAttributes & VNodeProps>

const props = withDefaults(
  defineProps<{
    modelValue: string
    label?: string
    placeholder?: string
    type?: 'text' | 'email' | 'password'
    name?: string
    autocomplete?: string
    error?: string
    helper?: string
    disabled?: boolean
    required?: boolean
    leftIcon?: IconComponent
  }>(),
  {
    type: 'text',
    disabled: false,
    required: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const showPassword = ref(false)

const inputType = computed(() => {
  if (props.type !== 'password') return props.type

  return showPassword.value
    ? 'text'
    : 'password'
})

function updateValue(event: Event) {
  emit(
    'update:modelValue',
    (event.target as HTMLInputElement).value,
  )
}
</script>

<template>
  <div class="space-y-2">

    <!-- Label -->

    <label
      v-if="label"
      class="block text-sm font-medium text-white"
    >
      {{ label }}

      <span
        v-if="required"
        class="text-red-500"
      >
        *
      </span>
    </label>

    <!-- Input -->

    <div class="relative">

      <!-- Left Icon -->

      <component
        :is="leftIcon"
        v-if="leftIcon"
        class="
          pointer-events-none
          absolute
          left-4
          top-1/2
          h-5
          w-5
          -translate-y-1/2
          text-zinc-500
        "
      />

      <input
        :value="modelValue"
        :type="inputType"
        :placeholder="placeholder"
        :name="name"
        :autocomplete="autocomplete"
        :disabled="disabled"
        @input="updateValue"
        class="
          h-12
          w-full
          rounded-xl
          border
          bg-[#0c0c0c]
          px-4
          text-white
          outline-none
          transition

          placeholder:text-zinc-500

          focus:border-red-500

          disabled:cursor-not-allowed
          disabled:opacity-50
        "
        :class="[
          leftIcon && 'pl-11',
          type === 'password' && 'pr-12',
          error
            ? 'border-red-500'
            : 'border-white/10',
        ]"
      >

      <!-- Password Toggle -->

      <button
        v-if="type === 'password'"
        type="button"
        class="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-zinc-500
          transition
          hover:text-white
        "
        @click="showPassword = !showPassword"
      >
        <Eye
          v-if="!showPassword"
          class="h-5 w-5"
        />

        <EyeOff
          v-else
          class="h-5 w-5"
        />
      </button>

    </div>

    <!-- Error -->

    <p
      v-if="error"
      class="text-sm text-red-500"
    >
      {{ error }}
    </p>

    <!-- Helper -->

    <p
      v-else-if="helper"
      class="text-sm text-zinc-500"
    >
      {{ helper }}
    </p>

  </div>
</template>