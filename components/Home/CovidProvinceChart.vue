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
import { ProvinceCasesData } from '@/store/home';
import { theme } from '@/themes';

export default Vue.extend({
  props: {
    type: {
      type: String,
      default: 'area',
    },
  },
  data() {
    return {
      label: 'Tỉnh có nhiều ca nhiễm nhất',
    };
  },
  computed: {
    darkMode() {
      return (this.$store as any).state.common.darkMode;
    },
    theme() {
      return theme;
    },
    data() {
      const provinceCasesStore = (this.$store as any).state.home.provinceCases
        .data as ProvinceCasesData[];
      const provinceCases = JSON.parse(
        JSON.stringify(provinceCasesStore)
      ) as ProvinceCasesData[];
      provinceCases.sort((a, b) => a.confirmed - b.confirmed);
      const topFiveProvinces = provinceCases
        .slice(Math.max(provinceCases.length - 5, 1))
        .reverse();
      const names: string[] = [];
      const cases: number[] = [];
      topFiveProvinces.forEach((province) => {
        names.push(province.provinceName);
        cases.push(province.confirmed);
      });
      return { names, cases };
    },
    options() {
      return {
        theme: {
          mode: (this.$store as any).state.common.darkMode ? 'dark' : 'light',
        },
        dataLabels: {
          enabled: true,
        },
        colors: [theme.default.danger],
        chart: {
          id: 'chart',
          zoom: false,
          toolbar: {
            show: false,
          },
        },
      };
    },
  },
});
</script>
