<template>
  <router-link class="link" to="/Jazz">
    <div id="jazz">
      <div class="row align-items-center content">
          <p>Jazz</p>
            <div class="col-md-6">
              <img
                src="../assets/images/Miles.jpg"
                alt=""
                class="img-fluid"
              >
            </div>
            <div class="col-md-6">
              <img
                src="../assets/images/Nina.jpg"
                alt=""
                class="img-fluid"
              >
            </div>
          </div>
          <div class="row align-items-center content">
            <div class="col-md-6">
              <img
                src="../assets/images/Grover.jpg"
                class="img-fluid"
              >
            </div>
            <div class="col-md-6">
              <img
                src="../assets/images/Dexter.jpg"
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

};
</script>

<style>

.img-fluid {
  border: 2px solid black;
}
</style>
