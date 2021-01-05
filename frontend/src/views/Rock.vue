<template>
  <div id="rock">
    <Navbar />
    <br>
    <Jumbotron />
    <br>
    <br>
    <Search />
    <br>
    <br>
    <Allrock />
    <br>
    <br>
    <Footer />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Search from '@/components/Search.vue';
import Allrock from '@/components/Allrock.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'rock',
  components: {
    Navbar,
    Search,
    Jumbotron,
    Allrock,
    Footer,
  },
};
</script>

<style>
#rock {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
