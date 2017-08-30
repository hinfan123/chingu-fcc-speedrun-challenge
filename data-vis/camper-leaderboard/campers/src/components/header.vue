<template>
<header id = "Header">
    <h1><a href = "https:\\freecodecamp.com">FreeCodeCamp</a> {{projectTitle}}</h1>
</header>
</template>

<script>
export default {
  name: 'Header',
  props: ['projectTitle']
}
</script>

<style scoped>
header{
    color: green;
    text-align: center;
    margin: 0;
    padding: 1%;
    font-family: Helvetica;
}
a{
  text-decoration: none;
  color: purple;
}
</style>

