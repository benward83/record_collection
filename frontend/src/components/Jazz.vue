<template>
  <router-link class="link" to="/Jazz">
    <div
      id="jazz"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="{active: hover}"
    >
      <div class="row align-items-center content">
          <p>Jazz</p>
            <div class="col-md-6">
              <img
                src="../assets/images/Jazz/Miles.jpg"
                alt=""
                class="img-fluid"
              >
            </div>
            <div class="col-md-6">
              <img
                src="../assets/images/Jazz/Nina.jpg"
                alt=""
                class="img-fluid"
              >
            </div>
          </div>
          <div class="row align-items-center content">
            <div class="col-md-6">
              <img
                src="../assets/images/Jazz/Grover.jpg"
                class="img-fluid"
              >
            </div>
            <div class="col-md-6">
              <img
                src="../assets/images/Jazz/Dexter.jpg"
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
  name: 'jazz',
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style>

.img-fluid {
  border: 2px solid rgb(95, 0, 0);
}
.active:hover {
  transition: transform .5s ease-in;
  transition: transform .5s ease-out;
  transform: scale(1.1);
}
</style>
