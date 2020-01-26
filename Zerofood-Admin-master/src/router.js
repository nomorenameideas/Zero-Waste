import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard'
import Categories from '@/views/Categories'
import Meals from '@/views/Meals'
import Orders from '@/views/Orders'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresVisitor: true }
    },
    {
      path: '/',
      name: 'dashboard',
      redirect: '/meals',
      meta: { requiresAuth: true }
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories,
      meta: { requiresAuth: true }
    },
    {
      path: '/meals',
      name: 'meals',
      component: Meals,
      meta: { requiresAuth: true }
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
      meta: { requiresAuth: true }
    }
  ]
})
