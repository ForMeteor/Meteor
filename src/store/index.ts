import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import app from "./modules/app"
import permission from "./modules/permission"
import user from "./modules/user"
import getters from "./getters"
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    permission,
    user,
  },
  plugins: [createPersistedState({
    storage:window.sessionStorage
  })],
  getters
})

export default store
// export default new Vuex.Store({
//   state: {
//     catShow: true,
//     backShow: false,
//   },
//   mutations: {
//     changeCat(state){
//       state.catShow = !state.catShow
//     },
//     changeBack(state){
//       state.backShow = !state.backShow
//     }
//   },
//   actions: {
//   },
//   modules: {
//   },
//   plugins: [createPersistedState({
//     storage:window.sessionStorage
//   })]
// })
