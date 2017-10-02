<template>
  <div class="container grid-list-lg text-xs-center" id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/gallery">gallery</router-link>
    <router-link to="/investment">investment</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 { margin: 0 auto; }

img {
  width: 100%;
}

li {
  list-style: none;
}
</style>
