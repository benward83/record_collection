<template id="card">
  <div class="card-container">
    <b-card
      :title="track.title"
      :sub-title="track.subtitle"
      :key="track.id"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="{active: hover}"
    >
      <b-card-img
          :src="track.img"
          alt="Image"
          class="rounded-0"
          >
      </b-card-img>
        <b-card-text>
          Some info here
        </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['track'],
  data() {
    return {
      hover: false,
    };
  },
};
</script>
