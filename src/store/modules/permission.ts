// 权限控制
import { constantRoutes } from '@/router'
const permission = {
    state : {
        routes: [],
        addRoutes: [],
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
        GenerateRoutes({ commit }) {
            console.log('GenerateRoutes')
            return new Promise(resolve => {
            //   向后端请求路由数据
            //   getRouters().then(res => {
            //     const accessedRoutes = filterAsyncRouter(res.data.menu)
            //     accessedRoutes.push({ path: '*', redirect: '/404', hidden: true })
            //     commit('SET_ROUTES', accessedRoutes)
            //     commit('SET_BUTTONS', res.data.buttons)
            //     resolve(accessedRoutes)
            //   })
            })
        }
    }
}
function filterAsyncRouter(menu:any){}

export const loadView = (view:any) => { // 路由懒加载
    return (resolve:any) =>  require([`@/views/${view}`], resolve)
  }
  
export default permission
  