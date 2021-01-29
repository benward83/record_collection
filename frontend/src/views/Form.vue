<template>
  <div id="form">
    <Navbar />
    <Form />
  </div>
</template>

<script>

import Form from '@/components/Form.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'form',
  components: {
    Form,
    Navbar,
  },

};
</script>

<style>
#form {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
