import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

export const constantRoutes: Array<RouteConfig> = [
  // {
  //   path: '/',
  //   name: 'origin',
  //   component:Home
  // },
  {
    path: '/',
    name: 'index',
    component:Home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/vTable',
    name: 'vTable',
    component: () => import('../views/backups/vTable.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue')
  },
]

const router = new VueRouter({
  // mode: 'hash',
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes:constantRoutes
})
export default router
