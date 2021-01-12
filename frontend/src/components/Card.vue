<template id="card">
  <b-card
    :title="tracks.title"
    :sub-title="tracks.subtitle"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :class="{active: hover}"
  >
    <b-card-img
        :src="tracks.img"
        alt="Image"
        class="rounded-0"
        >
    </b-card-img>
      <b-card-text>
        Some info here
      </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'card',
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style>
#card{
  font-family: 'Ubuntu', sans-serif;
}
.active:hover {
  transition: transform .5s ease-in;
  transition: transform .5s ease-out;
  transform: scale(1.1);
}
</style>
