<template>
  <div id="home">
    <Navbar />
    <br>
    <br>
    <Jumbotron />
    <br>
    <br>
    <Search />
    <br>
    <br>
    <Genres />
    <br>
    <br>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Search from '@/components/Search.vue';
import Genres from '@/components/Genres.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    Jumbotron,
    Search,
    Genres,

  },
};
</script>

<style>
#home {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
