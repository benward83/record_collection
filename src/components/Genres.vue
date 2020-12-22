<template>
<div class="container">
  <div class="row">
    <div class="col order-last">
       <Rock />
    </div>
    <div class="col">
       <div class="row align-items-center content">
         <p>Hip Hop</p>
          <div class="col-md-6">
            <img
              src="../assets/images/RJD2.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
          <div class="col-md-6">
            <img
              src="../assets/images/KandD.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
        </div>
        <div class="row align-items-center content">
          <div class="col-md-6">
            <img
              src="../assets/images/Black_on_both_sides.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
          <div class="col-md-6">
            <img
              src="../assets/images/Entroducing.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
        </div>
    </div>
    <div class="col order-first">
       <Jazz />
    </div>
  </div>
  <div class="row">
    <div class="col order-last">
       <div class="row align-items-center content">
         <p>World</p>
          <div class="col-md-6">
            <img
              src="../assets/images/Buena.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
          <div class="col-md-6">
            <img
              src="../assets/images/Pradera.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
        </div>
        <div class="row align-items-center content">
          <div class="col-md-6">
            <img
              src="../assets/images/Mercedes.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
          <div class="col-md-6">
            <img
              src="../assets/images/Elis.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
        </div>
    </div>
    <div class="col">
      <Dance />
    </div>
    <br>
    <br>
    <div class="col order-first">
       <div class="row align-items-center content">
         <p>Soul/Funk</p>
          <div class="col-md-6">
            <img
              src="../assets/images/Barkays.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
          <div class="col-md-6">
            <img
              src="../assets/images/Blue-Benson.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
        </div>
        <div class="row align-items-center content">
          <div class="col-md-6">
            <img
              src="../assets/images/Funkadelic.jpg"
              class="img-fluid"
            >
          </div>
          <div class="col-md-6">
            <img
              src="../assets/images/Stylistics.jpg"
              alt=""
              class="img-fluid"
            >
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>

import Jazz from '@/components/Jazz.vue';
import Dance from '@/components/Dance.vue';
import Rock from '@/components/Rock.vue';

export default {
  name: 'genres',
  components: {
    Jazz,
    Dance,
    Rock,
  },

};
</script>

<style>
.container-fluid {
  max-width: 300px;
}

.img-fluid {
  border-block-color: black;
}
</style>
