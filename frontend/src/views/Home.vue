<template>
  <div id="home">
    <Navbar />
    <Jumbotron />
    <Search />
    <Genres />
    <Footer />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Search from '@/components/Search.vue';
import Genres from '@/components/Genres.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    Jumbotron,
    Search,
    Genres,
    Footer,
  },
};
</script>

<style>
#home {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
