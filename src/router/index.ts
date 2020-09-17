import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'origin',
    component:Home
  },
  // {
  //   path: '/',
  //   name: 'origin',
  //   component:login
  // },
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
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue')
  },
  {
    path: '/pro',
    name: 'pro',
    component: () => import('../views/pro.vue')
  },
  {
    path: '/webTest',
    name: 'webTest',
    component: () => import('../views/webTest.vue')
  },
  {
    path: '/jsTest',
    name: 'jsTest',
    component: () => import('../views/jsTest.vue')
  },
  {
    path: '/cssTest',
    name: 'cssTest',
    component: () => import('../views/cssTest.vue')
  },
  {
    path: '/ani_1',
    name: 'ani_1',
    component: () => import('../views/ani/ani_1.vue')
  },
  {
    path: '/ani_2',
    name: 'ani_2',
    component: () => import('../views/ani/ani_2.vue')
  },
  {
    path: '/ani_3',
    name: 'ani_3',
    component: () => import('../views/ani/ani_3.vue')
  },
  {
    path: '/loadingList',
    name: 'loadingList',
    component: () => import('../components/infLoadingList.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next)=>{
  console.log('路由守卫')
  next()
})
export default router
