// addRoutes
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import axios from "axios"

NProgress.configure({ showSpinner: false })
const whiteList = ['/login', '/auth-redirect', '/bind', '/register','jsTest']

router.beforeEach((to, from, next) => {
  NProgress.start()
  // token login 重定向
  // 判断刷新
  console.warn(from)
  if(!from.name){
    store.dispatch('GenerateRoutes').then(accessRoutes => {
      router.addRoutes(accessRoutes) // 动态添加可访问路由表 根据roles权限生成可访问的路由表
      // next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
      next()

    })
  }else{
    console.warn('直接跳转')
    next()
  }
  // next()
})

router.afterEach(() => {
  NProgress.done()
})
