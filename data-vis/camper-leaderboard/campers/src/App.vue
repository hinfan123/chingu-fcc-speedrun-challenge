<template>
  <div id="app">
  <app-header project-title = 'Camper Leaderboard'></app-header>
  <vue-tabs type = "pills" 
            centered 
            active-tab-color="#9b59b6" 
            active-text-color="white">
  <v-tab title="Past 30 Days Leaders">
  <past></past>
  </v-tab>
  <v-tab title = "All time Leaders">
  <alltime></alltime>
  </v-tab>
  </vue-tabs>
  <app-footer></app-footer>
  </div>
</template>
<script>
import {VueTabs, VTab} from 'vue-nav-tabs'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import past30 from './components/past.vue'
import allTime from './components/alltime.vue'

export default {
  name: 'app',
  data () {
    return {
      }
  },
  
  components: {
    VueTabs,
    VTab,
    'app-header': Header,
    'app-footer': Footer,
    'past': past30,
    'alltime': allTime
  }
}
</script>

<style src = 'vue-nav-tabs/themes/vue-tabs.css'>
</style>




