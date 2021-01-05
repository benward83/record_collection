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
    <Footer />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Search from '@/components/Search.vue';
import Alldance from '@/components/Alldance.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'dance',
  components: {
    Navbar,
    Search,
    Jumbotron,
    Footer,
    Alldance,
  },
};
</script>

<style>
#dance {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
