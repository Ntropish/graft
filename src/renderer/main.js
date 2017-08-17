import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'

import { ApolloClient, createNetworkInterface } from 'apollo-client'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'
import VueApollo from 'vue-apollo'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Vuetify)

// Create the network interface
const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj5pgw8zyspp50122g1cc0j8h',
  transportBatching: true,
})

// Create the subscription websocket client
const wsClient = new SubscriptionClient('wss://subscriptions.us-west-2.graph.cool/v1/cj5pgw8zyspp50122g1cc0j8h', {
  reconnect: true,
})

// Extend the network interface with the subscription client
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient,
)

// Create the apollo client with the new network interface
const apolloClient = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
  connectToDevTools: true,
})

// Install the plugin like before
Vue.use(VueApollo, {
  apolloClient,
})

Vue.config.productionTip = false

let apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

/* eslint-disable no-new */
export default new Vue({
  components: { App },
  apolloProvider,
  router,
  store,
  template: '<App/>'
}).$mount('#app')
