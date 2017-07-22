<template>
  <div id="app" class="container">
    <h1 class="page-header">Markdown Previewer</h1>
    <div id="md" class="col-md-6">
    <h2>Enter Markdown Text</h2>
    <textarea class='form-control' v-model='md_text'></textarea>
    </div>
    <div id="preview" class="col-md-6">
    <h2>Preview</h2>
    <div v-html='previewText'></div>
    </div>
  </div>
</template>

<script>
let marked = require('marked');

export default {
  name: 'app',
  data () {
    return {
      md_text: '# Title'
    }
  },
  computed: {
	previewText() {
		marked.setOptions({
		  renderer: new marked.Renderer(),
		  gfm: true,
		  tables: true,
		  breaks: true,
		  pedantic: false,
		  sanitize: true,
		  smartLists: true,
		  smartypants: false
		});
		return marked(this.md_text)
	}
  }
}
</script>




