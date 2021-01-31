<template>
  <div id="footer-container">
    <div id="footer-info">
      <div id="contact">
        <p>For info about buying or selling records, please contact me @:</p>
        <p>{{ mail }}</p>
        <p> {{ phone }} </p>
      </div>
      <div id="contacts-social">
        <div>
          <i class="fa fa-github" aria-hidden="true"></i>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div id="mentions">
      <p> {{ mention }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-btm',
  data() {
    return {
      mail: 'benward83@gmail.com',
      phone: '608334416',
      mention: '2021 copyright',
    };
  },
};
</script>
