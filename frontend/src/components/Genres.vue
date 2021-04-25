<template>
  <div id="genres" class="genre-container">
    <div class="row">
      <div class="col order-last">
        <Rock />
        <br>
      </div>
      <div class="col">
        <HipHop />
      </div>
      <div class="col order-first">
        <Jazz />
      </div>
    </div>
    <div class="row">
      <div class="col order-last">
        <World />
      </div>
      <div class="col">
        <Dance />
      </div>
      <br>
      <div class="col order-first">
        <SoulFunk />
      </div>
    </div>
  </div>
</template>

<script>

import Jazz from '@/components/Jazz.vue';
import Dance from '@/components/Dance.vue';
import Rock from '@/components/Rock.vue';
import World from '@/components/World.vue';
import HipHop from '@/components/HipHop.vue';
import SoulFunk from '@/components/SoulFunk.vue';

export default {
  name: 'genres',
  components: {
    Jazz,
    Dance,
    Rock,
    World,
    HipHop,
    SoulFunk,
  },
  props: {
    music: {
      type: Array,
      default: null,
    },
    created() {
      console.log(this.music);
    },
  },

};
</script>
