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
    <apexchart width="100%" type="bar" :options="options" :series="series" />
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue';
import { theme } from '~/themes';

export default Vue.extend({
  props: {
    type: {
      type: String,
      default: 'area',
    },
  },
  data() {
    return {
      label: 'Biểu đồ dịch bệnh Covid-19 tại Việt Nam',
      options: {
        dataLabels: {
          enabled: false,
        },
        colors: [theme.default.danger],
        chart: {
          id: 'chart',
          zoom: false,
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
            37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
            54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
            71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
            88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
          ],
          tickPlacement: 'between',
          tickAmount: 10,
        },
      },
      series: [
        {
          name: 'Số ca nhiễm',
          data: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
            37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
            54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
            71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
            88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
          ],
        },
      ],
    };
  },
  computed: {
    darkMode() {
      return (this.$store as any).state.common.darkMode;
    },
    theme() {
      return theme;
    },
  },
});
</script>

<style lang="scss">
.covid-chart.theme--dark {
  .apexcharts-legend-text {
    color: #fff !important;
  }
  .apexcharts-tooltip {
    color: #000 !important;
  }
}
</style>
