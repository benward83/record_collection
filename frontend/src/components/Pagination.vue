<template>
  <div class="pagination overflow-auto">
    <div>
      <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"

      >
      </b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      rows: 100,
      currentPage: 1,
    };
  },
};
</script>
