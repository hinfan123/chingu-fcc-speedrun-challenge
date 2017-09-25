<template>
  <div id='recipe'>
    <md-toolbar>
    <span class='md-title'>Recipes</span>
    </md-toolbar>

    <md-list>
    <md-list-item v-for="item in recipes" :key="item.id">
        <span>{{item.title}}</span>
        <md-list-expand>
        <md-list>
            <md-list-item class="md-inset">World</md-list-item>
            <md-list-item class="md-inset">Americas</md-list-item>
            <md-list-item class="md-inset">Europe</md-list-item>
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

