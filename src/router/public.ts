import type { RouteRecordRaw } from 'vue-router'

const publicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "authLogin" */ '@/views/AuthLogin.vue'),
    meta: {
      public: true
    }
  }
]

export default publicRoutes
