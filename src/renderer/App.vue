<template>
  <v-app>
    <v-navigation-drawer class="pb-0"
      absolute
      permanent
      v-model="drawer"
      light
      enable-resize-watcher
      >
        <request-manager></request-manager>
    </v-navigation-drawer>
    <main fluid style="height: 100vh">
      <v-layout column style="height: 100%">
        <v-toolbar>
          <v-layout>
            TOOLS
          </v-layout>
        </v-toolbar>
        <v-container fluid class="pa-1" style="display: flex;">

            <v-layout row style="flex-grow: 1" class="ma-0">
              <v-flex xs6 class="pa-0">
                <graphql-editor></graphql-editor>
              </v-flex>
              <v-flex xs6>
              <graphql-response-viewer></graphql-response-viewer>
              </v-flex>
            </v-layout>

        </v-container>
      </v-layout>
    </main>
  </v-app>
</template>

<script>
  import GraphqlEditor from './components/GraphqlEditor'
  import GraphqlResponseViewer from './components/GraphqlResponseViewer'
  import RequestManager from './components/RequestManager'
  export default {
    name: 'graft',
    data () {
      return {
        drawer: true
      }
    },
    components: {
      RequestManager,
      GraphqlEditor,
      GraphqlResponseViewer
    }
  }
</script>

<style scoped>
  .fill {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
