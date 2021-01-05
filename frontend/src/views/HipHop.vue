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
    <Footer />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Search from '@/components/Search.vue';
import Allhiphop from '@/components/Allhiphop.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'hiphop',
  components: {
    Navbar,
    Search,
    Jumbotron,
    Footer,
    Allhiphop,
  },
};
</script>

<style>
#hiphop {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
