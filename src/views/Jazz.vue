<template>
  <div id="jazz">
    <Navbar />
    <br>
    <Jumbotron />
    <br>
    <br>
    <Search />
    <br>
    <br>
    <Alljazz />
    <br>
    <br>

  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Search from '@/components/Search.vue';
import Alljazz from '@/components/Alljazz.vue';
import Jumbotron from '@/components/Jumbotron.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    Search,
    Jumbotron,
    Alljazz,
  },
};
</script>

<style>
#home {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
