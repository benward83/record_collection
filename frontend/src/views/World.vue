<template>
  <div id="soul-funk">
    <Navbar />
    <br>
    <Jumbotron />
    <br>
    <br>
    <Search />
    <br>
    <br>
    <Allworld />
    <br>
    <br>
    <Footer />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Search from '@/components/Search.vue';
import Allworld from '@/components/Allworld.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'soul&funk',
  components: {
    Navbar,
    Search,
    Jumbotron,
    Footer,
    Allworld,
  },
};
</script>

<style>
#soul-funk {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
