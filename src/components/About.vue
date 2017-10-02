<template>
  <div class="layout row wrap">
    <h2 class="text-xs-center">{{ title }}</h2>
    <img class="hidden-xs-only" src="http://via.placeholder.com/800x200" alt="">
    <div class="logo hidden-sm-only flex xs12 sm6">
      <img src="http://via.placeholder.com/300x300" alt="">
    </div>
    <div class="flex sm12 md6">
      <p>{{ description }}</p>
      <h3>{{ span }}</h3>
      <ul>
        <li v-for="qual in qualifications">
          {{ qual.qual }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      title: 'hello',
      description: 'I am so excited that you are considering me to capture your beautiful family! You might be a little bit nervous about the whole process of having portraits taken, maybe it seems like a hassle to get everyone dressed and ready, maybe you don’t feel 100% confident about being in front of my lens, maybe you don’t know what everyone should wear, or maybe you are worried that one of your kiddos might not cooperate. I get it! But, despite all these totally normal worries getting your family pictures taken can actually be really fun! These days may be long but these years are so short and capturing this fleeting time is SO important! So, try not to fret and let me worry about everything.',
      span: 'HERE IS WHY CHOOSING ME MAKES THIS PROCESS EASY PEASY FOR YOU:',
      qualifications: [
        { qual: 'I will send you a what to wear guide as part of my session info PDF but my help with styling the family doesn’t stop there! Send me pictures of the outfits you are thinking of or if you want to buy new things but don’t know where to start let me know a color or style you love and I will send over some great options to choose from or to inspire you.' },
        { qual: 'I have a degree and 4 years of professional experience in photography so I am prepared to create beautiful photographs in any situation. I love working with kiddos and families and I have lots of experience and training in it!' },
        { qual: 'I’m here to help you from beginning to end. When the pictures are edited we will meet and I will help you narrow them down and pick your favorites so you don’t have to agonize over them for weeks. All decisions will be made in an hour at your Image Premier!' },
        { qual: 'This whole experience will be customized for your family. We will pick a custom location, I will help you style it, and then we will create a custom collection that works for you after you have seen the images!' },
        { qual: 'You will walk away with digital files and at least one gorgeous family heirloom. I have carefully chosen the absolute best fine art options for your finished product so your memories can be cherished for a lifetime. It would be such an honor to work with you. Please let me know if you have any questions!' },
        { qual: 'Does all this sound awesome? Email or call me for more info or to book!' }
      ]
    }
  }
}

</script>

<style scoped>

.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>
