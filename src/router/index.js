import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import search from '@/pages/search/search'
import order from '@/pages/order/order'
import personal from '@/pages/personal/personal'
import loginRegister from '@/pages/loginRegister/loginRegister'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/loginRegister',
      name: 'loginRegister',
      component: loginRegister
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
