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
    component:login
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
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue')
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
    path: '/ani_4',
    name: 'ani_4',
    component: () => import('../views/ani/ani_4.vue')
  },
  {
    path: '/ani_5',
    name: 'ani_5',
    component: () => import('../views/ani/ani_5.vue')
  },
  {
    path: '/loadingList',
    name: 'loadingList',
    component: () => import('../components/infLoadingList.vue')
  },
  {
    path: '/uploadTest',
    name: 'uploadTest',
    component: () => import('../views/practice/uploadTest.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes:constantRoutes
})
// router.addRoutes([
//   {
//     path: '/treeList/spring',
//     name: 'spring',
//     component: () => import('../views/treeList/spring')
//   },
//   {
//     path: '/treeList/summer',
//     name: 'summer',
//     component: () => import('../views/treeList/summer/summer.vue')
//   },
//   {
//     path: '/treeList/fall',
//     name: 'fall',
//     component: () => import('../views/treeList/fall/fall.vue')
//   },
//   {
//     path: '/treeList/winter',
//     name: 'winter',
//     component: () => import('../views/treeList/winter/winter.vue')
//   }]
// )
export default router
