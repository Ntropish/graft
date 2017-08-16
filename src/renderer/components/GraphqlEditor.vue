<template>
  <div ref="editor" class="">
    
  </div>
</template>

<script>
  import 'ace-builds/src-min-noconflict/ace.js'
  export default {
    name: 'graphql-editor',
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
      this.editor.on('change', () => {
        this.beforeContent = this.editor.getValue()
        this.$emit('change-content', this.editor.getValue())
      })
    }
  }
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>
