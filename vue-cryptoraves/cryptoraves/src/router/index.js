import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Confirmation from '@/components/Confirmation'
import Portfolio from '@/components/Portfolio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/confirmation',
      name: 'Confirmation',
      component: Confirmation
    },
    {
      path: '/portfolio/:user?',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})
