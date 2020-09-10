import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'

import '@/plugins'

// 引入阿里图标
import './assets/css/icon/iconfont.css'

Vue.config.productionTip = false
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
