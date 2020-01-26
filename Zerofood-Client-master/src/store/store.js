import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'https://food.merci.ps/ahmed/api'

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null
    // type
  },
  getters: {
    loggedIn(state) {
      return state.token == null
    }
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
    }
  },
  actions: {
    destroyToken(context) {
      localStorage.setItem('token', null)
      localStorage.removeItem('token')
      context.commit('destroyToken')
    },
    login(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post('/login', {
            email: credentials.email,
            password: credentials.password
          })
          .then(response => {
            const token = response.data.token
            localStorage.setItem('token', token)
            context.commit('retrieveToken', token)
            resolve(response)
            console.log(token)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    registration(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post('/register', {
            name: credentials.name,
            email: credentials.email,
            password: credentials.password
          })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    getMyUser({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            '/profile',
            {},
            {
              headers: {
                Authorization: `Bearer ${state.token}`
              }
            }
          )
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    addBalance({ commit, state }, amount) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            '/charge',
            { amount },
            {
              headers: {
                Authorization: `Bearer ${state.token}`
              }
            }
          )
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    }
  }
})
