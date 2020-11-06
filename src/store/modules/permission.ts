// 权限控制

const state =  {
    catShow: true, // 精灵显示控制
    backShow: false, // 页面背景显示控制
}

const mutations = {
    changeCat(state:any){
        state.catShow = !state.catShow
    },
    changeBack(state:any){
        state.backShow = !state.backShow
    }
}

const actions = {
}

export default {
    state,
    mutations,
    actions
}
  