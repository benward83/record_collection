<template>
  <div>
    <div class="form-background">
      <div class="form-container mt-3">
        <form @submit.prevent="onSubmit" class="form-control" action="submit">
          <h2 class="form-title">Add a record</h2>

          <!-- inputs -->

          <div class="form-input">
            <b-form-input
              class="mt-2"
              v-model.trim="artist"
              placeholder="Artist"
              autofocus="autofocus"
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
          <div class="form-input">
            <b-form-input
              class="mt-2"
              v-model.trim="releaseDate"
              placeholder="Release date"
            ></b-form-input>
          </div>

            <!-- Radio buttons for record size/type-->

          <div class="record-types-btns">
            <h6>Select record type & size</h6>
            <b-form-group>
              <b-form-radio-group
                v-model="recordSize"
                :options="choicesSize"
                name="plain-inline"
                plain
              ></b-form-radio-group>
            </b-form-group>
            <b-form-group>
              <b-form-radio-group
                v-model="recordType"
                :options="choicesType"
                name="Record size"
                plain
              ></b-form-radio-group>
            </b-form-group>
          </div>

          <!-- dropdown -->

          <div class="form-dropdown mt-3">
            <b-form-select v-model="genre" :options="options"> </b-form-select>

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
                <label class="form-check-label" for="inlineRadio3">VG+</label>
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
                <label class="form-check-label" for="inlineRadio6">P</label>
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
          </div>

          <!-- Add image -->

          <div id="imageUpload">
            <b-form-file
              v-model="imageFile"
              accept="image/jpeg, image/png, image/gif"
              :state="Boolean(imageFile)"
              placeholder="Upload an image for the record..."
            >
            </b-form-file>
          </div>

          <div class="rating mt-3">
            <h4 class="form-text">Please rate this record</h4>
            <b-form-rating v-model="rating" variant="warning" class="mb-2">
            </b-form-rating>
          </div>
          <div class="form-btns mt-3">
            <b-button @click="$router.push('/')" class="cancel" variant="danger"
              >Cancel</b-button
            >
            <b-button type="submit" variant="success">Submit</b-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'AddRecordForm',
  components: {},
  data() {
    return {
      artist: '',
      album: '',
      track: '',
      recordLabel: '',
      releaseDate: '',
      description: '',
      imageFile: null,
      rating: null,
      recordSize: null,
      choicesSize: [
        { text: 'LP', value: 'LP' },
        { text: 'EP', value: 'EP' },
        { text: 'Single', value: 'Single' },
      ],
      recordType: null,
      choicesType: [
        { text: '12 Inch', value: '12' },
        { text: '7 Inch', value: '7' },
      ],
      genre: null,
      options: [
        { value: null, text: 'Genre' },
        { value: 'Soul & Funk', text: 'Soul & Funk' },
        { value: 'Hip Hop', text: 'Hip Hop' },
        { value: 'Dance', text: 'Dance' },
        { value: 'Rock', text: 'Rock' },
        { value: 'World', text: 'World' },
        { value: 'Jazz', text: 'Jazz' },
      ],
    };
  },
  methods: {
    onSubmit() {
      const newRecord = {
        artist: this.artist,
        album: this.album,
        track: this.track,
        recordLabel: this.recordLabel,
        description: this.description,
        recordType: this.recordType,
        recordSize: this.recordSize,
        imageFile: this.imageFile,
        rating: this.rating,
        genre: this.genre,
      };
      console.log(newRecord);
    },
    clearForm() {
      this.artist = '';
      this.album = '';
      this.track = '';
      this.recordLabel = '';
      this.releaseDate = '';
      this.imageFile = null;
      this.recordType = null;
      this.recordSize = null;
      this.rating = null;
      this.genre = null;
    },
  },
};
</script>

<style>
</style>
