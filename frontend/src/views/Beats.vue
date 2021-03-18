<template>
  <div id="beats">
    <Navbar />
    <Jumbotron />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Jumbotron from '@/components/Jumbotron.vue';

export default {
  name: 'beats',
  components: {
    Navbar,
    Jumbotron,
  },

};
</script>

<style>
#beats {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
