<template>
  <div ref="editor" class="">
    
  </div>
</template>

<script>
  import 'ace-builds/src-min-noconflict/ace.js'
  export default {
    name: 'graphql-editor',
    props: ['query'],
    data () {
      return {
        code: '',
        editorOptions: {

        },
        editor: Object
      }
    },
    mounted () {
      this.editor = window.ace.edit(this.$refs.editor)
      this.editor.setValue('test', 1)
      this.editor.getSession().setMode(`static/gql`)
      // this.editor.setBehavioursEnabled(true)
      this.editor.on('change', () => {
        this.beforeContent = this.editor.getValue()
        this.$emit('change-content', this.editor.getValue())
      })
    },
    watch: {
      query () {
        console.log('got new query:', this.query)
        this.editor.setValue(this.query || '', 1)
      }
    }
  }
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>
