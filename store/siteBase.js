import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = () => {
    return {
      headerPos: 'static',
      dark: false,
    }
  },
  getters = {
    pos: (state) => state.headerPos,
    dark: (state) => state.dark,
  },
  mutations = {
    setPos: (state, val) => (state.headerPos = val),
    toggledark: (state) => (state.dark = !state.dark),
  },
  actions = {
    setPos: ({ commit }, val) => commit('setPos', val),
    toggledark: ({ commit }) => commit('toggledark'),
  }

const store = {
  state,
  getters,
  mutations,
  actions,
}

export default store
