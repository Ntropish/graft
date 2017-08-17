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
            <v-btn outline fab small class="teal--text">
              <v-icon>play_arrow</v-icon>
            </v-btn>
          </v-layout>
        </v-toolbar>
        <v-container fluid class="pa-1" style="display: flex;">
          <main-view></main-view>
        </v-container>
      </v-layout>
    </main>
  </v-app>
</template>

<script>
  // import GraphqlEditor from './components/GraphqlEditor'
  // import GraphqlResponseViewer from './components/GraphqlResponseViewer'
  import MainView from './components/MainView'
  import RequestManager from './components/RequestManager'
  export default {
    name: 'graft',
    data () {
      return {
        drawer: true
      }
    },
    components: {
      MainView,
      RequestManager
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
