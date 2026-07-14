<!--
===============================================================================
Component: AppSelect.vue

Purpose:
Reusable select/dropdown component used throughout the Meshiro application.

Props:
- modelValue (string | number)
  Selected value.

- label (string)
  Field label.

- placeholder (string)
  Placeholder option displayed when no value is selected.

- options (Array)
  List of selectable options.

- required (boolean)
  Displays required indicator.

- disabled (boolean)
  Disables the field.

- error (string)
  Validation error.

- helper (string)
  Helper text displayed below the field.

Slots:
None

Usage:

<AppSelect
  v-model="companySize"
  label="Company Size"
  placeholder="Select company size"
  :options="companySizes"
/>

Notes:
- Uses native select for accessibility.
- Styled consistently with AppInput.
- Supports validation and helper text.
===============================================================================
-->

<script setup lang="ts">
import { computed } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

export interface SelectOption {
  label: string
  value: string | number
}

const props = withDefaults(
  defineProps<{
    modelValue: string | number
    label?: string
    placeholder?: string
    options: SelectOption[]
    required?: boolean
    disabled?: boolean
    helper?: string
    error?: string
  }>(),
  {
    placeholder: 'Select an option',
    required: false,
    disabled: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const model = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})
</script>

<template>
  <div class="space-y-2">

    <!-- Label -->

    <label
      v-if="label"
      class="block text-sm font-medium text-zinc-200"
    >
      {{ label }}

      <span
        v-if="required"
        class="text-red-500"
      >
        *
      </span>
    </label>

    <!-- Select -->

    <div class="relative">

      <select
        v-model="model"
        :disabled="disabled"
        class="
          h-12
          w-full
          appearance-none
          rounded-xl
          border
          bg-[#111111]
          px-4
          pr-10
          text-sm
          text-white
          transition
          outline-none

          border-white/10

          hover:border-white/20

          focus:border-red-500

          disabled:cursor-not-allowed
          disabled:opacity-50
        "
        :class="{
          'border-red-500': error,
        }"
      >
        <option
          disabled
          value=""
        >
          {{ placeholder }}
        </option>

        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>

      </select>

      <ChevronDown
        class="
          pointer-events-none
          absolute
          right-4
          top-1/2
          h-4
          w-4
          -translate-y-1/2
          text-zinc-500
        "
      />

    </div>

    <!-- Helper -->

    <p
      v-if="!error && helper"
      class="text-xs text-zinc-500"
    >
      {{ helper }}
    </p>

    <!-- Error -->

    <p
      v-if="error"
      class="text-sm text-red-500"
    >
      {{ error }}
    </p>

  </div>
</template>