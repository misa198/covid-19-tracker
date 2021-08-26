<template>
  <v-sheet
    width="100%"
    rounded
    elevation="2"
    class="pt-3 py-2 pb-2 covid-chart"
    :color="
      darkMode ? theme.dark.headerBackground : theme.light.headerBackground
    "
  >
    <Loading v-if="provinceCasesState.loading" />
    <div class="text-h6 font-weight-bold text-center" v-text="label" />
    <apexchart
      width="100%"
      type="bar"
      :options="{
        ...options,
        xaxis: {
          categories: data.names,
          tickPlacement: 'between',
        },
      }"
      :series="[
        {
          name: 'Số ca nhiễm',
          data: data.cases,
        },
      ]"
    />
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue';
import Loading from '@/components/common/Loading.vue';
import { theme } from '@/themes';
import { ProvinceStatistic } from '~/models/ProvinceStatistic';
import { formatNumber } from '~/utils/formatNumber';

export default Vue.extend({
  components: {
    Loading,
  },
  props: {
    type: {
      type: String,
      default: 'area',
    },
  },
  data() {
    return {
      label: 'Tỉnh có nhiều ca tử vong nhất',
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
    data() {
      const provinceCasesData = this.$store.state.home.provinceCases
        .data as ProvinceStatistic[];
      const provinceCases = JSON.parse(
        JSON.stringify(provinceCasesData)
      ) as ProvinceStatistic[];
      provinceCases.sort((a, b) => a.deaths - b.deaths);
      const topFiveProvinces = provinceCases
        .slice(Math.max(provinceCases.length - 5, 1))
        .reverse();
      const names: string[] = [];
      const cases: number[] = [];
      topFiveProvinces.forEach((province) => {
        names.push(province.name);
        cases.push(province.deaths);
      });
      return { names, cases };
    },
    options() {
      return {
        theme: {
          mode: this.$store.state.common.darkMode ? 'dark' : 'light',
        },
        dataLabels: {
          enabled: true,
          formatter(value: number) {
            return formatNumber(value);
          },
        },
        colors: [theme.default.danger],
        chart: {
          id: 'chart',
          zoom: false,
          toolbar: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            formatter(value: number) {
              return formatNumber(value);
            },
          },
        },
      };
    },
  },
});
</script>
