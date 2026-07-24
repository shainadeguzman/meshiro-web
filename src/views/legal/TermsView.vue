<script setup lang="ts">
import { RouterLink } from 'vue-router'

import AppFooter from '@/components/layout/AppFooter.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppContainer from '@/components/ui/AppContainer.vue'

const sections = [
  {
    title: '1. Acceptance of these terms',
    paragraphs: [
      'By creating a Meshiro account, accessing our website, or using our services, you agree to these Terms and Conditions. If you do not agree, please do not use Meshiro.',
      'If you use Meshiro on behalf of an organization, you confirm that you have the authority to accept these terms for that organization.',
    ],
  },
  {
    title: '2. Your account',
    paragraphs: [
      'You must provide accurate and complete information when you create an account and keep it up to date. You are responsible for keeping your sign-in credentials confidential and for activity performed through your account.',
      'Please contact us promptly if you believe your account has been accessed without your permission.',
    ],
  },
  {
    title: '3. Acceptable use',
    paragraphs: [
      'You may use Meshiro only in compliance with applicable laws and these terms. Do not misuse the service, attempt to disrupt it, access it without authorization, introduce malicious code, or use it to violate the rights of others.',
      'You are responsible for ensuring that the information and content you provide through Meshiro may be used by you and your organization.',
    ],
  },
  {
    title: '4. Your data and content',
    paragraphs: [
      'You retain ownership of the content and data you submit to Meshiro. You grant us the limited permission needed to host, process, and display that content solely to provide, secure, and improve the service for you.',
      'Please avoid submitting sensitive information unless your organization has confirmed that Meshiro is approved for that use.',
    ],
  },
  {
    title: '5. Third-party services',
    paragraphs: [
      'Meshiro may connect with third-party services. Their availability and use are subject to the terms and privacy practices of those providers. Meshiro is not responsible for third-party services or their content.',
    ],
  },
  {
    title: '6. Intellectual property',
    paragraphs: [
      'Meshiro, its design, software, and branding are protected by applicable intellectual-property laws. These terms do not grant you ownership of Meshiro or the right to use our branding without prior written permission.',
    ],
  },
  {
    title: '7. Service availability and changes',
    paragraphs: [
      'We work to keep Meshiro available and secure, but we cannot guarantee uninterrupted or error-free access. We may update, modify, or discontinue parts of the service when reasonably necessary.',
    ],
  },
  {
    title: '8. Disclaimer and limitation of liability',
    paragraphs: [
      'Meshiro is provided on an “as is” and “as available” basis to the extent permitted by law. We do not make warranties that the service will meet every requirement or be free from errors.',
      'To the extent permitted by law, Meshiro will not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the service.',
    ],
  },
  {
    title: '9. Suspension and termination',
    paragraphs: [
      'We may suspend or end access to Meshiro when necessary to protect the service, comply with law, or address a violation of these terms. You may stop using the service at any time.',
    ],
  },
  {
    title: '10. Changes to these terms',
    paragraphs: [
      'We may revise these terms from time to time. When we make a material change, we will update the date on this page and, where appropriate, provide additional notice. Continued use of Meshiro after an update means you accept the revised terms.',
    ],
  },
]
</script>

<template>
  <AppHeader />

  <main>
    <section class="border-b border-white/10 py-16 sm:py-20 lg:py-24">
      <AppContainer>
        <div class="mx-auto max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
            Legal
          </p>

          <h1 class="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Terms and Conditions
          </h1>

          <p class="mt-5 text-lg leading-8 text-zinc-400">
            These terms explain the rules for creating an account and using Meshiro.
          </p>

          <p class="mt-6 text-sm text-zinc-500">
            Last updated: July 24, 2026
          </p>
        </div>
      </AppContainer>
    </section>

    <section class="py-16 sm:py-20">
      <AppContainer>
        <div class="mx-auto max-w-3xl">
          <div class="rounded-3xl border border-white/10 bg-[#111317] p-6 sm:p-10">
            <div class="space-y-10">
              <section
                v-for="section in sections"
                :key="section.title"
              >
                <h2 class="text-xl font-semibold text-white sm:text-2xl">
                  {{ section.title }}
                </h2>

                <p
                  v-for="paragraph in section.paragraphs"
                  :key="paragraph"
                  class="mt-4 leading-7 text-zinc-400"
                >
                  {{ paragraph }}
                </p>
              </section>

              <section>
                <h2 class="text-xl font-semibold text-white sm:text-2xl">
                  11. Questions about these terms
                </h2>

                <p class="mt-4 leading-7 text-zinc-400">
                  If you have questions about these Terms and Conditions, please
                  <RouterLink
                    to="/contact"
                    class="font-medium text-white underline decoration-red-500/70 underline-offset-4 transition hover:text-red-400"
                  >
                    contact us
                  </RouterLink>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </AppContainer>
    </section>
  </main>

  <AppFooter />
</template>
