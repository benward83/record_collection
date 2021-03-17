<template>
  <div id="soul-funk">
    <Navbar />
    <Header />
    <Search />
    <Allsoulandfunk/>
    <Footer />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Search from '@/components/Search.vue';
import Allsoulandfunk from '@/components/Allsoulandfunk.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

import Bell from '@/assets/images/Soul&Funk/single7/YourLover.jpg';
import McCrae from '@/assets/images/Soul&Funk/single7/RockYourBaby.jpg';
import Fatback from '@/assets/images/Soul&Funk/single7/DoubleDutch.jpg';
import Gloria from '@/assets/images/Soul&Funk/single7/TaintedLove.jpg';
import Major from '@/assets/images/Soul&Funk/single7/Major.jpg';
import Whispers from '@/assets/images/Soul&Funk/single7/Lovin.jpg';
import ArchieBell from '@/assets/images/Soul&Funk/single7/Tighten.jpg';
import Dells from '@/assets/images/Soul&Funk/single7/Dells.jpg';
import Stampeders from '@/assets/images/Soul&Funk/single7/Summer.jpg';

export default {
  name: 'soul&funk',
  components: {
    Navbar,
    Search,
    Header,
    Footer,
    Allsoulandfunk,
  },
  data() {
    return {
      tracks: [
        {
          id: 1,
          title: 'William Bell',
          subtitle: 'I forgot to be yor lover',
          img: Bell,
        },
        {
          id: 2,
          title: 'George McCrae',
          subtitle: 'Rock your baby',
          img: McCrae,
        },
        {
          id: 3,
          title: 'The Fatback band',
          subtitle: 'Double Dutch',
          img: Fatback,
        },
        {
          id: 4,
          title: 'Gloria Jones',
          subtitle: 'Tainted Love',
          img: Gloria,
        },
        {
          id: 5,
          title: 'Major Harris',
          subtitle: 'My Way',
          img: Major,
        },
        {
          id: 6,
          title: 'The Whispers',
          subtitle: 'This kind of lovin',
          img: Whispers,
        },
        {
          id: 7,
          title: 'Archie Bell & The Drells',
          subtitle: 'Tighten Up',
          img: ArchieBell,
        },
        {
          id: 8,
          title: 'The Dells',
          subtitle: 'The Dells',
          img: Dells,
        },
        {
          id: 9,
          title: 'Stampeders',
          subtitle: 'Summer in the city',
          img: Stampeders,
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
