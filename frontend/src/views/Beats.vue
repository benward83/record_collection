<template>
  <div id="beats">
    <Navbar />
    <br>
    <br>
    <Jumbotron />
    <br>
    <br>
    <Search />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Search from '@/components/Search.vue';

export default {
  name: 'beats',
  components: {
    Navbar,
    Jumbotron,
    Search,

  },

};
</script>

<style>
#beats {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
