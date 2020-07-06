import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next)=>{
  console.log('路由守卫')
  next()
})
export default router
