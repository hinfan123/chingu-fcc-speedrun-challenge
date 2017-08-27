<template>
  <div id="app">
  <app-header project-title = 'Data Visualization Project 2: Camper Leaderboard'></app-header>
    <app-footer></app-footer>
  </div>
</template>
<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'

export default {
  name: 'app',
  data () {
    return {
      
      }
  },
  computed: {

  },
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>




