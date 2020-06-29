import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    catShow: true,
    backShow: false,
  },
  mutations: {
    changeCat(state){
      state.catShow = !state.catShow
    },
    changeBack(state){
      state.backShow = !state.backShow
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    storage:window.sessionStorage
  })]
})
