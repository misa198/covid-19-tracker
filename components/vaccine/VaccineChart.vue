<template>
  <v-sheet
    width="100%"
    rounded
    elevation="2"
    class="pt-3 py-2 pb-2 vaccine-chart"
    :color="
      darkMode ? theme.dark.headerBackground : theme.light.headerBackground
    "
  >
    <div class="text-h6 font-weight-bold text-center" v-text="label" />
    <apexchart width="100%" :type="type" :options="options" :series="series" />
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
    categories: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      options: {
        colors: [theme.default.successSecondary, theme.default.success],
        chart: {
          id: 'chart',
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: this.categories,
        },
      },
      series: [
        {
          name: '1 mũi',
          data: [10, 15, 17, 19, 20],
        },
        {
          name: '2 mũi',
          data: this.data,
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
.vaccine-chart.theme--dark {
  .apexcharts-legend-text {
    color: #fff !important;
  }
}
</style>
