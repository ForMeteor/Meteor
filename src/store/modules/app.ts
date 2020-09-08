// 登录 相关
// import Cookies from 'js-cookie'

const state = {
  appName: 'destiny'
}

const mutations = {
  changeName: (state:any) => {
    state.appName = "destiny2"
  }
}

const actions = {
  // toggleSideBar({ commit }) {
  //   commit('changeName')
  // },
  // closeSideBar({ commit }, { withoutAnimation }) {
  //   commit('CLOSE_SIDEBAR', withoutAnimation)
  // },
  // toggleDevice({ commit }, device) {
  //   commit('TOGGLE_DEVICE', device)
  // },
  // setSize({ commit }, size) {
  //   commit('SET_SIZE', size)
  // }
}

export default {
  state,
  mutations,
  actions
}
