<template>
  <div id="hiphop">
    <Navbar />
    <br>
    <Jumbotron />
    <br>
    <br>
    <Search />
    <br>
    <br>
    <Allhiphop />
    <br>
    <br>

  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Search from '@/components/Search.vue';
import Allhiphop from '@/components/Allhiphop.vue';
import Jumbotron from '@/components/Jumbotron.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    Search,
    Jumbotron,
    Allhiphop,
  },
};
</script>

<style>
#home {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
