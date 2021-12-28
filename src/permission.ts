// addRoutes
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import axios from "axios"

NProgress.configure({ showSpinner: false })
const whiteList = ['/login', '/auth-redirect', '/bind', '/register']

router.beforeEach((to, from, next) => {
  NProgress.start()
  console.warn(to)
  // token login 重定向
  // 刷新后页面空白？
  if(!from.name && store.getters.sthExo){
    console.warn('路由判断')
    store.dispatch('GenerateRoutes').then(accessRoutes => {
      console.warn(store.getters.totalRoutes)
      router.addRoutes(accessRoutes) // 动态添加可访问路由表 根据roles权限生成可访问的路由表
      store.commit('EXO_F')
      next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
      // next()

    })
  }else{
    console.warn('直接跳转')
    store.commit('EXO_T')
    next()
  }
  // next()
})

router.afterEach(() => {
  NProgress.done()
})
