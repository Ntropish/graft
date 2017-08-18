<template>
  <v-layout row style="flex-grow: 1" class="ma-0">
    <v-flex xs6 class="pa-0">
      <graphql-editor
        :query="selectedQuery && selectedQuery.query" 
        @change-content="updateQuery">
      </graphql-editor>
    </v-flex>
    <v-flex xs6>
    <graphql-response-viewer></graphql-response-viewer>
    </v-flex>
  </v-layout>
</template>

<script>
  import GraphqlEditor from './GraphqlEditor'
  import GraphqlResponseViewer from './GraphqlResponseViewer'

  export default {
    name: 'main-view',
    components: {
      GraphqlEditor,
      GraphqlResponseViewer
    },
    methods: {
      updateQuery (value) {
        this.$store.commit(
          'CHANGE_REQUEST',
          {
            value,
            property: 'query'
          })
      }
    },
    computed: {
      selectedQuery () {
        const selected = this.$store.state.Request.selected
        if (selected !== -1) {
          return this.$store.state.Request.requests[selected]
        }
        return null
      }
    }
  }
</script>

<style>
</style>
