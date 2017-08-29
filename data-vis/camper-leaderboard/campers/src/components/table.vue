<template>
<table>
<thead>
<tr>
<th v-for="coltitle in colTitles"
    @click="sortCol()">
{{coltitle | capitalize}}
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
</template>

<script>
export default{
    name: 'Table',
    props: {
        colTitles: Array,
        colData: Array
        },
    filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style scoped>
table {
  table-layout: fixed;
  width: 95%;
  border-collapse: collapse;
  font-family: 'helvetica neue', helvetica, arial, sans-serif;
  margin: 1% auto;
}

thead th{
    background-color: #ddd;
    padding: 1%;
}

tbody tr:nth-child(odd) {
  background-color: #bbb;
}

tbody tr:nth-child(even) {
  background-color: #abc;
}
</style>