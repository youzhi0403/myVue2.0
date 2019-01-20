// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './common/stylus/style.css'
import axios from 'axios'
import VueRouter from 'vue-router'

import goods from './components/goods/goods'
import seller from './components/seller/seller'
import ratings from './components/ratings/ratings'

Vue.use(VueRouter)
const routes = [
  {path: '/', redirect: 'goods'},
  {path: '/goods', component: goods},
  {path: '/seller', component: seller},
  {path: '/ratings', component: ratings}
]
const router = new VueRouter({
  routes
})

Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App></App>',
  router
})
