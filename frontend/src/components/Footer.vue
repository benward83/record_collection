<template>
  <div id="container">
    <div id="info">
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

<style scoped>

#container {
  padding-top:20px;
  margin-bottom:10px;
  color:whitesmoke;
  background-color:rgb(27, 27, 27);
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-left: 2%;
  margin-right: 2%;
  border-radius: 10px 10px 10px 10px;
}

#info {
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
}
#contact {
  text-align:right;
}
#contacts-social {
  width:20%;
  display : flex;
  justify-content : space-between;
}
#contacts-social div {
  height:30px;
  width:30px;
  background-color:rgb(39, 1, 1);
  border-radius:50%;
}
#mentions p {
  font-size:0.5em;
}
</style>
