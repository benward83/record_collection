<template>
  <div id="genres" class="genre-container">
    <div class="row">
      <div class="col order-last">
        <Rock :music="music"/>
        <br>
      </div>
      <div class="col">
        <HipHop :music="music"/>
      </div>
      <div class="col order-first">
        <Jazz :music="music"/>
      </div>
    </div>
    <div class="row">
      <div class="col order-last">
        <World :music="music"/>
      </div>
      <div class="col">
        <Dance :music="music"/>
      </div>
      <br>
      <div class="col order-first">
        <SoulFunk :music="music"/>
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
