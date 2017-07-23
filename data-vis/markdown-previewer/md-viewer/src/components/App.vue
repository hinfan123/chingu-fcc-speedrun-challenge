<template>
  <div id="app">
  <div class = "container">
  <app-header></app-header>
    <div id="md" class="col-md-6">
    <h2 class="big">Enter Markdown Text</h2>
    <textarea style="height:auto" rows="15" class='form-control' v-model='md_text'></textarea>
    </div>
    <div id="preview" class="col-md-6">
    <h2>Preview</h2>
    <div v-html='previewText'></div>
    </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>
<script>
import header from './header.vue'
import footer from './footer.vue'

let marked = require('marked');

export default {
  name: 'app',
  data () {
    return {
      md_text: '# Title',
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
  },
  components: {
    'app-header': header,
    'app-footer': footer
  }
}
</script>




