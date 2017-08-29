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
<tr v-for="entry,index in colData">
<td>{{index + 1}}</td>
<td>{{entry.username}}</td>
<td>{{entry.recent}}</td>
<td>{{entry.alltime}}</td>
</tr>
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
  text-align:center;
}

th{
    background-color: #ddd;
    padding: 1%;
}

table td{
		border-bottom:black dotted 1px;
        padding: 1%;
	}

tbody tr:hover{
background-color: #ccc;
    }
</style>