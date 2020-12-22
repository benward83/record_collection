<template>
  <div class="jumbotron">
    <b-jumbotron class="text">
        <template #header>Digging in the crates...</template>

        <template #lead>
          Welcome to my record collection
        </template>

        <hr class="my-4">

        <p>
          Feel free to browse around and choose some tunes that fit your mood!
        </p>
      </b-jumbotron>
  </div>
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
  justify-content: center;
  background-image: url('../assets/images/Crates.jpg');
  background-size: 100% 100%;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 5px 5px 5px 5px;
  }

  .text {
    font-family: 'Ubuntu', sans-serif;
    color: whitesmoke;
  }
</style>
