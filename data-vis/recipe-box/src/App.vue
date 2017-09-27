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
  },
    data: function () {
    return {
      recipes: [
        {
          title: 'Pumpkin Pie',
          ingredients: [
            'Pumpkin Puree',
            'Sweetened Condensed Milk',
            'Eggs',
            'Pumpkin Pie Spice',
            'Pie Crust'
          ]
        },
        {
          title: 'Spaghetti',
          ingredients: ['Noodles', 'Tomato Sauce', '(Optional) Meatballs']
          },
        {
          title: 'Onion Pie', 
          ingredients: ['Onion', 'Pie Crust', 'Sounds Yummy right?']
          }
      ]
    }
  },
  }
}
</script>

<style src="../node_modules/vue-material/dist/vue-material.css"></style>
