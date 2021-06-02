import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = () => {
    return {
      headerPos: 'static',
    }
  },
  getters = {
    pos: (state) => state.headerPos,
  },
  mutations = {
    setPos: (state, val) => (state.headerPos = val),
  },
  actions = {
    setPos: ({ commit }, val) => commit('setPos', val),
  }

const store = {
  state,
  getters,
  mutations,
  actions,
}

export default store
