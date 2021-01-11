<template>
  <router-link class="link" to="/Dance">
    <div
      id="dance"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="{active: hover}"
    >
      <div class="row align-items-center content">
        <p>Dance</p>
          <div class="col-md-6">
            <img
              src="../assets/images/Dance/Aphex.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
          <div class="col-md-6">
            <img
              src="../assets/images/Dance/Plump.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
        </div>
        <div class="row align-items-center content">
          <div class="col-md-6">
            <img
              src="../assets/images/Dance/KandD.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
          <div class="col-md-6">
            <img
              src="../assets/images/Dance/Leftfield.jpg"
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
