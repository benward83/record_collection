<template>
  <div id="rock">
    <Navbar />
    <Header />
    <Allrock :tracks="tracks"/>
    <Pagination />
    <Footer />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Allrock from '@/components/Allrock.vue';
import Header from '@/components/Header.vue';
import Pagination from '@/components/Pagination.vue';
import Footer from '@/components/Footer.vue';

import Fermin from '@/assets/images/Rock/Suicide.jpg';
// import GratefulDead from '@/assets/images/Rock/American-Beauty.jpg';
import Dylan from '@/assets/images/Rock/Desire.jpg';
import Tangerine from '@/assets/images/Rock/Encore.jpg';
import Blondie from '@/assets/images/Rock/Parallel.jpg';
import Stones from '@/assets/images/Rock/Sticky.jpg';
import MGMT from '@/assets/images/Rock/MGMT.jpg';

export default {
  name: 'rock',
  components: {
    Navbar,
    Header,
    Allrock,
    Pagination,
    Footer,
  },
  data() {
    return {
      tracks: [
        {
          id: 1,
          title: 'Fermin Muguruza',
          subtitle: 'B-Map',
          img: Fermin,
        },
        // {
        //   id: 2,
        //   title: 'The Grateful Dead ',
        //   subtitle: 'American Beauty',
        //   img: GratefulDead,
        // },
        {
          id: 3,
          title: 'Bob Dylan',
          subtitle: 'Desire',
          img: Dylan,
        },
        {
          id: 4,
          title: 'Tangerine Dream',
          subtitle: 'Encore',
          img: Tangerine,
        },
        {
          id: 5,
          title: 'Blondie',
          subtitle: 'Parallel lines',
          img: Blondie,
        },
        {
          id: 6,
          title: 'The Rolling Stones',
          subtitle: 'Sticky Fingers',
          img: Stones,
        },
        {
          id: 7,
          title: 'MGMT',
          subtitle: 'MGMT',
          img: MGMT,
        },
      ],
    };
  },
};
</script>

<style>
#rock {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
