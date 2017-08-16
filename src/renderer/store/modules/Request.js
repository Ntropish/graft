const state = {
  requests: []
}

const mutations = {
  ADD_REQUEST (state, request) {
    state.requests.push(request)
  },
  REMOVE_REQUEST (state, index) {
    state.requests.slice(index, 1)
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions
}
