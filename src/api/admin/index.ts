import request from "@/utils/request"
import api from "../index"
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