import type { RouteRecordRaw } from 'vue-router'

const privateRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "homeView" */ '@/views/HomeView.vue')
  }
]

export default privateRoutes
