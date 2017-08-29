import Vue from 'vue'
import App from './App.vue'
var VueMaterial = require('vue-material')

Vue.use(VueMaterial);

Vue.material.registerTheme('default', {
  primary: 'teal',
  accent: 'green',
  warn: 'red',
  background: 'grey'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
