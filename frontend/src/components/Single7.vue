<template>
   <b-container class="card-container">
      <b-row cols="1" cols-sm="2" cols-md="2" cols-lg="3">
        <b-col
          v-for='track in tracks'
          :key=track.id
          :track="track"
          col
          no-gutters
          class="mb-2"
        >
          <b-card
            :title="track.title"
            :sub-title="track.subtitle"
            :key="track.id"
          >
            <b-card-img
                :src="track.img"
                alt="Image"
                class="rounded-0"
                >
            </b-card-img>
            <b-card-text>
              Some info here
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
  </b-container>
</template>

<script>

export default {
  name: 'single7',
  components: {

  },
  data() {
    return {
      hover: false,
    };
  },
  props: ['tracks'],
};
</script>

<style scoped>

#single7 {
  font-family: 'Ubuntu', sans-serif;
}
</style>
