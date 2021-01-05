<template>
  <div class="header">
    <b-navbar variant="dark" type="light" class="bg-dark navbar-dark">
      <b-navbar-brand href="/" tag="h1" class="mb-0">Mr Ben's Records</b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">

          <b-nav-item href="/12inch">12" singles</b-nav-item>

          <b-nav-item href="/7inch">7" singles</b-nav-item>

          <b-nav-item href="/beats">Beats</b-nav-item>

      </b-navbar-nav>
    </b-collapse>

    </b-navbar>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.navbar-dark {
  margin-left: 2%;
  margin-right: 2%;
  border-radius: 10px 10px 10px 10px;
}

.mb-0 {
  margin-left: 20px;
  font-family: 'Ubuntu', sans-serif;
}
</style>
