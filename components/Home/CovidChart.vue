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
      type="area"
      :options="{
        ...options,
        xaxis: {
          categories: data.dates,
          tickPlacement: 'between',
          tickAmount: 5,
        },
      }"
      :series="[
        { name: 'Số ca nhiễm', data: data.confirmed },
        { name: 'Tử vong', data: data.deaths },
        { name: 'Hồi phục', data: data.recovered },
      ]"
    />
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue';
import { TrendingLineCasesData } from '~/store/home';
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
      label: 'Diễn biến dịch Covid-19 tại Việt Nam',
      options: {
        dataLabels: {
          enabled: false,
        },
        colors: [
          theme.default.warning,
          theme.default.danger,
          theme.default.success,
        ],
        chart: {
          id: 'chart',
          zoom: false,
          toolbar: {
            show: false,
          },
        },
      },
    };
  },
  computed: {
    darkMode() {
      return (this.$store as any).state.common.darkMode;
    },
    data() {
      const trendingsLineVietnamCases = (this.$store as any).state.home
        .trendingLineCases.data;
      const dates: string[] = [];
      const confirmed: number[] = [];
      const recovered: number[] = [];
      const deaths: number[] = [];
      trendingsLineVietnamCases.forEach((item: TrendingLineCasesData) => {
        dates.push(item.date);
        confirmed.push(item.confirmed);
        recovered.push(item.recovered);
        deaths.push(item.deaths);
      });
      return {
        dates: dates.slice(Math.max(dates.length - 100, 1)),
        confirmed: confirmed.slice(Math.max(confirmed.length - 100, 1)),
        recovered: recovered.slice(Math.max(recovered.length - 100, 1)),
        deaths: deaths.slice(Math.max(deaths.length - 100, 1)),
      };
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
  .apexcharts-text.apexcharts-xaxis-label title {
    color: #fff !important;
  }
}
</style>
