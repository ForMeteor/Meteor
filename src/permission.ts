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
  if(store.state.permission.addRoutes.length == 0){
    store.dispatch('GenerateRoutes').then(accessRoutes => {
      router.addRoutes(accessRoutes) // 动态添加可访问路由表 根据roles权限生成可访问的路由表
      // next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
      next()
    })
  }else{
    next()
  }
  // next()
})

router.afterEach(() => {
  NProgress.done()
})
