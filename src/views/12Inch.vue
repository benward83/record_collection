<template>
  <div id="12-inch">
    <Navbar />
    <br>
    <br>
    <Jumbotron />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Jumbotron from '@/components/Jumbotron.vue';

export default {
  name: '12-inch',
  components: {
    Navbar,
    Jumbotron,
  },

};
</script>

<style>

</style>
