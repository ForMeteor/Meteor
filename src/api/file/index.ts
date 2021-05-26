import request from "@/utils/request"
import api from "../index"
export function getFile(data:string) {
  location.href = api.FILE01.url +'?name='+data
    // return request({
    //   url: api.FILE01.url,
    //   method: 'get',
    //   params:data
    // })
}
export function uploadFile(data:any) {
    return request({
      url: api.FILE02.url,
      method: 'post',
      data:data
    })
}