import Vue from 'vue'
import Router from 'vue-router'
import monitorFirst from '@/components/monitor/monitorFirst'
import balls from '@/components/canvas/balls'
import moves from '@/components/canvas/moves'
import changePic from '@/components/canvas/changePic'
import countDown from '@/components/canvas/countDown'
import echar from '@/components/canvas/echar'
import room from '@/components/three/room'
Vue.use(Router)
export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'monitorFirst',
      meta: {title: '首页'},
      component: monitorFirst
    },
    {
      path: '/monitorFirst',
      name: 'monitorFirst',
      meta: {title: '首页'},
      component: monitorFirst
    },
    {
      path: '/balls',
      name: 'balls',
      meta: {title: '球'},
      component: balls
    },
    {
      path: '/moves',
      name: 'moves',
      meta: {title: '运动'},
      component: moves
    },
    {
      path: '/changePic',
      name: 'changePic',
      meta: {title: '点阵转换'},
      component: changePic
    },
    {
      path: '/countDown',
      name: 'countDown',
      meta: {title: '倒计时'},
      component: countDown
    },
    {
      path: '/echar',
      name: 'echar',
      meta: {title: '图标'},
      component: echar
    },
    {
      path: '/room',
      name: 'room',
      meta: {title: '?'},
      component: room
    }
  ]
})
// router.beforeEach((to, from, next) => {})
