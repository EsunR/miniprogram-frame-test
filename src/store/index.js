import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    appStartTime: 0
  },
  mutations: {
    setAppStartTime(state, time) {
      state.appStartTime = time
    }
  }
})

export default store;