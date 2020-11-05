import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const RrfreToken = 'Re-Admin-token'
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token:any) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}


export function getReToken() {
  return Cookies.get(RrfreToken)
}

export function setReToken(token) {
  return Cookies.set(RrfreToken, token)
}

export function removeReToken() {
  return Cookies.remove(RrfreToken)
}
