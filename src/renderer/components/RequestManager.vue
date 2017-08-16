<template>
  <v-layout column style="height: 100%">
    <v-toolbar>
      <v-btn primary dark @click="newRequest">New Request</v-btn>
    </v-toolbar>
    <v-flex style="height: 100%; overflow-y: auto">
    <v-list>
      <v-list-tile 
        v-for="(request, index) in requests" :key="index"
        @click="selectRequest(index)"
        :class="{'grey lighten-2': index === selectedRequest}">
        {{request.name}}
      </v-list-tile>
    </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'request-manager',
    methods: {
      newRequest () {
        this.$store.commit('ADD_REQUEST')
      },
      selectRequest (index) {
        this.$store.commit('SELECT_REQUEST', index)
      }
    },
    computed: {
      requests () {
        return this.$store.state.Request.requests
      },
      selectedRequest () {
        return this.$store.state.Request.selected
      }
    }
  }
</script>

<style lang="scss">
</style>
