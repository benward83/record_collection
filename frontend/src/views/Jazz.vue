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
    <Alljazz :tracks="tracks"/>
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
  data() {
    return {
      tracks: [
        {
          id: 1,
          artist: 'Miles Davis',
          subtitle: 'Blue Period',
          img: '../assets/images/Jazz/Miles.jpg',
        },
        {
          id: 2,
          title: 'Nina Simone',
          subtitle: 'Nina Simone',
          img: '../assets/images/Jazz/Nina.jpg',
        },
        {
          id: 3,
          title: 'Grover Washington jr',
          subtitle: 'Inner city blues',
          img: '../assets/images/Jazz/Grover.jpg',
        },
        {
          id: 4,
          title: 'Dexter Gordon',
          subtitle: '204',
          img: '../assets/images/Jazz/Dexter.jpg',
        },
        {
          id: 5,
          title: 'Various Artists',
          subtitle: 'Blue Note',
          img: '../assets/images/Jazz/BlueNote.jpg',
        },
        {
          id: 6,
          title: 'Dexter Gordon',
          subtitle: 'Blues a la Suisse',
          img: '../assets/images/Jazz/DGBlues.jpg',
        },
      ],
    };
  },
};
</script>

<style>
#jazz {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
