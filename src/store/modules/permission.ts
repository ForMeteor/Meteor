// 权限控制
import { constantRoutes } from '@/router'
import MenuList from '@/assets/menu.json'
// import MenuList from '@/assets/menu.json'
import router from '@/router'
const permission = {
    state : {
        routes: MenuList, // [],
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
            // state.routes = constantRoutes.concat(routes)
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
    }
}
function filterAsyncRouter(menu:any){
    // return menu.filter((route:any) => {
    //     route.component = loadView(route.component)
    //     if (route.children != null && route.children && route.children.length) {
    //       route.children = filterAsyncRouter(route.children)
    //     }
    //     return true
    // })
}

// function loadView(view:any){ // 路由懒加载
//     return (resolve :any) =>  require([`${view}`], resolve)
//     return  () => import(`${view}`)
//     return (resolve:any) =>  require([`@/views${view}`], resolve)
//   }
export default permission
  