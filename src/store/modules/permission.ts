// 权限控制

const state =  {
    catShow: true,
    backShow: false,
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
  