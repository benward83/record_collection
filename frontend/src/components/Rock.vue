<template>
  <router-link class="link" to="/Rock">
    <div id="rock">
      <div class="col order-last">
        <div class="row align-items-center content">
          <p>Rock</p>
          <div class="col-md-6">
            <img
              src="../assets/images/Rock/American-Beauty.jpg"
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
              src="../assets/images/Rock/Sticky-Fingers.jpg"
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

};
</script>

<style>
.link {
  color: black;
}
.link:hover {
   color: #2980b9
}
</style>
