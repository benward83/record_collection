<template>
  <div id="soul-funk">
    <Navbar />
    <Header />
    <Search />
    <Allworld :tracks="tracks"/>
    <Footer />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Search from '@/components/Search.vue';
import Allworld from '@/components/Allworld.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

import Masato from '@/assets/images/World/Masato.jpg';
import Salman from '@/assets/images/World/Salman.jpg';
import Martha from '@/assets/images/World/Marta.jpg';
import Pradera from '@/assets/images/World/Pradera.jpg';
import Mercedes from '@/assets/images/World/Mercedes.jpg';
import Elis from '@/assets/images/World/Elis.jpg';
import Buena from '@/assets/images/World/Buena.jpg';

export default {
  name: 'world',
  components: {
    Navbar,
    Search,
    Header,
    Footer,
    Allworld,
  },
  data() {
    return {
      tracks: [
        {
          id: 1,
          title: 'Mataso Minami',
          subtitle: 'The Tropics',
          img: Masato,
        },
        {
          id: 2,
          title: 'Salman Sahukur',
          subtitle: 'Oud',
          img: Salman,
        },
        {
          id: 3,
          title: 'Martha Jean Claude',
          subtitle: 'Songs of Haiti',
          img: Martha,
        },
        {
          id: 4,
          title: 'Maria Dolores Pradera',
          subtitle: 'Exitos de Maria Dolores Pradera',
          img: Pradera,
        },
        {
          id: 5,
          title: 'Mercedes Sosa',
          subtitle: 'Gracias a la vida',
          img: Mercedes,
        },
        {
          id: 6,
          title: 'Elis Regina',
          subtitle: 'O fino do fino',
          img: Elis,
        },
        {
          id: 7,
          title: 'Buena Vista Social Club',
          subtitle: 'Buena Vista Social Club',
          img: Buena,
        },
      ],
    };
  },
};
</script>

<style>
#soul-funk {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
