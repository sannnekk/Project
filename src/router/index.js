import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/home-page.vue')
    },
    {
      path: '/card/:id',
      name: 'Card',
      component: () => import('../views/card-page.vue')
    }
  ]
})

export default router
