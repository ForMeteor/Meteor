const getters = {
    appName: (state:any) => state.app.appName,
    appType: (state:any) => state.app.appType,
    sideNav: (state:any) => state.app.sideNav,
    catShow: (state:any) => state.permission.catShow,
    backShow: (state:any) => state.permission.backShow,
    sthExo: (state:any) => state.permission.sthExo,
    // --账号相关
    token: (state:any) => state.user.token,
    reToken: (state:any) => state.user.reToken,
    name: (state:any) => state.user.name,
    avatar: (state:any) => state.user.avatar,
    roles:(state:any) => state.user.roles,
    passWord: (state:any) => state.user.passWord,
    permissions: (state:any) => state.user.permissions,
    userId: (state:any) => state.user.userId,
    // -- 路由
    totalRoutes:(state:any) => state.permission.routes
  }
  export default getters
  