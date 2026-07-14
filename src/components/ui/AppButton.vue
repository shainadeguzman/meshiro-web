<!--
===============================================================================
Component: AppButton.vue

Purpose:
Reusable button component used throughout the Meshiro website. Supports
multiple variants, sizes, loading state, buttons, router links, and external
links while maintaining a consistent design.

Props:
- variant (primary | secondary | outline | ghost)
  Controls the button appearance.

- size (sm | md | lg)
  Controls the button size.

- type (button | submit | reset)
  Native button type.

- to (string)
  Vue Router destination.

- href (string)
  External URL.

- disabled (boolean)
  Disables the component.

- loading (boolean)
  Shows a loading spinner.

- fullWidth (boolean)
  Makes the button span the full width of its parent.

Slots:
- default
  Button label.

- left-icon
  Optional icon before the label.

- right-icon
  Optional icon after the label.

Usage:

<AppButton>
  Book a Demo
</AppButton>

<AppButton variant="secondary">
  Explore Platform
</AppButton>

<AppButton to="/pricing">
  View Pricing
</AppButton>

<AppButton href="https://github.com">
  GitHub
</AppButton>

<AppButton>
  <template #left-icon>
    <i class="fa-solid fa-arrow-right"></i>
  </template>

  Get Started
</AppButton>

Notes:
Use this component for every button or CTA across the Meshiro website.
===============================================================================
-->

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue'
type IconComponent = FunctionalComponent<HTMLAttributes & VNodeProps>

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    size?: Size
    type?: 'button' | 'submit' | 'reset'
    to?: string
    href?: string
    disabled?: boolean
    loading?: boolean
    fullWidth?: boolean

    leftIcon?: IconComponent
    rightIcon?: IconComponent
  }>(),
  {
    variant: 'primary',
    size: 'md',
    type: 'button',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
)

const component = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})

const componentProps = computed(() => {
  if (props.to) {
    return {
      to: props.to,
    }
  }

  if (props.href) {
    return {
      href: props.href,
      target: '_blank',
      rel: 'noopener noreferrer',
    }
  }

  return {
    type: props.type,
    disabled: props.disabled || props.loading,
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return [
        'bg-zinc-900',
        'border',
        'border-zinc-700',
        'text-white',
        'hover:bg-zinc-800',
      ]

    case 'outline':
      return [
        'border',
        'border-red-600',
        'text-red-500',
        'hover:bg-red-600',
        'hover:text-white',
      ]

    case 'ghost':
      return [
        'bg-transparent',
        'text-white',
        'hover:bg-white/10',
      ]

    default:
      return [
        'bg-gradient-to-r',
        'from-red-600',
        'to-red-500',
        'text-white',
        'shadow-lg',
        'shadow-red-600/30',
        'hover:shadow-red-500/40',
      ]
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-10 px-4 text-sm'

    case 'lg':
      return 'h-14 px-8 text-base'

    default:
      return 'h-12 px-6 text-sm'
  }
})
</script>

<template>
  <component
    :is="component"
    v-bind="componentProps"
    :class="[
      'inline-flex items-center justify-center gap-2 rounded-xl cursor-pointer',
      'font-semibold',
      'transition-all duration-200',
      'focus:outline-none',
      'focus-visible:border-red-500',
      'focus-visible:shadow-lg',
      'focus-visible:shadow-red-600/20',
      'disabled:pointer-events-none',
      'disabled:opacity-50',
      fullWidth && 'w-full',
      sizeClasses,
      variantClasses,
    ]"
  >
    <svg
      v-if="loading"
      class="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="3"
        class="opacity-20"
      />

      <path
        fill="currentColor"
        d="M22 12A10 10 0 0012 2v3a7 7 0 017 7z"
      />
    </svg>

    <!-- Left Icon -->
    <component
        :is="props.leftIcon"
        v-if="props.leftIcon && !loading"
        class="h-4 w-4 shrink-0"
    />

    <slot name="left-icon" />

    <!-- Label -->
    <slot />

    <!-- Right Icon -->
    <component
        :is="props.rightIcon"
        v-if="props.rightIcon && !loading"
        class="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
    />

    <slot name="right-icon" />
  </component>
</template>