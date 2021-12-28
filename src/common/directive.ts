// 自定义指令
import Vue from 'vue'
Vue.directive('bl', function (el, binding, vnode) {
  el.style.background = '#e5e5e5'
}
)
