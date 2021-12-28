// 自定义过滤
import Vue from 'vue'
Vue.filter('toUpper', function (value: any, count: any) {
  console.warn(value)
  console.warn(count)
  count = count ? count : value.length
  return value.substr(0, count).toUpperCase() + value.substr(count)
})