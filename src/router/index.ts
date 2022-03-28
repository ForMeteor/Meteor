import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import mining from '../views/practice/mining.vue'

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
    // component: mining
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
    path: '/map',
    name: 'map',
    component: () => import('../views/practice/map.vue')
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
    path: '/levelTree',
    name: 'levelTree',
    component: () => import('../views/backups/levelTree.vue')
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
