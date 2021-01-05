<template>
  <div id="7-inch">
    <Navbar />
    <br>
    <br>
    <Jumbotron />
    <br>
    <br>
    <Search />
    <br>
    <br>
    <Single7 />
    <br>
    <br>
    <Footer />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Search from '@/components/Search.vue';
import Single7 from '@/components/Single7.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: '7-inch',
  components: {
    Navbar,
    Jumbotron,
    Search,
    Single7,
    Footer,
  },

};
</script>

<style>

</style>
