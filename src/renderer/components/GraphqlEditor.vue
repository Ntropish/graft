<template>
  <textarea ref="editor" class="editor">
  </textarea>
</template>

<script>
  import CodeMirror from 'codemirror'
  import 'codemirror-graphql/mode'
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
      this.editor = CodeMirror.fromTextArea(this.$refs.editor, {
        lineNumbers: true,
        styleActiveLine: true,
        mode: 'graphql'
      })
      this.editor.on('change', (val) => {
        this.$emit('change-content', this.editor.getValue())
      })
    },
    watch: {
      query (value) {
        if (value === this.editor.getValue()) return
        this.editor.setValue(value)
      }
    }
  }
</script>

<style>
.CodeMirror {
  width: 100%;
  height: 100%;
}
</style>
