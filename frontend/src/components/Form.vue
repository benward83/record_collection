<template>
<div>
 <div class="overlay">
   <div class="form-container">
    <form action="">
     <div class="body">
       <div class="form-group"></div>
     </div>
   </form>
  </div>
 </div>
</div>
</template>

<script>
export default {
  name: 'form',
};

</script>

<style scoped>

.form-container {
  margin-top: 0em;
  font-size: 14px;
  font-weight: lighter;
  line-height: 1.42857143;
  padding: 0;
  margin: 0;
  width: 320px;
  box-sizing: border-box;
  border-radius: 15px 15px 15px 15px;
  background-color: whitesmoke;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 320px;
  height: 342px;
  margin-left: -160px;
  margin-top: -171px;

}

.body {
  position: relative;
  text-align: center;
  padding-top: 10%;
  padding-bottom: 10%;
  font-size: 14px;
  font-weight: normal;
  padding-bottom: 10px;
  box-sizing: border-box;
  background-clip: border-box;
  border-radius: 15px 15px 15px 15px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: grey;
  opacity: 0.6;
}
</style>
