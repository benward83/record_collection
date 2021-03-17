<template>
  <div class="record-overlay">
    <div class="individual-card">
      <b-card
        v-for="track in tracks"
        class="card"
        :title="track.title"
        :sub-title="track.subtitle"
        :key="track.id"
      >
        <b-card-img :src="track.img" alt="Image" class="rounded-0">
        </b-card-img>
      </b-card>
    </div>
    <p class="card-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptate
      porro possimus, eaque repellendus quod ex eum animi suscipit ad minima,
      qui corrupti rerum nihil? Vero quos repellat aspernatur id.
    </p>
  </div>
</template>

<script>
export default {
  name: 'individual-record',
  props: ['tracks'],
};
</script>
