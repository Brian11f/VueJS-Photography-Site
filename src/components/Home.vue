<template>
  <div class="xs12">
    <h1>{{ title }}</h1>
    <h2>{{ details }}</h2>
    <img src="http://via.placeholder.com/800x200" alt="">
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'kiana mccrackin',
      details: '- a portrait artist -'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

h1 {
  text-transform: capitalize;
}

h2 {
  text-transform: uppercase;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
