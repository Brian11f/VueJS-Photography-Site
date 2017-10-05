<template>
  <div>
    <h2 class="text-xs-center">{{ title }}</h2>
    <div class="layout row wrap">
      <p class="flex md6">{{ description.create }}</p>
      <p class="flex md6">
        <span>CREATE YOUR OWN COLLECTIONS</span><br>
        <span>START AT</span><br>
        <span>$550</span><br>
      </p>
    </div>
    <div class="layout row wrap">
      <p class="flex md6">
        <span>A LA CARTE OPTIONS</span><br>
        <span>START AT</span><br>
        <span>$45</span><br>
      </p>
      <p class="flex md6">{{ description.lacart }}</p>
    </div>
    <img class="hidden-xs-only" src="http://via.placeholder.com/800x100" alt="">
  </div>
</template>

<script>
  export default {
    name: 'investment',
    data () {
      return {
        title: 'investment',
        description: {
          create: 'I have found that each family\'s needs are a little different so I am now offering create your own collections! These come with the savings of a collection but the flexibility of a la carte. You will choose what digital file collection you want and then you will choose an heirloom! Please email or call me for a complete price list.',
          lacart: 'In addition to the option of creating a custom collection I have digital files and prints available a la carte. My fine art prints are made with papers from Germany, finished with an archival spray and matted with museum quality materials so they are ready for framing. These art pieces come with a lifetime guarantee against fading and yellowing and are made to last 6 times longer then normal photographic prints. Perfect big on the wall or small on your desk.'
        }
      }
    }
  }
</script>

<style>

</style>
