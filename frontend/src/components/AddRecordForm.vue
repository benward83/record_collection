<template>
  <div class="form-background">
    <div class="container mt-3">
      <form @submit.prevent="submit" class="form-control" action="">
        <h4 class="form-title">Add a record</h4>
        <div class="form-input">
          <b-form-input
            class="mt-2"
            v-model="text"
            placeholder="Artist"
          ></b-form-input>
        </div>
        <div class="form-input">
          <b-form-input
            class="mt-2"
            v-model="text"
            placeholder="Album name"
          ></b-form-input>
        </div>
        <div class="form-input">
          <b-form-input
            class="mt-2"
            v-model="text"
            placeholder="Track name"
          ></b-form-input>
        </div>
        <div class="form-input">
          <b-form-input
            class="mt-2"
            v-model="text"
            placeholder="Record label"
          ></b-form-input>
        </div>
        <div class="dropdown mt-3">
          <b-form-select v-model="selected" :options="options"></b-form-select>
          <!-- radio btns -->
          <div class="radio-btns mt-3">
            <h6>Condition of the record</h6>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">M</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">NM</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
              />
              <label class="form-check-label" for="inlineRadio3"
                >VG+</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio4"
                value="option4"
              />
              <label class="form-check-label" for="inlineRadio1">VG</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio5"
                value="option5"
              />
              <label class="form-check-label" for="inlineRadio2">G</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio6"
                value="option6"
              />
              <label class="form-check-label" for="inlineRadio6"
                >P</label
              >
            </div>
          </div>
        </div>
        <div class="rating mt-3">
          <h6>Please rate this record</h6>
          <b-form-rating v-model="value" variant="warning" class="mb-2">
          </b-form-rating>
        </div>
        <div class="form-btns mt-3">
          <b-button @click="$router.push('/')" class="cancel" variant="danger"
            >Cancel</b-button
          >
          <b-button class="submit" variant="success">Submit</b-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddRecordForm',
  components: {},
  data() {
    return {
      text: '',
      selected: null,
      options: [
        { value: null, text: 'Genre' },
        { value: 'a', text: 'Soul & Funk' },
        { value: 'b', text: 'Dance' },
        { value: 'a', text: 'Rock' },
        { value: 'b', text: 'World' },
        { value: 'a', text: 'Jazz' },
      ],
    };
  },
};
</script>

<style scoped>
.form-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../assets/images/background.jpg");
  background-position: 50% 55%;
  background-size: cover;
  opacity: 0.8;
}

.form-control {
  display: inline-block;
  margin: auto auto;
}

.container {
  display: block;
  text-align: center;
  justify-content: center;
  border-radius: 18px 18px 18px 18px;
  max-width: 50%;
  height: 30%;
}

.form-btns {
  margin: 10px 10px;
  padding: 10px 10px;
  display: inline-block;
}

.cancel {
  float: left;
  margin-right: 15px;
}

.submit {
  float: right;
  margin-left: 15px;
}
.form-title {
  text-align: center;
  color: rgb(95, 0, 0);
  padding: 10px 10px
}
</style>
