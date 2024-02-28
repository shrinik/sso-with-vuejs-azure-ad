import api from '../../api/azure'

const state = {
   token: sessionStorage.getItem("azure_token")
}

const getters = {
   isLoggedIn: state => !!state.token
}

const actions = {
   login: ({ commit }) => {
      api.login().then(loginResponse => {
         let token = loginResponse.idToken
         commit('setToken', token)
         sessionStorage.setItem("azure_token", token)
      })
   },
   logout: ({ commit }) => {  
      api.logout().then(() => {
         sessionStorage.removeItem("azure_token")    
         commit('setToken', null)
      })
   }
}

const mutations = {
   setToken: (state, token) => {
      state.token = token
   }
}

export default {
   state,
   getters,
   actions,
   mutations
}