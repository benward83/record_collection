<template>
  <div class="form-background">
    <div class="form-container mt-3">
      <form @submit.prevent="submit" class="form-control" action="submit">
        <h2 class="form-title">Add a record</h2>

        <!-- inputs -->

        <div class="form-input">
          <b-form-input
            class="mt-2"
            v-model.trim="artist"
            placeholder="Artist"
          ></b-form-input>
        </div>
        <div class="form-input">
          <b-form-input
            class="mt-2"
            v-model.trim="album"
            placeholder="Album name"
          ></b-form-input>
        </div>
        <div class="form-input">
          <b-form-input
            class="mt-2"
            v-model.trim="track"
            placeholder="Track name"
          ></b-form-input>
        </div>
        <div class="form-input">
          <b-form-input
            class="mt-2"
            v-model.trim="recordLabel"
            placeholder="Record label"
          ></b-form-input>
        </div>

        <!-- dropdown -->

        <div class="form-dropdown mt-3">
          <b-form-select v-model="selected" :options="options"></b-form-select>

          <!-- radio btns -->

          <div class="radio-btns mt-3">
            <h4 class="form-text">Condition of the record</h4>
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
        <!-- Text area -->
        <div>
          <b-form-textarea
            id="textarea"
            v-model="description"
            placeholder="Describe the record..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>

          <pre class="mt-3 mb-0">{{ text }}</pre>
        </div>
        <div class="rating mt-3">
          <h4 class="form-text">Please rate this record</h4>
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
      artist: '',
      album: '',
      track: '',
      recordLabel: '',
      description: '',
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
  // validations: {
  //   form: {
  //     mail: {
  //       required,
  //       email,
  //     },
  //   },
  // },
};
</script>

<style>

</style>
