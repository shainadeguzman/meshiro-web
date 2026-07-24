import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/HomeView.vue'),
    },
    {
      path: '/how-it-works',
      component: () => import('@/views/HowItWorksView.vue'),
    },
    {
      path: '/pricing',
      component: () => import('@/views/PricingView.vue'),
    },
    {
      path: '/resources',
      component: () => import('@/views/ResourcesView.vue'),
    },
    {
      path: '/about',
      component: () => import('@/views/company/AboutView.vue'),
    },
    {
      path: '/about',
      component: () => import('@/views/company/AboutView.vue'),
    },
    {
      path: '/contact',
      component: () => import('@/views/company/ContactView.vue'),
    },
    {
      path: '/login',
      component: () => import('@/views/auth/LoginView.vue'),
    },
    {
      path: '/register',
      component: () => import('@/views/auth/RegisterView.vue'),
    },
    {
      path: '/terms',
      component: () => import('@/views/legal/TermsView.vue'),
    },
    {
      path: '/forgot-password',
      component: () => import('@/views/auth/ForgotPasswordView.vue'),
    },
    {
      path: '/book-demo',
      component: () => import('@/views/marketing/BookDemoView.vue'),
    },
    {
      path: '/platform',
      component: () => import('@/views/marketing/PlatformView.vue'),
    },
    {
      path: '/tools',
      component: () => import('@/views/marketing/AIModelsView.vue'),
    },
    {
      path: '/connectors',
      component: () => import('@/views/marketing/ConnectorsView.vue'),
    },
    {
      path: '/security',
      component: () => import('@/views/marketing/SecurityView.vue'),
    },
    {
      path: '/support',
      component: () => import('@/views/solutions/SupportView.vue'),
    },
    {
      path: '/it',
      component: () => import('@/views/solutions/ITView.vue'),
    },
    {
      path: '/docs',
      component: () => import('@/views/resources/DocumentationView.vue'),
    },
    {
      path: '/faq',
      component: () => import('@/views/resources/FAQView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

export default router