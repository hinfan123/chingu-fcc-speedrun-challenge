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
            <md-button>Edit<md-icon>edit</md-icon></md-button>
            <md-button @click="delItem(index)">Delete<md-icon>delete</md-icon></md-button>
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
export default {
  name: 'recipe',
  data: function () {
    return {
      recipes: [
        {
          id: 1,
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
          id: 2,
          title: 'Spaghetti',
          ingredients: ['Noodles', 'Tomato Sauce', '(Optional) Meatballs']},
        {title: 'Onion Pie', ingredients: ['Onion', 'Pie Crust', 'Sounds Yummy right?']}
      ]
    }
  }
}
</script>

