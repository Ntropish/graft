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
  CHANGE_REQUEST (state, {property, index, value}) {
    index = index || state.selected
    state.requests[index][property] = value
  },

}

const actions = {
  submitRequest ({ commit, state }, {index} = {}) {
    // do something async
    commit('CHANGE_REQUEST', {property: 'result', value: 'new result'})
  }
}

export default {
  state,
  mutations,
  actions
}
