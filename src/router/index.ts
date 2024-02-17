import { createRouter, createWebHistory } from 'vue-router'
import privateRoutes from './private'
import publicRoutes from './public'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...privateRoutes, ...publicRoutes]
})

import { useAuthStore } from '@/stores'

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuthStore()
  const { meta } = to

  if (((isAuthenticated || meta.public) && to.name != 'login') || (meta.public && !isAuthenticated))
    next()
  else if (meta.requiresAuth && !isAuthenticated) next('/login')
  else next('/')
})
export default router
