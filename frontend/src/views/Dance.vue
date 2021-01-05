<template>
  <div id="dance">
    <Navbar />
    <br>
    <Jumbotron />
    <br>
    <br>
    <Search />
    <br>
    <br>
    <Alldance />
    <br>
    <br>

  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Search from '@/components/Search.vue';
import Alldance from '@/components/Alldance.vue';
import Jumbotron from '@/components/Jumbotron.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    Search,
    Jumbotron,
    Alldance,
  },
};
</script>

<style>
#home {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
