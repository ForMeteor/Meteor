// 登录 相关
// import Cookies from 'js-cookie'

const state = {
  appType: false,
  sideNav: true,
  appName: 'destiny'
}

const mutations = {
  changeName: (state:any) => {
    state.appName = "destiny2"
  },
  changeApptype: (state:any) => {
    state.appType = !state.appType
  },
  changeSideNav: (state:any) => {
    state.sideNav = !state.sideNav
  }
}

const actions = {
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
