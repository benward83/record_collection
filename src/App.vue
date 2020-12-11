<template>
  <div id="app">
    <Navbar />
    <br>
    <br>
    <Jumbotron />
    <Search />
    <br>
    <br>
    <PlayingNow />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Search from '@/components/Search.vue';
import PlayingNow from '@/components/PlayingNow.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Jumbotron,
    Search,
    PlayingNow,
  },
};
</script>

<style>
#app {
  margin-top: 10px;
}
</style>
