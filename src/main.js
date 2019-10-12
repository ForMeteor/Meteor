// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import store from './store/store'
import func from './public/func'
import constant from './public/constant'
import rem from './public/rem'
import axios from './public/http'
import * as filters from './components/filter/filter'
import echarts from 'echarts'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$method = func
Vue.prototype.$axios = axios
Vue.prototype.$con = constant
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: { App },
  template: '<App/>'
})
