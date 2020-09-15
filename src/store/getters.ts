const getters = {
    appName: (state:any) => state.app.appName,
    appType: (state:any) => state.app.appType,
    sideNav: (state:any) => state.app.sideNav,
    catShow: (state:any) => state.permission.catShow,
    backShow: (state:any) => state.permission.backShow
  }
  export default getters
  