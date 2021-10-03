import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openLoginPopup: false,
    openLogupPopup: false,
  },
  mutations: {
    changeOpenLoginPopup(state, val) {
      state.openLoginPopup = val
    },
    changeOpenLogupPopup(state, val) {
      state.openLogupPopup = val
    }
  },
  actions: {
  },
  modules: {
  }
})
