<template>
  <div class="xs12">
    <img src="http://via.placeholder.com/800x200" alt="">
    <h2>{{ title }}</h2>
    <div id="carousel">
      <div class="slide" v-for="(item,i) in images">
        <img v-bind:src="item.src" :key="i"></img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  data () {
    return {
      title: 'families',
      images: [
        { src: 'http://via.placeholder.com/400x400' },
        { src: 'http://via.placeholder.com/400x400' },
        { src: 'http://via.placeholder.com/400x400' },
        { src: 'http://via.placeholder.com/400x400' },
        { src: 'http://via.placeholder.com/400x400' },
        { src: 'http://via.placeholder.com/400x400' }
      ]
    }
  }
}
</script>

<style scoped>
  #carousel {
    width: 100%;
    height: 400px;
    overflow: auto;
    white-space: nowrap;
  }

  #carousel .slide {
    display: inline-block;
  }
</style>
