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
import septMethod from 'sept_method' // 自用 方法及组件
Vue.use(septMethod)
import vueCanvas from 'vue-canvas-effect'
Vue.use(vueCanvas)
Vue.config.productionTip = false
Vue.use(ElementUI)
import Pagination from '@/views/backups/Pagination/index.vue'
Vue.component("Pagination", Pagination)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
