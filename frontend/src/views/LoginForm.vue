<template>
  <div id="login-form">
    <Navbar
      v-if="!addRecord"
    />
    <!-- <LoginModal ref="modal"/> -->
    <AddRecordForm />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
// import LoginModal from '@/components/LoginModal.vue';
import AddRecordForm from '@/components/AddRecordForm.vue';

export default {
  name: 'login-form',
  components: {
    Navbar,
    // LoginModal,
    AddRecordForm,
  },
  data() {
    return {
      addRecord: true,
    };
  },

};
</script>

<style>
#form {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
