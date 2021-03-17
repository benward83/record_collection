<template>
  <div id="record">
    <!-- <Navbar /> -->
    <IndividualRecord :tracks="tracks" />
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Navbar from '@/components/Navbar.vue';
import IndividualRecord from '@/components/IndividualRecord.vue';
// import Footer from '@/components/Footer.vue';

import Masato from '@/assets/images/World/Masato.jpg';

export default {
  name: 'record',
  components: {
    // Navbar,
    IndividualRecord,
    // Footer,
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
      ],
    };
  },
};
</script>

<style>

</style>
