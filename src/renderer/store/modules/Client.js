import { ApolloClient, createNetworkInterface } from 'apollo-client'

const state = {}

const mutations = {
  ADD_CLIENT (state, { uri }) {
    const networkInterface = createNetworkInterface({uri,
      transportBatching: true,
    })

    const apolloClient = new ApolloClient({networkInterface,
      connectToDevTools: true,
    })

    state.uri = apolloClient
  },
  REMOVE_CLIENT (state, { uri }) {
    delete state.uri
  },
}

export default {
  state,
  mutations,
}
