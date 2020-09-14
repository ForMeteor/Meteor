// axios配置
import axios from "axios"

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL:  process.env.VUE_APP_REQ_API,
  // 超时
  timeout: 30000
});
// const err = (error:any) => {
//     if (error.response.status === 406 ) {
//       console.warn(406)
//     } else if (error.response.status === 401){
//       console.warn(401)
//     }else {
//       console.warn("else")
//     }
//     return Promise.reject(error.response)
//   }
// request拦截器
service.interceptors.request.use(
    config => {
      console.warn("sss",config)
      // if (config.url) {
      //   console.warn(
      //     config.url +
      //       "-" +
      //       "-开始=" +
      //       JSON.stringify(config.data)
      //   );
      // }
      const project = "";
      // config.headers['channel'] = '1';
      // if (getToken()) {
      //   config.headers['authorization'] = getToken();
      //   config.headers['token'] = getToken();
      //   config.headers['project'] = project;
      // }
  
      // 接口签名 默认 {}
      // if (config.data === undefined) {
      //   config.data = auth(project, config.data = {})
      // } else {
      //   config.data = auth(project, config.data)
      // }
      // console.log( 'config', config)
      return config;
    },
    // err
  );
  
  // 响应拦截器
  service.interceptors.response.use(
    res => {
      // if (res.data) {
      //   console.warn(
      //     res.config.url +
      //       "-" +
      //       "-结束=" +
      //       JSON.stringify(res.data)
      //   );
      // }
      return res.data;
    }, 
    // err
  );
  
  
  export default service;
  