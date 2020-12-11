<template>
  <div class="jumbotron">
    <b-jumbotron>
        <template #header>Dope Records</template>

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
  }
</style>
