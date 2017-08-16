<template>
  <v-layout column>
    <v-toolbar>
      <v-layout>
        TOOLS
      </v-layout>
    </v-toolbar>
    <!-- <v-container fluid> -->
    <v-layout row>
      <v-flex xs6>
        <graphql-editor></graphql-editor>
      </v-flex>
      <v-flex xs6>
      <graphql-response-viewer></graphql-response-viewer>
      </v-flex>
    </v-layout>
    <!-- </v-container> -->
  </v-layout>
</template>

<script>
  import GraphqlEditor from './GraphqlEditor'
  import GraphqlResponseViewer from './GraphqlResponseViewer'

  export default {
    name: 'landing-page',
    components: {
      GraphqlEditor,
      GraphqlResponseViewer
    }
  }
</script>

<style>
</style>
