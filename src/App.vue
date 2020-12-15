<template>
  <div id="app">
    <Navbar />
    <br>
    <br>
    <Jumbotron />
    <Search />
    <br>
    <Genres />>
    <br>
    <Carousel />
    <br>
    <PlayingNow />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Search from '@/components/Search.vue';
import PlayingNow from '@/components/PlayingNow.vue';
import Genres from '@/components/Genres.vue';
import Carousel from '@/components/Carousel.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Jumbotron,
    Search,
    PlayingNow,
    Genres,
    Carousel,
  },
};
</script>

<style>
#app {
  margin-top: 10px;
}
</style>
