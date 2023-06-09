import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home-page.vue')
    },
    {
      path: '/card/:id',
      name: 'card',
      component: () => import('../views/card-page.vue')
    },
    {
      path: '/learn-list',
      name: 'learn-list',
      component: () => import('../views/learn-list-page.vue')
    }
  ]
})

export default router
