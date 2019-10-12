import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 10,
    numb: 10086,
    arr: [1, 2, 3, 4, 4, 4, 4, 5, 6]
  },
  getters: {
    getNum (state) {
      return state.arr.filter(item => item === 4)
    }
  },
  mutations: { // 同步操作，此刻完成
    increment (state, r) {
      state.count += r
      console.log('change sssss')
    },
    changen (state, r) {
      state.numb = r.x + r.y
    }
  },
  actions: {
    increment ({commit}) {
      setTimeout(() => {
        commit('increment')
      }, 10000)
    }
  }, // 提交mutation，用于异步
  plugins: [createPersistedState()]
})

// const state = {
//   menu: {
//     name: 'meteor',
//     age: '12',
//     career: 'loser'
//   },
//   info: [1, 2, 3, 4]
// }
// const mutations = {}
export default store
// export default new Vuex.Store({
//   state,
//   // actions,
//   mutations
// })
