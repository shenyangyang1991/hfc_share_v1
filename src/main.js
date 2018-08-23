// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 转场动画
import VueG from 'vueg'
// 转场动画定义
import 'vueg/css/transition-min.css'
// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// toast
import Toasted from 'vue-toasted'
// loading
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.min.css'

Vue.config.productionTip = false
// 引入转场动画
Vue.use(VueG, router)
// 引入axios
Vue.use(VueAxios, axios)
// 引入toast
Vue.use(Toasted, {
  position: 'top-center',
  duration: 2000,
  fullWidth: true,
  fitToScreen: true,
  className: 'hfc-toast'
})
// 引入loading
Vue.use(Loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
