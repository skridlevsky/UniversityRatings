import { createStore } from 'vuex'
import * as firebase from '../firebase'
import router from '../router/index'

const store = createStore({
  state: {
    userProfile: {}
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    }
  },
  actions: {
    async login({ dispatch }, form) {
      // sign user in
      const { user } = await firebase.auth.signInWithEmailAndPassword(form.email, form.password)
  
      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await firebase.usersCollection.doc(user.uid).get()
  
      // set user profile in state
      commit('setUserProfile', userProfile.data())
      
      // change route to dashboard
      router.push('/')
    },
    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await firebase.auth.createUserWithEmailAndPassword(form.email, form.password)
    
      // create user profile object in userCollections
      await firebase.usersCollection.doc(user.uid).set({
        email: form.email,
        title: form.password
      })
    
      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    }
  }
})

export default store