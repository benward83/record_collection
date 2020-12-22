<template>
  <div id="12-inch">
    <Navbar />
    <br>
    <br>
    <Jumbotron />
    <Search />
    <br>
    <br>
    <Single12 />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Search from '@/components/Search.vue';
import Single12 from '@/components/Single12.vue';

export default {
  name: '12-inch',
  components: {
    Navbar,
    Jumbotron,
    Search,
    Single12,
  },

};
</script>

<style>

</style>
