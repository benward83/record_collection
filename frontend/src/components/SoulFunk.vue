<template>
  <router-link class="link" to="/Soul&Funk">
    <div
      id="soul-funk"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="{active: hover}"
      >
      <div class="row align-items-center content">
         <p>Soul/Funk</p>
          <div class="col-md-6">
            <img
              src="../assets/images/Soul&Funk/Barkays.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
          <div class="col-md-6">
            <img
              src="../assets/images/Soul&Funk/Benson.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
        </div>
        <div class="row align-items-center content">
          <div class="col-md-6">
            <img
              src="../assets/images/Soul&Funk/Funkadelic.jpg"
              class="img-fluid"
            >
          </div>
          <div class="col-md-6">
            <img
              src="../assets/images/Soul&Funk/Stylistics.jpg"
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
  transition: transform .7s ease-in;
  transition: transform .7s ease-out;
  transform: scale(1.1);
}
</style>
