<template>
  <div class="background">
    <div class="container mt-5">
      <form
          @submit.prevent="submit"
          class="form-control"
          action=""
        >
        <h1>Add a record</h1>
        <div class="form-input">
          <b-form-input class="mt-3" v-model="text" placeholder="Artist"></b-form-input>
        </div>
        <div class="form-input">
          <b-form-input class="mt-3" v-model="text" placeholder="Album name"></b-form-input>
        </div>
        <div class="form-input">
          <b-form-input class="mt-3" v-model="text" placeholder="Track name"></b-form-input>
        </div>
        <div class="form-input">
          <b-form-input class="mt-3" v-model="text" placeholder="Record label"></b-form-input>
        </div>
        <div class="dropdown mt-5">
          <b-form-select v-model="selected" :options="options"></b-form-select>
          <div class="mt-5">
            Year: <strong>{{ selected }}</strong>
          </div>
        </div>
        <div class="rating mt-5">
          <p>Please rate this record</p>
          <b-form-rating
            v-model="value"
            variant="warning"
            class="mb-2"
          >
          </b-form-rating>
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
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
    };
  },
};
</script>

<style scoped>
  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('../assets/images/background.jpg');
    background-position: 50% 55%;
    background-size: cover;
  }

  container {
    padding: auto, auto;
    justify-content: center;
    border-radius: 18px 18px 18px 18px;
  }

  h1 {
    text-align: center;
    color: rgb(95, 0, 0);;
  }
</style>
