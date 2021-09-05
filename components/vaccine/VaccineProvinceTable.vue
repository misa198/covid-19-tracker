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
    <Loading v-if="provincesVaccineState.loading" />
    <v-data-table
      :headers="headers"
      :items="provincesVaccineData"
      :items-per-page="5"
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
      <template #[`item.firstInjection`]="{ item }">
        <span
          class="font-weight-bold"
          :style="{ color: theme.default.lightGreen }"
          >{{ formatNumber(item.firstInjection) }}</span
        >
      </template>
      <template #[`item.secondInjection`]="{ item }">
        <span
          class="font-weight-bold"
          :style="{ color: theme.default.success }"
          >{{ formatNumber(item.secondInjection) }}</span
        >
      </template>
      <template #[`item.firstRatio`]="{ item }">
        <span
          class="font-weight-bold"
          :style="{ color: theme.default.lightGreen }"
          >{{ item.firstRatio.toFixed(2) }}%</span
        >
      </template>
      <template #[`item.secondRatio`]="{ item }">
        <span class="font-weight-bold" :style="{ color: theme.default.success }"
          >{{ item.secondRatio.toFixed(2) }}%</span
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
import { theme } from '@/themes';
import { formatNumber } from '@/utils/formatNumber';
import { VaccineProvince } from '@/models/VaccineProvince';

interface VaccineProvinceData extends VaccineProvince {
  firstRatio: number;
  secondRatio: number;
}

export default Vue.extend({
  components: {
    Loading,
  },
  data() {
    return {
      tableTitle: 'Tình hình tiêm chủng tại các tỉnh',
      headers: [
        {
          text: 'Tỉnh thành',
          value: 'name',
        },
        { text: 'Tiêm 1 mũi', value: 'firstInjection' },
        { text: 'Tiêm 2 mũi', value: 'secondInjection' },
        { text: 'Tỷ lệ tiêm 1 mũi', value: 'firstRatio' },
        { text: 'Tỷ lệ tiêm 2 mũi', value: 'secondRatio' },
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
    provincesVaccineState() {
      return this.$store.state.vaccine.provinces;
    },
    provincesVaccineData() {
      const data: VaccineProvinceData[] = [];
      const provincesVaccineData: VaccineProvince[] =
        this.$store.state.vaccine.provinces.data;
      provincesVaccineData.forEach((province) => {
        data.push({
          ...province,
          firstRatio: (province.firstInjection / province.population) * 100,
          secondRatio: (province.secondInjection / province.population) * 100,
        });
      });
      return data;
    },
  },
  methods: {
    formatNumber(number: number) {
      return formatNumber(number);
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
