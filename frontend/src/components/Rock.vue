<template>
  <router-link class="link" to="/Rock">
    <div
      id="rock"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="{active: hover}"
    >
      <div class="col order-last">
        <div class="row align-items-center content">
          <p>Rock</p>
          <div class="col-md-6">
            <img
              src="../assets/images/Rock/Encore.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
          <div class="col-md-6">
            <img
              src="../assets/images/Rock/Beatles.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
        </div>
        <div class="row align-items-center content">
          <div class="col-md-6">
            <img
              src="../assets/images/Rock/Desire.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
          <div class="col-md-6">
            <img
              src="../assets/images/Rock/Sticky.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
        </div>
      </div>
    </div>
  </router-link>

</template>

<script>
export default {
  data() {
    return {
      hover: false,
    };
  },
  props: {
    music: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style>
.link {
  color: black;
}
.active:hover {
  transition: transform .5s ease-in;
  transition: transform .5s ease-out;
  transform: scale(1.1);
}
</style>
