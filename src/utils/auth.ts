import Cookies from 'js-cookie'

const TokenKey = 'Guardian-Token'
const RrfreToken = 'Re-Guardian-token'
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

export function setReToken(token:any) {
  return Cookies.set(RrfreToken, token)
}

export function removeReToken() {
  return Cookies.remove(RrfreToken)
}
