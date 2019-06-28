// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Clipboard from 'v-clipboard'
import VueScrollTo from 'vue-scrollto'
import 'bootstrap'

import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false
Vue.use(Clipboard)
Vue.use(VueScrollTo)

Vue.use(VueAnalytics, {
  id: ['UA-142913413-1'],
  router
})
/* eslint-disable no-new */

Vue.filter('truncate', function (value) {
  if (!value) return ''
  value = value.substring(0, 6);
  return value
})

Vue.filter('comma', function (value) {
  if (!value) return ''
  //value = value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  //value = value.toLocaleString();
  //return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return parseFloat(value).toLocaleString(undefined, { maximumFractionDigits: 10 });
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
