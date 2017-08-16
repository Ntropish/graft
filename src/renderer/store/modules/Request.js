const state = {
  requests: [],
  selected: -1
}

let counter = 1
const mutations = {
  ADD_REQUEST (state, request) {
    if (!request) {
      request = {
        name: `Query ${counter++}`,
        query: 'None'
      }
    }
    state.requests.push(request)
  },
  REMOVE_REQUEST (state, index) {
    state.requests.slice(index, 1)
  },
  SELECT_REQUEST (state, index) {
    state.selected = index
  },
  CHANGE_QUERY (state, {index, query}) {
    state.requests[index].query = query
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
