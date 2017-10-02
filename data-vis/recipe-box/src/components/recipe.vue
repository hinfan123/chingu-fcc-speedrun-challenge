<template>
  <div id='recipe'>
    <md-toolbar>
    <span class='md-title'>Recipes</span>
    </md-toolbar>
    <md-list>
    <md-list-item v-for="item,index in recipes" :key="index">
        <span>{{item.title}}</span>
        <md-list-expand>
          <md-list-item>
            <span class="md-subheading"><b>Ingredients:</b></span>
            <editmodal :item="item" :edit="editItem(index, item)"></editmodal>
            <md-button class = "md-accent" @click="delItem(index)">Delete<md-icon class = "md-accent">delete</md-icon></md-button>
          </md-list-item>
        <md-list v-for="item_ing in item.ingredients" :key="item_ing">
            <md-list-item class="md-inset">{{item_ing}}</md-list-item>
        </md-list>
        </md-list-expand>
    </md-list-item>
    </md-list>
</div>
</template>

<script>
import editmodal from './editmodal.vue'
export default {
  name: 'recipe',
  props: ['recipes'],
  methods: {
    delItem (index) {
      this.$emit('del',index)
    },
    editItem (index, item) {
      let recipe = {
        id: index,
        title: item.title,
        ingredients: item.ingredients
      }
      this.$emit('editIt', recipe)
    }
  },
  components: {
    editmodal
  }
}
</script>

