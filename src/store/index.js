import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import initialState from './initial-state'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = Object.assign({}, initialState)

// export the state
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
