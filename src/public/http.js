import axios from 'axios' // 引入axios
import QS from 'qs' // 引入qs模块，用来序列化post类型的数据
axios.defaults.timeout = 20000
// axios.defaults.withCredentials = true
axios.interceptors.request.use((config) => {
  var token = sessionStorage.getItem('accessToken')
  if (token) {
    var data = 'access_token=' + token
    if (config.url.indexOf('?') === -1) {
      data = '?' + data
    } else {
      data = '&' + data
    }
    config.url += data
  }
  if (config.method === 'post') {
    config.data = QS.stringify(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})
axios.interceptors.response.use((res) => {
  if (res.status !== 200) {
    return Promise.reject(res)
  }
  return res
}, (error) => {
  // 404等问题可以在这里处理
  return Promise.reject(error)
})
export default axios
