<template>
<header class="page-header">
    <h1><a href = "https:\\freecodecamp.com">FreeCodeCamp</a> {{projectTitle}}</h1>
</header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  props: ['projectTitle']
}
</script>

<style scoped>
header{
    backgound-color: green;
    color: white;
    text-align: center;
}
</style>

