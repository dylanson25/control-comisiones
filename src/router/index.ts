import { createRouter, createWebHistory } from 'vue-router'
import privateRoutes from './private'
import publicRoutes from './public'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...privateRoutes, ...publicRoutes]
})

export default router
