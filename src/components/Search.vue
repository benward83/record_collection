<template>
  <div class="search">
    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label-for="input-default">
      <p>What are you looking for?</p>
      <b-form-input id="input-default"></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
export default {

};
</script>

<style>

#input-default {
  max-width: 500px;
  align-items: center;
  justify-content: center;
}

.search {
max-width: 1000px;
display: block;
margin: auto;
width: 25%;
border-color: #1d1d1d;
}

</style>
