import Vuex from '@wepy/x'
import wepy from '@wepy/core';

wepy.use(Vuex);

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
