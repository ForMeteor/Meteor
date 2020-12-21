import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './common/directive' // 自定义指令
import './common/filter' // 自定义管道符
import './permission'
// import sept from 'sept_vue'
// import animated from 'animate.css'
// Vue.use(animated)
// console.log(sept_vue)
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
