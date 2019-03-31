import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Confirmation from '@/components/Confirmation'
import Portfolio from '@/components/Portfolio'
import Faq from '@/components/Faq'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/confirmation/:txnId?',
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
