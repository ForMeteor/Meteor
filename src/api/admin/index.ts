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
    console.warn(res)
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