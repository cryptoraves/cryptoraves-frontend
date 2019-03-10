// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Clipboard from 'v-clipboard'
import VueScrollTo from 'vue-scrollto'
import 'bootstrap'

Vue.config.productionTip = false
Vue.use(Clipboard)
Vue.use(VueScrollTo)

/* eslint-disable no-new */

Vue.filter('truncate', function (value) {
  if (!value) return ''
  value = value.substring(0, 6);
  return value
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')