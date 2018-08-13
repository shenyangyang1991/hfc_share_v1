// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 转场动画
import VueG from 'vueg'
// 转场动画定义
import 'vueg/css/transition-min.css'

Vue.config.productionTip = false
// 引入转场动画
Vue.use(VueG, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
