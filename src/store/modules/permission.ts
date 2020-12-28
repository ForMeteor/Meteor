// 权限控制
import { constantRoutes } from '@/router'
// import MenuList from '@/assets/menu.json'
import router from '@/router'
const permission = {
    state : {
        routes: [],
        addRoutes: [],
        // mockData: MenuList,
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
        },
        SET_BUTTONS: (state:any, buttons:any) => {
            state.buttons = buttons
        }
    },

    actions: {
        // GenerateRoutes({ commit, state}) {
        //     return new Promise(resolve => {
        //         console.log('GenerateRoutes')
        //         const accessedRoutes = filterAsyncRouter(state.mockData)
        //         resolve(accessedRoutes)
        //     })
        // }
    }
}
// function filterAsyncRouter(menu:any){
//     return menu.filter((route:any) => {
//         route.component = loadView(route.path)
//         if (route.children != null && route.children && route.children.length) {
//           route.children = filterAsyncRouter(route.children)
//         }
//         return true
//     })
// }

// export const loadView = (view:any) => { // 路由懒加载
//     console.log(view)
//     return  () => import(`@/views${view}`)
//     return (resolve:any) =>  require([`@/views${view}`], resolve)
//   }
// function _import (file) {
//   return () => import('@/views/' + file + '.vue')
// }
export default permission
  