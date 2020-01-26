import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Meals from '@/views/Meals'
import Orders from '@/views/Orders'
import Registration from '@/views/Registration.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/meals',
      name: 'Meals',
      component: Meals,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
