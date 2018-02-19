import Vue from 'vue'
import Router from 'vue-router'

import Intro from '@/app/pages/intro'
import Home from '@/app/pages/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
