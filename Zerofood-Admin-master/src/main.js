import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { store } from './store/store'
import axios from 'axios'

// Vue.prototype.$http = Axios;
// const token = localStorage.getItem('token')
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }

const axiosConfig = {
  baseURL: 'http://172.105.75.12:8888/api/admin',
  timeout: 30000
}

Vue.prototype.$axios = axios.create(axiosConfig)

Vue.config.productionTip = false
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!store.getters.loggedIn) {
//       next({
//         name: 'login'
//       })
//     } else {
//       next()
//     }
//   } else if (to.matched.some(record => record.meta.requiresVisitor)) {
//     if (store.getters.loggedIn) {
//       next({
//         name: 'dashboard'
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
