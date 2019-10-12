// import axios from '../public/http'
export default {
  IsPC: function () {
    var userAgentInfo = navigator.userAgent
    var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPod']
    var flag = true
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false
        break
      }
    }
    if (window.screen.width >= 768) {
      flag = true
    }
    return flag
  },
  currentSys: function () {
    var u = navigator.userAgent
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    if (isAndroid) {
      return 'android'
    } else if (isiOS) {
      return 'ios'
    }
  },
  isWeiXin: function () {
    var ua = window.navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) === 'micromessenger') {
      return true
    } else {
      return false
    }
  },
  isAlipay: function () {
    var ua = window.navigator.userAgent.toLowerCase()
    if (ua.match(/alipayclient/i) === 'alipayclient') {
      return true
    } else {
      return false
    }
  },
  // ----------------------自用函数--------------------------------s
  getMath (min, max) { // 取随机数
    return Math.floor(Math.random() * (max - min + 1) + min)
  },
  color () { // rgb颜色随机
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    var color = '#' + r.toString(16) + g.toString(16) + b.toString(16)
    return color
  }
}
