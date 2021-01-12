<template>
   <b-container id="single7">
      <b-card-group deck>
        <Card v-for='track in tracks' :key=track.id :track="track"/>
      </b-card-group>
  </b-container>
</template>

<script>

import Card from '@/components/Card.vue';

export default {
  name: 'single7',
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
