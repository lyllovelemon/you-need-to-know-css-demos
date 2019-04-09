import Vue from 'vue'
import Router from 'vue-router'

import sidebar from '../components/sidebar/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sidebar',
      component: sidebar
    }
  ]
})
