<template>
  <v-layout column style="height: 100%">
    <v-toolbar>
      <v-btn primary dark @click="newRequest">New Request</v-btn>
    </v-toolbar>
    <v-flex style="height: 100%; overflow-y: auto">
    <v-list>
      <v-list-tile v-for="(request, index) in requests" :key="index">
        {{request}}
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
        this.$store.commit('ADD_REQUEST', {
          query: 'no query'
        })
      }
    },
    computed: {
      requests () {
        return this.$store.state.Request.requests
      }
    }
  }
</script>

<style lang="scss">
</style>
