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
  next()
})

router.afterEach(() => {
  NProgress.done()
})
