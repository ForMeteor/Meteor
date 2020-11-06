import { adminTable, getToken, getReToken} from '@/api/admin'
const user = {
  state: {
    token: getToken(),
    reToken: getReToken(),
    name: '',
    avatar: '',
    userId: '',
    roles: [],
    passWord: {}, // 修改密码
    permissions: []
  },
  mutations:{
    SET_TOKEN: (state:any, token:any) => {
      state.token = token
    },
    SET_RETOKEN: (state:any, token:any) => {
      state.token = token
    },
    SET_NAME: (state:any, name:any) => {
      state.name = name
    },
    SET_AVATAR: (state:any, avatar:any) => {
      state.avatar = avatar
    },
    SET_USERID: (state:any, userId:any) => {
      state.userId = userId
    },
    SET_ROLES: (state:any, roles:any) => {
      state.roles = roles
    },
    SET_PERMISSIONS: (state:any, permissions:any) => {
      state.permissions = permissions
    },
    SET_PASSWORD: (state:any, passWord:any) => {
      state.passWord = passWord
    },
  },
  actions:{}
}
export default user