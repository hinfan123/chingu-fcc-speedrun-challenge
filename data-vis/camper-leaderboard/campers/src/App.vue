<template>
  <div id="app">
  <app-header project-title = 'Camper Leaderboard'></app-header>
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

<style>
*{
  margin: 0;
  padding: 0;
}
</style>




