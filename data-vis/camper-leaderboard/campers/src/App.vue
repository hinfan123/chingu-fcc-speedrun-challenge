<template>
  <div id="app">
  <app-header project-title = 'Camper Leaderboard'></app-header>
  <table-grid :col-titles = 'colTitles'>
  </table-grid>
  <app-footer></app-footer>
  </div>
</template>
<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Table from './components/table.vue'

export default {
  name: 'app',
  data () {
    return {
       colTitles: ['#', 'camper Name', 'points in past 30 days', 'all time points']
      }
  },
  computed: {

  },
  components: {
    'app-header': Header,
    'app-footer': Footer,
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




