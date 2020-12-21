<template>
  <div class="jumbotron background-image">
    <b-jumbotron class="text">
        <template #header>
         Strictly Vinyl
          </template>
        <template #lead >
         Welcome to my record collection
        </template>

        <hr class="my-4">

        <p class="text">
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
  margin-left: 5%;
  margin-right: 5%;
  font-family: 'Ubuntu', sans-serif;
  border-radius: 5px 5px 5px 5px
  }

  .background-image {
  background-image: url('../assets/images/Crates.jpg');
  background-size: 100%;
  background-position: 10%;
  }

  .text {
    color: #DCDCDC;
    font-family: 'Ubuntu', sans-serif;
  }

</style>
