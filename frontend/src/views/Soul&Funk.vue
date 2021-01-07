<template>
  <div id="soul-funk">
    <Navbar />
    <br>
    <br>
    <Header />
    <br>
    <br>
    <Search />
    <br>
    <br>
    <Allsoulandfunk />
    <br>
    <br>
    <Footer />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Search from '@/components/Search.vue';
import Allsoulandfunk from '@/components/Allsoulandfunk.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'soul&funk',
  components: {
    Navbar,
    Search,
    Header,
    Footer,
    Allsoulandfunk,
  },
};
</script>

<style>
#soul-funk {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
