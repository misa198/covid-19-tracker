<template>
  <v-sheet
    class="covid-table px-4 py-2"
    :style="{ position: 'relative' }"
    rounded
    :elevation="2"
    :color="
      darkMode ? theme.dark.headerBackground : theme.light.headerBackground
    "
  >
    <Loading v-if="provinceCasesState.loading" />
    <v-data-table
      :headers="headers"
      :items="provinceCasesState.data"
      :items-per-page="5"
      :sort-by="'newConfirmed'"
      :sort-desc="true"
      :elevation="0"
      :header-props="{
        'sort-by-text': 'Sắp xếp',
      }"
      :footer-props="{
        'items-per-page-text': '',
        'items-per-page-all-text': 'Tất cả',
      }"
    >
      <template #[`item.name`]="{ item }">
        <span class="font-weight-bold">{{ item.name }}</span>
      </template>
      <template #[`item.confirmed`]="{ item }">
        <span class="font-weight-bold">{{ item.confirmed }}</span>
      </template>
      <template #[`item.newConfirmed`]="{ item }">
        <span
          class="font-weight-bold"
          :style="{ color: theme.default.warning }"
          >{{ item.newConfirmed }}</span
        >
      </template>
      <template #[`item.deaths`]="{ item }">
        <span
          class="font-weight-bold"
          :style="{ color: theme.default.danger }"
          >{{ item.deaths }}</span
        >
      </template>
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
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue';
import Loading from '@/components/common/Loading.vue';
import { theme } from '~/themes';

export default Vue.extend({
  components: {
    Loading,
  },
  data() {
    return {
      tableTitle: 'Tình hình dịch tại các tỉnh thành',
      headers: [
        {
          text: 'Tỉnh thành',
          value: 'name',
        },
        { text: 'Nhiễm bệnh', value: 'confirmed' },
        { text: 'Nhiễm hôm nay', value: 'newConfirmed', color: 'red' },
        { text: 'Tử vong', value: 'deaths' },
      ],
    };
  },
  computed: {
    darkMode() {
      return this.$store.state.common.darkMode;
    },
    theme() {
      return theme;
    },
    provinceCasesState() {
      return this.$store.state.home.provinceCases;
    },
  },
});
</script>

<style lang="scss">
.covid-table {
  .v-data-table-header th {
    font-size: 13.5px !important;
  }

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
