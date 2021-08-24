<template>
  <div class="covid-table">
    <v-data-table
      :headers="headers"
      :items="provinceCasesState.data"
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
          value: 'provinceName',
        },
        { text: 'Nhiễm bệnh', value: 'confirmed' },
        { text: 'Hồi phục', value: 'recovered' },
        { text: 'Tử vong', value: 'deaths' },
      ],
    };
  },
  computed: {
    provinceCasesState() {
      return (this.$store as any).state.home.provinceCases;
    },
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
