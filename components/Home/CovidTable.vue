<template>
  <div class="covid-table">
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-2"
    >
      <template #top>
        <v-toolbar flat>
          <v-toolbar-title class="ma-auto">
            <div
              class="text-h6 font-weight-bold text-center pt-2"
              v-text="tableTitle"
            />
          </v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      tableTitle: 'Tình hình dịch tại các tỉnh thành',
      headers: [
        {
          text: 'Tỉnh thành',
          value: 'city',
        },
        { text: 'Hôm nay', value: 'today' },
        { text: 'Tổng', value: 'total' },
      ],
      desserts: [
        {
          city: 'Frozen Yogurt',
          today: 159,
          total: 6.0,
        },
        {
          city: 'Ice cream sandwich',
          today: 237,
          total: 9.0,
        },
        {
          city: 'Eclair',
          today: 262,
          total: 16.0,
        },
        {
          city: 'Cupcake',
          today: 305,
          total: 3.7,
        },
        {
          city: 'Gingerbread',
          today: 356,
          total: 16.0,
        },
        {
          city: 'Jelly bean',
          today: 375,
          total: 0.0,
        },
        {
          city: 'Lollipop',
          today: 392,
          total: 0.2,
        },
        {
          city: 'Honeycomb',
          today: 408,
          total: 3.2,
        },
        {
          city: 'Donut',
          today: 452,
          total: 25.0,
        },
        {
          city: 'KitKat',
          today: 518,
          total: 26.0,
        },
      ],
    };
  },
});
</script>

<style lang="scss">
.covid-table {
  .v-toolbar__content {
    background: #fff !important;
  }

  .v-data-table.theme--dark {
    background: #1f2937 !important;

    .v-toolbar__content {
      background: #1f2937 !important;
    }
  }
}
</style>
