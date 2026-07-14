<!--
===============================================================================
Component: AppTextarea.vue

Purpose:
Reusable textarea component used throughout the Meshiro application.

Props:
- modelValue (string)
  Current textarea value.

- label (string)
  Field label.

- placeholder (string)
  Placeholder text.

- rows (number)
  Number of visible rows.

- maxlength (number)
  Maximum number of characters.

- required (boolean)
  Displays required indicator.

- disabled (boolean)
  Disables the textarea.

- error (string)
  Validation error message.

- helper (string)
  Helper text displayed below the textarea.

Slots:
None

Usage:

<AppTextarea
  v-model="message"
  label="Message"
  placeholder="Tell us about your project..."
/>

Notes:
- Supports v-model.
- Character counter is shown when maxlength is provided.
- Styled consistently with AppInput and AppSelect.
===============================================================================
-->

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: string
    label?: string
    placeholder?: string
    rows?: number
    maxlength?: number
    required?: boolean
    disabled?: boolean
    helper?: string
    error?: string
  }>(),
  {
    rows: 5,
    placeholder: '',
    required: false,
    disabled: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
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

    <!-- Textarea -->

    <textarea
      v-model="model"
      :rows="rows"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :disabled="disabled"
      class="
        w-full
        resize-none
        rounded-xl
        border
        border-white/10
        bg-[#111111]
        px-4
        py-3
        text-sm
        leading-6
        text-white
        outline-none
        transition

        placeholder:text-zinc-500

        hover:border-white/20

        focus:border-red-500

        disabled:cursor-not-allowed
        disabled:opacity-50
      "
      :class="{
        'border-red-500': error,
      }"
    />

    <!-- Footer -->

    <div
      class="flex items-center justify-between"
    >
      <p
        v-if="!error && helper"
        class="text-xs text-zinc-500"
      >
        {{ helper }}
      </p>

      <span
        v-if="maxlength"
        class="ml-auto text-xs text-zinc-500"
      >
        {{ model.length }} / {{ maxlength }}
      </span>
    </div>

    <!-- Error -->

    <p
      v-if="error"
      class="text-sm text-red-500"
    >
      {{ error }}
    </p>

  </div>
</template>