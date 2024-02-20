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
        path: '/productos',
        name: 'products',
        component: () => import(/* webpackChunkName: "products" */ '@/views/Products.vue')
      },
      {
        path: '/ventas',
        name: 'sellings',
        component: () => import(/* webpackChunkName: "products" */ '@/views/Sellings.vue')
      },
      {
        path: '/estadisticas',
        name: 'stats',
        component: () => import(/* webpackChunkName: "products" */ '@/views/Stats.vue')
      }
    ]
  }
]

export default privateRoutes
