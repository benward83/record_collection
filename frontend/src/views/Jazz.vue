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
    <Footer />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Search from '@/components/Search.vue';
import Alljazz from '@/components/Alljazz.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'jazz',
  components: {
    Navbar,
    Search,
    Jumbotron,
    Alljazz,
    Footer,
  },
};
</script>

<style>
#jazz {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
