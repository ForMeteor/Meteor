import request from "@/utils/request"
import api from "../index"
import menu from "@/assets/menu.json"
export function postTest(data:object) {
  return request({
    url: api.POSTTEST.url,
    method: 'post',
    data:data
  })
}
// export function getTest(data:object) {
//   let str = ''
//   for(let r in data){
//     str = str + r + '=' + data[r] + '&'
//   }
//   str = str.substring(0,str.length - 1) 
//   return request({
//     url: api.GETTEST.url + '?' +str,
//     method: 'get',
//   })
// }
export function adminTable() {
    return request({
      url: api.ADMIN01.url,
      method: 'get'
    })
}
export function adminQuery(data:object) {
    return request({
      url: api.ADMIN02.url,
      method: 'post',
      data:data
    })
}
export function getMenu() {
  return new Promise((resolve, reject)=>{
    let res = menu
    resolve(res)
  })
  // return request({
  //   url: '@/assets/menu.json',
  //   method: 'get'
  // })
}
export function getToken() {
  return "123"
}
export function getReToken() {
  return "1234"
}