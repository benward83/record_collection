<template>
  <div id="rock">
    <Navbar />
    <br>
    <br>
    <Header />
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
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'rock',
  components: {
    Navbar,
    Search,
    Header,
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
