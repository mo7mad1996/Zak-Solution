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
  mutations = {},
  actions = {}

const store = {
  state,
  getters,
  mutations,
  actions,
}

export default store
