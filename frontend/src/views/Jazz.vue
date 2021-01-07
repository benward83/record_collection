<template>
  <div id="jazz">
    <Navbar />
    <br>
    <br>
    <Header />
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
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'jazz',
  components: {
    Navbar,
    Search,
    Header,
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
