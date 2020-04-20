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
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/loading',
    name: 'loading',
    component: () => import('../views/loading.vue')
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
