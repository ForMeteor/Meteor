import request from "@/utils/request"
import api from "../index"
export function getFile(data:any) {
    return request({
      url: api.FILE01.url,
      method: 'post',
      data:data
    })
}
export function uploadFile(data:any) {
    return request({
      url: api.FILE02.url,
      method: 'post',
      data:data
    })
}