<template>
  <div id="login-form">
    <Navbar />
    <LoginModal ref="modal"/>
  </div>
</template>

<script>

import LoginModal from '@/components/LoginModal.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'login-form',
  components: {
    LoginModal,
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
