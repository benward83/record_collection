<template>
  <div id="app">
    <Navbar />
    <Jumbotron />
    <Search />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Search from '@/components/Search.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Jumbotron,
    Search,
  },
};
</script>

<style>
#app {
  margin-top: 10px;
}
</style>
