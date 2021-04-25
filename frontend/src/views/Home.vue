<template>
  <div id="home">
    <Navbar />
    <Jumbotron />
    <Search />
    <Genres :music="music"/>
    <Footer />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Search from '@/components/Search.vue';
import Genres from '@/components/Genres.vue';
import Footer from '@/components/Footer.vue';

// Rock
import Sticky from '@/assets/images/Rock/Sticky.jpg';
import Beatles from '@/assets/images/Rock/Beatles.jpg';
import Encore from '@/assets/images/Rock/Encore.jpg';
import Desire from '@/assets/images/Rock/Desire.jpg';

// World
import Buena from '@/assets/images/World/Buena.jpg';
import Pradera from '@/assets/images/World/Pradera.jpg';
import Mercedes from '@/assets/images/World/Mercedes.jpg';
import Elis from '@/assets/images/World/Elis.jpg';

// Dance
import Aphex from '@/assets/images/Dance/Aphex.jpg';
import Plump from '@/assets/images/Dance/Plump.jpg';
import KandD from '@/assets/images/Dance/KandD.jpg';
import Leftfield from '@/assets/images/Dance/Leftfield.jpg';

// Jazz
import Miles from '@/assets/images/Jazz/Miles.jpg';
import Nina from '@/assets/images/Jazz/Nina.jpg';
import Grover from '@/assets/images/Jazz/Grover.jpg';
import Dexter from '@/assets/images/Jazz/Dexter.jpg';

// HipHop
import RJD2 from '@/assets/images/HipHop/RJD2.jpg';
import Massive from '@/assets/images/HipHop/Massive.jpg';
import MosDef from '@/assets/images/HipHop/MosDef.jpg';
import Entroducing from '@/assets/images/HipHop/Entroducing.jpg';

// Soul & Funk
import Funkadelic from '@/assets/images/Soul&Funk/Funkadelic.jpg';
import Stylistics from '@/assets/images/Soul&Funk/Stylistics.jpg';
import Benson from '@/assets/images/Soul&Funk/Benson.jpg';
import Barkays from '@/assets/images/Soul&Funk/Barkays.jpg';

export default {
  name: 'home',
  components: {
    Navbar,
    Jumbotron,
    Search,
    Genres,
    Footer,
  },
  data: () => ({
    music: [[
      {
        label: 'rock',
        id: 1,
        title: 'Encore',
        artist: 'Tangerine Dream',
        img: Encore,
      },
      {
        label: 'rock',
        id: 2,
        title: 'The White album',
        artist: 'The Beatles',
        img: Beatles,
      },
      {
        label: 'rock',
        id: 3,
        title: 'Desire',
        artist: 'Bob Dylan',
        img: Desire,
      },
      {
        label: 'rock',
        id: 4,
        title: 'Sticky Fingers',
        artist: 'Rolling Stones',
        img: Sticky,
      },
    ], [
      {
        label: 'world',
        id: 1,
        title: 'Buena Vista Social Club',
        artist: 'Buena Vista Social Club',
        img: Buena,
      },
      {
        label: 'world',
        id: 2,
        title: 'Pradera',
        artist: 'Maria Dolores Pradera',
        img: Pradera,
      },
      {
        label: 'world',
        id: 3,
        artist: 'Elis',
        title: 'Elis',
        img: Elis,
      },
      {
        label: 'world',
        id: 4,
        title: 'Mercedes Sosa',
        artist: 'Mercedes Sosa',
        img: Mercedes,
      },
    ], [
      {
        label: 'dance',
        id: 1,
        title: 'Aphex Twin',
        artist: 'Aphex Twin',
        img: Aphex,
      },
      {
        label: 'dance',
        id: 2,
        title: 'Plump Djs',
        artist: 'Plump Djs',
        img: Plump,
      },
      {
        label: 'dance',
        id: 3,
        title: 'The K&D sessions',
        artist: 'Kruder & Dorfmeister',
        img: KandD,
      },
      {
        label: 'dance',
        id: 4,
        title: 'Leftfield',
        artist: 'Leftfield',
        img: Leftfield,
      },
    ], [
      {
        label: 'jazz',
        id: 1,
        title: 'Miles Davis',
        artist: 'Miles Davis',
        img: Miles,
      },
      {
        label: 'jazz',
        id: 2,
        title: 'Nina Simone',
        artist: 'Nina Simone',
        img: Nina,
      },
      {
        label: 'jazz',
        id: 3,
        title: 'Grover Washington',
        artist: 'Grover Washington',
        img: Grover,
      },
      {
        label: 'jazz',
        id: 4,
        title: 'Dexter Gordon',
        artist: 'Dexter Gordon',
        img: Dexter,
      },
    ], [
      {
        label: 'hiphop',
        id: 1,
        title: 'Deadringer',
        artist: 'RJD2',
        img: RJD2,
      },
      {
        label: 'hiphop',
        id: 2,
        title: 'Massive Attack',
        artist: 'Massive Attack',
        img: Massive,
      },
      {
        label: 'hiphop',
        id: 3,
        title: 'Black on both sides',
        artist: 'Mos Def',
        img: MosDef,
      },
      {
        label: 'hiphop',
        id: 4,
        title: 'Entroducing',
        artist: 'Dj Shadow',
        img: Entroducing,
      },
    ], [
      {
        label: 'soulFunk',
        id: 1,
        title: 'Barkays',
        artist: 'Barkays',
        img: Barkays,
      },
      {
        label: 'hiphop',
        id: 2,
        title: 'Blue Benson',
        artist: 'George Benson',
        img: Benson,
      },
      {
        label: 'hiphop',
        id: 3,
        title: 'Funkadelic',
        artist: 'Funkadelic',
        img: Funkadelic,
      },
      {
        label: 'hiphop',
        id: 4,
        title: 'Stylistics',
        artist: 'Stylistics',
        img: Stylistics,
      },
    ],
    ],
  }),
};
</script>

<style>
#home {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
