<template>
  <b-container id="all-jazz">
      <div>
        <b-card-group class="card-deck">
          <Card v-for='track in tracks' :key=track.id :track="track"/>
        </b-card-group>
      </div>
  </b-container>
</template>

<script>

import Card from '@/components/Card.vue';

export default {
  name: 'Alljazz',
  components: {
    Card,
  },
  props: ['tracks'],
};
</script>

<style scoped>

#all-jazz {
  font-family: 'Ubuntu', sans-serif;
}
</style>
