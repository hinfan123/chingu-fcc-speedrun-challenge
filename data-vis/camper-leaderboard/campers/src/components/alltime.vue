<template>
  <div id="alltime">
  <table-grid :col-titles = 'colTitles' :col-data = 'colData'>
  </table-grid>
  </div>
</template>

<script>
import Table from './table.vue'

export default {
  name: 'alltime',
  data () {
    return {
       colTitles: ['#', 'camper Name', 'points in past 30 days', 'all time points'],
       colData: []
      }
  },
  methods: {
     fetchColData: function() {
       fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
            .then(response => response.json())
            .then(json => this.colData = json)
            console.log(this.colData);
            }
  },
  created() {
    this.fetchColData()
  },
  components: {
    'table-grid': Table
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>




