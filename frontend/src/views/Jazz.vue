<template>
  <div id="jazz">
    <Navbar />
    <Header />
    <Alljazz :tracks="tracks"/>
    <Pagination />
    <Footer />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Alljazz from '@/components/Alljazz.vue';
import Header from '@/components/Header.vue';
import Pagination from '@/components/Pagination.vue';
import Footer from '@/components/Footer.vue';

import Miles from '@/assets/images/Jazz/Miles.jpg';
import Nina from '@/assets/images/Jazz/Nina.jpg';
import Grover from '@/assets/images/Jazz/Grover.jpg';
import Dexter from '@/assets/images/Jazz/Dexter.jpg';
import BlueNote from '@/assets/images/Jazz/BlueNote.jpg';
import DGBlues from '@/assets/images/Jazz/DGBlues.jpg';

export default {
  name: 'jazz',
  components: {
    Navbar,
    Header,
    Alljazz,
    Pagination,
    Footer,
  },
  data() {
    return {
      tracks: [
        {
          id: 1,
          title: 'Miles Davis',
          subtitle: 'Blue Period',
          img: Miles,
        },
        {
          id: 2,
          title: 'Nina Simone',
          subtitle: 'Nina Simone',
          img: Nina,
        },
        {
          id: 3,
          title: 'Grover Washington jr',
          subtitle: 'Inner city blues',
          img: Grover,
        },
        {
          id: 4,
          title: 'Dexter Gordon',
          subtitle: '204',
          img: Dexter,
        },
        {
          id: 5,
          title: 'Various Artists',
          subtitle: 'Blue Note',
          img: BlueNote,
        },
        {
          id: 6,
          title: 'Dexter Gordon',
          subtitle: 'Blues a la Suisse',
          img: DGBlues,
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
