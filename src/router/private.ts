import type { RouteRecordRaw } from 'vue-router'

const privateRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "homeView" */ '@/views/HomeView.vue'),
    meta: {
      requiresAuth: true,
      asideMenu: true
    },
    children: [
      {
        path: '/stats',
        name: 'stats',
        component: () => import(/* webpackChunkName: "stats" */ '@/views/Stats.vue')
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "products" */ '@/views/Dashboard.vue')
      }
    ]
  }
]

export default privateRoutes
