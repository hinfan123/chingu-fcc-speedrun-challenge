<template>
  <div id="app" class="container">
    <h1 class="page-header">Markdown Previewer</h1>
    <div id="md" class="col-md-6">
    <h2>Enter Markdown Text</h2>
    <textarea class='form-control' v-model='md_text'></textarea>
    </div>
    <div id="preview" class="col-md-6">
    <h2>Preview</h2>
    {{md_preview}}
    </div>
  </div>
</template>

<script>
var marked = require('marked');

export default {
  name: 'app',
  data () {
    return {
      md_preview: md_text
    }
  }
}
</script>




