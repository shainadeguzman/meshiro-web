<!--
===============================================================================
Component: AppCheckbox.vue

Purpose:
Reusable checkbox component used throughout the Meshiro application.

Props:
- modelValue (boolean)
  Current checked state.

- label (string)
  Checkbox label.

- helper (string)
  Helper text displayed below the label.

- disabled (boolean)
  Disables the checkbox.

- required (boolean)
  Shows a required indicator.

- error (string)
  Validation error displayed below the checkbox.

Slots:
- default
  Custom checkbox label.

Usage:

<AppCheckbox
  v-model="agree"
  label="I agree to the Terms & Conditions."
/>

<AppCheckbox v-model="remember">
  Remember Me
</AppCheckbox>

Notes:
- Supports v-model.
- Uses a custom styled checkbox.
- Error message overrides helper text.
- Used for authentication, settings, permissions, and forms.
===============================================================================
-->

<script setup lang="ts">
import { Check } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    label?: string
    helper?: string
    disabled?: boolean
    required?: boolean
    error?: string
  }>(),
  {
    disabled: false,
    required: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

function toggle() {
  if (props.disabled) return

  emit(
    'update:modelValue',
    !props.modelValue,
  )
}
</script>

<template>
  <div class="space-y-2">

    <label
      class="flex cursor-pointer items-start gap-3"
      :class="{
        'cursor-not-allowed opacity-50': disabled,
      }"
    >
      <!-- Hidden Native Input -->

      <input
        type="checkbox"
        class="sr-only"
        :checked="modelValue"
        :disabled="disabled"
        @change="toggle"
      >

      <!-- Custom Checkbox -->

      <div
        class="
          mt-0.5
          flex
          h-5
          w-5
          shrink-0
          items-center
          justify-center
          rounded-md
          border
          transition-all
          duration-200
        "
        :class="[
          modelValue
            ? 'border-red-600 bg-red-600 text-white'
            : 'border-white/20 bg-[#0d0d0d]',

          error && !modelValue
            ? 'border-red-500'
            : '',
        ]"
      >
        <Check
          v-if="modelValue"
          class="h-3.5 w-3.5"
          :stroke-width="3"
        />
      </div>

      <!-- Label -->

      <div class="min-w-0 flex-1">

        <div
          class="
            text-sm
            leading-6
            text-zinc-300
          "
        >
          <slot>
            {{ label }}

            <span
              v-if="required"
              class="text-red-500"
            >
              *
            </span>
          </slot>
        </div>

        <p
          v-if="!error && helper"
          class="mt-1 text-xs text-zinc-500"
        >
          {{ helper }}
        </p>

      </div>

    </label>

    <!-- Error -->

    <p
      v-if="error"
      class="pl-8 text-sm text-red-500"
    >
      {{ error }}
    </p>

  </div>
</template>