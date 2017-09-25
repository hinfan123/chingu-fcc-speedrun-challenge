<template>
<div id = 'app'>
<md-toolbar class="md-medium md-accent">
  <h1 class="md-title" style="flex: 1"><b>FCC Data Visualization Project 3: Recipe box</b></h1>
  <modal></modal>
</md-toolbar>
<recipes></recipes>
</div>
</template>

<script>
import modal from './components/modal.vue'
import recipes from './components/recipe.vue'

export default {
  name: 'app',
  components: {
    modal,
    recipes
  }
}
</script>

<style src="../node_modules/vue-material/dist/vue-material.css"></style>
