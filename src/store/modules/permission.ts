// 权限控制
import { constantRoutes } from '@/router'
import { getMenu } from '@/api/admin'
import router from '@/router'
const permission = {
    state : {
        routes: [], // 公共路由
        addRoutes: [], // 动态路由
        buttons: [],
        catShow: true, // 精灵显示控制
        backShow: false, // 页面背景显示控制
    },

    mutations : {
        changeCat(state:any){
            state.catShow = !state.catShow
        },
        changeBack(state:any){
            state.backShow = !state.backShow
        },
        SET_ROUTES: (state:any, routes:any) => {
            state.addRoutes = routes
            state.routes = constantRoutes.concat(routes)
            console.log(state.routes)
        },
        SET_BUTTONS: (state:any, buttons:any) => {
            state.buttons = buttons
        }
    },

    actions: {
        // GenerateRoutes({commit, state}:any) {
        //     return new Promise(resolve => {
        //         console.log('GenerateRoutes')
        //         const accessedRoutes = filterAsyncRouter(MenuList)
        //         router.addRoutes(accessedRoutes)
        //         resolve(router)
        //     })
        // }
        GenerateRoutes({ commit }:any) {
            return new Promise(resolve => {
              // 向后端请求路由数据
              getMenu().then(res => {
                const accessedRoutes = filterAsyncRouter(res)
                accessedRoutes.push({ path: '*', redirect: '/404', hidden: true })
                commit('SET_ROUTES', accessedRoutes)
                // commit('SET_BUTTONS', res.data.buttons)
                resolve(accessedRoutes)
              })
            })
          }
    }
}
function filterAsyncRouter(menu:any){
    return menu.filter((route:any) => {
        route.component = loadView(route.component)
        if (route.children != null && route.children && route.children.length) {
          route.children = filterAsyncRouter(route.children)
        }
        return true
    })
}

// function loadView(view:any){ // 路由懒加载
//     return (resolve :any) =>  require([`${view}`], resolve)
//     return  () => import(`${view}`)
//     return (resolve:any) =>  require([`@/views${view}`], resolve)
//   }
export const loadView = (view:string) => { // 路由懒加载
  return (resolve:any) =>  require([`@/views/${view}`], resolve)
}
export default permission
  