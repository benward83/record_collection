<template>
  <router-link class="link" to="/HipHop">
    <div
      id="hip-hop"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="{active: hover}"
    >
      <div class="row align-items-center content">
        <p>Hip Hop</p>
          <div class="col-md-6">
            <img
              src="../assets/images/HipHop/RJD2.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
          <div class="col-md-6">
            <img
              src="../assets/images/HipHop/Massive.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
        </div>
        <div class="row align-items-center content">
          <div class="col-md-6">
            <img
              src="../assets/images/HipHop/Black_on_both_sides.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
          <div class="col-md-6">
            <img
              src="../assets/images/HipHop/Entroducing.jpg"
              alt=""
              class="img-fluid"
            >
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
