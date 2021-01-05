<template>
  <div id="12-inch">
    <Navbar />
    <br>
    <br>
    <Jumbotron />
    <br>
    <br>
    <Search />
    <br>
    <br>
    <Single12 />
    <br>
    <br>
    <Footer />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Search from '@/components/Search.vue';
import Single12 from '@/components/Single12.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: '12-inch',
  components: {
    Navbar,
    Jumbotron,
    Search,
    Single12,
    Footer,
  },

};
</script>

<style>

</style>
