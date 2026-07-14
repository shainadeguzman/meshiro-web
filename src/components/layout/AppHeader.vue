<!--
===============================================================================
Component: AppHeader.vue

Purpose:
Displays the primary website navigation for the Meshiro marketing site.

Props:
None

Slots:
None

Usage:

<AppHeader />

Notes:
- Uses AppContainer for consistent page spacing.
- Uses AppButton for the primary CTA.
- Desktop navigation collapses into a mobile menu.
- Dropdown functionality will be implemented later.
===============================================================================
-->

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import AppContainer from '../ui/AppContainer.vue'
import AppButton from '../ui/AppButton.vue'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { ChevronDown, Menu, MoveRight, X } from 'lucide-vue-next'

const route = useRoute()

const mobileMenuOpen = ref(false)
const openDropdown = ref<string | null>(null)
const mobileOpenGroups = ref<string[]>([])
const header = ref<HTMLElement>()

const navigation = [
  {
    label: 'Product',
    children: [
      { label: 'Platform', to: '/platform' },
      { label: 'AI Tools', to: '/tools' },
      { label: 'Connectors', to: '/connectors' },
      { label: 'Security', to: '/security' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { label: 'Support', to: '/support' },
      { label: 'IT', to: '/it' },
    ],
  },
  {
    label: 'Pricing',
    to: '/pricing',
  },
  {
    label: 'Resources',
    children: [
      { label: 'Documentation', to: '/docs' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    label: 'Company',
    children: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

function toggleDropdown(label: string) {
  openDropdown.value =
    openDropdown.value === label ? null : label
}

function openMenu(label: string) {
  openDropdown.value = label
}

function closeMenu() {
  openDropdown.value = null
}

function toggleMobileGroup(label: string) {
  if (mobileOpenGroups.value.includes(label)) {
    mobileOpenGroups.value =
      mobileOpenGroups.value.filter((x) => x !== label)
  } else {
    mobileOpenGroups.value.push(label)
  }
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
  mobileOpenGroups.value = []
}

function handleClickOutside(e: MouseEvent) {
  if (
    header.value &&
    !header.value.contains(e.target as Node)
  ) {
    openDropdown.value = null
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-white/5 bg-black/30 backdrop-blur-xl"
  >
    <AppContainer>
      <div
        class="grid h-22 grid-cols-[auto_1fr_auto] items-center gap-8"
      >
        <!-- Logo -->
        <RouterLink
          to="/"
          class="shrink-0"
        >
          <img
            src="@/assets/logo.png"
            alt="Meshiro"
            class="h-16 w-auto"
          >
        </RouterLink>

        <!-- Desktop Navigation -->
        <!-- Desktop Navigation -->

<nav class="hidden justify-center lg:flex">
  <ul class="flex items-center gap-8">

    <li
      v-for="item in navigation"
      :key="item.label"
      class="relative"
      @mouseenter="item.children && openMenu(item.label)"
      @mouseleave="item.children && closeMenu()"
    >

      <!-- ==========================
           Normal Link
      =========================== -->

      <RouterLink
        v-if="!item.children"
        :to="item.to!"
        class="text-sm font-medium text-gray-300 transition hover:text-white"
        :class="{
          'text-white': route.path === item.to,
        }"
      >
        {{ item.label }}
      </RouterLink>

      <!-- ==========================
           Dropdown Trigger
      =========================== -->

      <button
        v-else
        class="
          flex
          items-center
          gap-1
          text-sm
          font-medium
          text-gray-300
          transition
          hover:text-white
        "
        @click.stop="toggleDropdown(item.label)"
      >
        {{ item.label }}

        <ChevronDown
          class="h-4 w-4 transition duration-200"
          :class="{
            'rotate-180': openDropdown === item.label,
          }"
        />
      </button>

      <!-- ==========================
           Dropdown
      =========================== -->

      <Transition
        enter-active-class="transition duration-200"
        leave-active-class="transition duration-150"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="
            item.children &&
            openDropdown === item.label
          "
          class="
            absolute
            left-1/2
            top-full
            pt-4
            w-72
            -translate-x-1/2

            rounded-2xl

            border
            border-white/10

            bg-[#0c0c0c]

            p-2

            shadow-2xl
            shadow-black/40
          "
        >

          <RouterLink
            v-for="child in item.children"
            :key="child.label"
            :to="child.to"
            class="
              block

              rounded-xl

              px-4
              py-3

              transition

              hover:bg-white/5
            "
          >

            <div
              class="
                text-sm
                font-semibold
                text-white
              "
            >
              {{ child.label }}
            </div>

          </RouterLink>

        </div>

      </Transition>

    </li>

  </ul>
</nav>

        <!-- Desktop Actions -->
        <div class="hidden items-center gap-3 lg:flex">
          <AppButton
            variant="ghost"
            to="/login"
          >
            Log In
          </AppButton>

          <AppButton
            to="/book-demo"
            :right-icon="MoveRight"
          >
            Book a Demo
          </AppButton>
        </div>

        <!-- Mobile Menu Button -->

<button
  class="
    ml-auto
    flex
    h-11
    w-11
    items-center
    justify-center
    rounded-xl
    text-white
    transition
    hover:bg-white/5
    lg:hidden
  "
  @click="mobileMenuOpen = !mobileMenuOpen"
>
  <Menu
    v-if="!mobileMenuOpen"
    class="h-6 w-6"
  />

  <X
    v-else
    class="h-6 w-6"
  />
</button>
      </div>
    </AppContainer>

    <!-- Mobile Navigation -->
    <Transition
  enter-active-class="transition duration-200"
  leave-active-class="transition duration-150"
  enter-from-class="opacity-0 -translate-y-2"
  enter-to-class="opacity-100 translate-y-0"
  leave-from-class="opacity-100 translate-y-0"
  leave-to-class="opacity-0 -translate-y-2"
>
  <div
    v-if="mobileMenuOpen"
    class="
      border-t
      border-white/10
      bg-[#090909]
      lg:hidden
    "
  >
    <AppContainer>

      <nav class="py-6">

        <ul class="space-y-2">

          <li
            v-for="item in navigation"
            :key="item.label"
            class="border-b border-white/5 pb-2"
          >

            <!-- ==========================
                 Normal Link
            =========================== -->

            <RouterLink
              v-if="!item.children"
              :to="item.to!"
              class="
                flex
                h-12
                items-center
                text-base
                font-medium
                text-white
              "
              @click="closeMobileMenu"
            >
              {{ item.label }}
            </RouterLink>

            <!-- ==========================
                 Accordion Button
            =========================== -->

            <template v-else>

              <button
                class="
                  flex
                  w-full
                  items-center
                  justify-between
                  py-3
                  text-left
                  text-base
                  font-medium
                  text-white
                "
                @click="toggleMobileGroup(item.label)"
              >
                {{ item.label }}

                <ChevronDown
                  class="h-5 w-5 transition duration-200"
                  :class="{
                    'rotate-180':
                      mobileOpenGroups.includes(item.label),
                  }"
                />
              </button>

              <!-- Accordion -->

              <Transition
                enter-active-class="transition-all duration-200"
                leave-active-class="transition-all duration-150"
                enter-from-class="max-h-0 opacity-0"
                enter-to-class="max-h-96 opacity-100"
                leave-from-class="max-h-96 opacity-100"
                leave-to-class="max-h-0 opacity-0"
              >
                <div
                  v-if="mobileOpenGroups.includes(item.label)"
                  class="
                    overflow-hidden
                    pb-2
                    pl-4
                  "
                >

                  <RouterLink
                    v-for="child in item.children"
                    :key="child.label"
                    :to="child.to"
                    class="
                      block
                      rounded-lg
                      px-3
                      py-3
                      text-sm
                      text-zinc-400
                      transition
                      hover:bg-white/5
                      hover:text-white
                    "
                    @click="closeMobileMenu"
                  >
                    {{ child.label }}
                  </RouterLink>

                </div>

              </Transition>

            </template>

          </li>

        </ul>

        <!-- CTA -->

        <div class="mt-8 flex flex-col gap-3">

          <AppButton
            variant="ghost"
            to="/login"
            full-width
            @click="closeMobileMenu"
          >
            Log In
          </AppButton>

          <AppButton
            to="/book-demo"
            :right-icon="MoveRight"
            full-width
            @click="closeMobileMenu"
          >
            Book a Demo
          </AppButton>

        </div>

      </nav>

    </AppContainer>
  </div>
</Transition>
  </header>
</template>