<template>
<div id = 'app'>
<md-toolbar class="md-medium md-accent">
  <h1 class="md-title" style="flex: 1"><b>FCC Data Visualization Project 3: Recipe box</b></h1>
  <modal v-on:add="addItem"></modal>
</md-toolbar>
<md-layout md-align="center">
<recipes :recipes='recipes' v-on:del="delItem"></recipes>
</md-layout>
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
  methods: {
    addItem (item) {
      this.recipes.push({
        title: item.title,
        ingredients: item.ingredients
      })
    },
    delItem (index) {
      console.log(index)
      this.recipes.splice(index,1)
    }
  }
}
</script>

<style src="../node_modules/vue-material/dist/vue-material.css"></style>
