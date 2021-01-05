<template>
  <b-jumbotron class="text">
    <template #header>Digging in the crates for some...</template>

    <template #lead>
      <br>
      <br>
      <br>
    </template>

    <hr class="my-4">

    <p>
      Feel free to browse around and choose some tunes that fit your mood!
    </p>
  </b-jumbotron>
</template>

<script>
export default {

};
</script>

<style scoped>

  .jumbotron {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('../assets/images/Crates.jpg');
  background-position: 50% 55%;
  background-size: cover;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 5px 5px 5px 5px;
  }

  .text {
    font-family: 'Ubuntu', sans-serif;
    color: black;
    text-decoration-color: whitesmoke;
  }

  .p {
    font-size: medium;
  }
</style>
