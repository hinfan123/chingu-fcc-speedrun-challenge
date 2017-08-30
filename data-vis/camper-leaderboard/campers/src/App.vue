<template>
  <div id="app">
  <app-header project-title = 'Camper Leaderboard'></app-header>
  <vue-tabs type = "pills" 
            centered 
            active-tab-color="#9b59b6" 
            active-text-color="white">
  <v-tab title="Past 30 Days Leaders">
  <table-grid :col-titles = 'colTitles' :col-data = 'colData'>
  </table-grid>
  </v-tab>
  <v-tab title = "All time Leaders">
  all time
  </v-tab>
  </vue-tabs>
  <app-footer></app-footer>
  </div>
</template>
<script>
import {VueTabs, VTab} from 'vue-nav-tabs'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Table from './components/table.vue'

export default {
  name: 'app',
  data () {
    return {
       colTitles: ['#', 'camper Name', 'points in past 30 days', 'all time points'],
       colData: []
      }
  },
  methods: {
     fetchColData: function() {
       fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
            .then(response => response.json())
            .then(json => this.colData = json)
            console.log(this.colData);
            }
  },
  created() {
    this.fetchColData()
  },
  components: {
    VueTabs,
    VTab,
    'app-header': Header,
    'app-footer': Footer,
    'table-grid': Table
  }
}
</script>

<style src = 'vue-nav-tabs/themes/vue-tabs.css'>
</style>




