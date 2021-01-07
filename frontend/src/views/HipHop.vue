<template>
  <div id="hiphop">
    <Navbar />
    <br>
    <br>
    <Header />
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
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'hiphop',
  components: {
    Navbar,
    Search,
    Header,
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
