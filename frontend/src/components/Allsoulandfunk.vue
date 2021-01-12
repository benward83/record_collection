<template>
   <b-container id="all-soul-funk">
      <b-card-group deck>
        <Card v-for='track in tracks' :key=track.id :track="track"/>
      </b-card-group>
  </b-container>
</template>

<script>

import Card from '@/components/Card.vue';

export default {
  name: 'Allsoul-funk',
  components: {
    Card,
  },
  props: ['tracks'],
};
</script>

<style scoped>

#all-dance {
  font-family: 'Ubuntu', sans-serif;
}
</style>
