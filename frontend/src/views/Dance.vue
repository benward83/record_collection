<template>
  <div id="dance">
    <Navbar />
    <br>
    <br>
    <Header />
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
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'dance',
  components: {
    Navbar,
    Search,
    Header,
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
