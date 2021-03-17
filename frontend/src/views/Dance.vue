<template>
  <div id="dance">
    <Navbar />
    <Header />
    <Search />
    <Alldance :tracks="tracks"/>
    <Pagination />
    <Footer />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Search from '@/components/Search.vue';
import Alldance from '@/components/Alldance.vue';
import Header from '@/components/Header.vue';
import Pagination from '@/components/Pagination.vue';
import Footer from '@/components/Footer.vue';

import Aphex from '@/assets/images/Dance/Aphex.jpg';
import KandD from '@/assets/images/Dance/KandD.jpg';
import Leftfield from '@/assets/images/Dance/Leftfield.jpg';
import StantonAnt from '@/assets/images/Dance/StantonAntidote.jpg';
import StantonVir from '@/assets/images/Dance/StantonVirus.jpg';
import Depeche from '@/assets/images/Dance/Depeche.jpg';

export default {
  name: 'dance',
  components: {
    Navbar,
    Search,
    Header,
    Pagination,
    Footer,
    Alldance,
  },
  data() {
    return {
      tracks: [
        {
          id: 1,
          title: 'Aphex Twin',
          subtitle: 'Windowlicker',
          img: Aphex,
        },
        {
          id: 2,
          title: 'Leftfield ',
          subtitle: 'Leftfield',
          img: Leftfield,
        },
        {
          id: 3,
          title: 'Kruder & Dorfmeister',
          subtitle: 'The K&D sessions',
          img: KandD,
        },
        {
          id: 4,
          title: 'Stanton Warriors',
          subtitle: 'Da Antidote',
          img: StantonAnt,
        },
        {
          id: 5,
          title: 'Stanton Warriors',
          subtitle: 'Da Virus',
          img: StantonVir,
        },
        {
          id: 6,
          title: 'Depeche Mode',
          subtitle: 'Best of',
          img: Depeche,
        },
      ],
    };
  },
};
</script>

<style>
#dance {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
