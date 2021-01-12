<template>
  <div id="12-inch">
    <Navbar />
    <br>
    <br>
    <Jumbotron />
    <br>
    <br>
    <Search />
    <br>
    <br>
    <Single12 :tracks="tracks"/>
    <br>
    <br>
    <Footer />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Search from '@/components/Search.vue';
import Single12 from '@/components/Single12.vue';
import Footer from '@/components/Footer.vue';

import Badseed from '@/assets/images/HipHop/single12/TheKids.jpg';
import Gangstar from '@/assets/images/HipHop/single12/FullClip.jpg';
import ATCQ from '@/assets/images/HipHop/single12/Kick-It.jpg';
import Vadim from '@/assets/images/HipHop/single12/Terrorist.jpg';
import Snoop from '@/assets/images/HipHop/single12/DropIt.jpg';
import RandC from '@/assets/images/HipHop/single12/AintNothing.jpg';
import Pharoah from '@/assets/images/HipHop/single12/Simon.jpg';
import Ty from '@/assets/images/HipHop/single12/WantMore.jpg';
import DeLa from '@/assets/images/HipHop/single12/CoKaneFlow.jpg';

export default {
  name: '12-inch',
  components: {
    Navbar,
    Jumbotron,
    Search,
    Single12,
    Footer,
  },
  data() {
    return {
      tracks: [
        {
          id: 1,
          title: 'Bad Seed',
          subtitle: 'The Kids',
          img: Badseed,
        },
        {
          id: 2,
          title: 'Gangstar ',
          subtitle: 'Full Clip',
          img: Gangstar,
        },
        {
          id: 3,
          title: 'A Tribe Called Quest',
          subtitle: 'Can I Kick It?',
          img: ATCQ,
        },
        {
          id: 4,
          title: 'Dj Vadim',
          subtitle: 'The Terrorist',
          img: Vadim,
        },
        {
          id: 5,
          title: 'Snoop Dogg',
          subtitle: 'Drop It Like Its Hot',
          img: Snoop,
        },
        {
          id: 6,
          title: 'Pharoah Monch',
          subtitle: 'Simon Says',
          img: Pharoah,
        },
        {
          id: 7,
          title: 'Rae & Christian',
          subtitle: 'Aint Nothing like Hip Hop music',
          img: RandC,
        },
        {
          id: 8,
          title: 'Ty ft Roots Manuva',
          subtitle: 'So, Do you want more?',
          img: Ty,
        },
        {
          id: 9,
          title: 'De la Soul',
          subtitle: 'Rock CoKane Flow',
          img: DeLa,
        },
      ],
    };
  },

};
</script>

<style>

</style>
