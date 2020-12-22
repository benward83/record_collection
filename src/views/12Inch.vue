<template>
  <div id="12-inch">
    <Navbar />
    <br>
    <br>
    <Jumbotron />
    <Search />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Search from '@/components/Search.vue';

export default {
  name: '12-inch',
  components: {
    Navbar,
    Jumbotron,
    Search,
  },

};
</script>

<style>

</style>
