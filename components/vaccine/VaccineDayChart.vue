<template>
  <v-sheet
    width="100%"
    rounded
    elevation="2"
    class="pt-3 py-2 vaccine-chart"
    :color="
      darkMode ? theme.dark.headerBackground : theme.light.headerBackground
    "
  >
    <Loading v-if="statistic.loading" />
    <div
      class="text-h6 font-weight-bold text-center"
      v-text="'Mũi tiêm theo ngày'"
    />
    <apexchart width="100%" :options="data.options" :series="data.series" />
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue';
import Loading from '@/components/common/Loading.vue';
import { AppVietnamVaccineStatistic } from '@/services/app.service';
import { theme } from '@/themes';
import { formatNumber, formatNumberWithComma } from '~/utils/formatNumber';

export default Vue.extend({
  components: {
    Loading,
  },
  computed: {
    statistic() {
      return this.$store.state.vaccine.statistic;
    },
    data() {
      const statisticData = this.$store.state.vaccine.statistic
        .data as AppVietnamVaccineStatistic;
      const selected = [...statisticData.dayInjection];
      const dates: string[] = [];
      const first: number[] = [];
      const second: number[] = [];
      const average: number[] = [];

      selected.forEach((item) => {
        dates.push(item.date);
        first.push(item.first);
        second.push(item.second);
        average.push(item.average);
      });
      const sm = (this as any).$vuetify.breakpoint.smAndDown;

      return {
        options: {
          theme: {
            mode: (this.$store as any).state.common.darkMode ? 'dark' : 'light',
          },
          dataLabels: {
            enabled: false,
          },
          colors: [
            theme.default.success,
            theme.default.indigo,
            theme.default.lime,
          ],
          chart: {
            id: 'chart',
            zoom: false,
            toolbar: {
              show: false,
            },
          },
          xaxis: {
            categories: dates,
            tickPlacement: 'on',
            tickAmount: sm ? 2 : 3,
            labels: {
              rotate: 0,
              rotateAlways: false,
            },
          },
          tooltip: {
            y: {
              formatter: (value: number) => {
                return formatNumber(value);
              },
            },
          },
          yaxis: {
            labels: {
              formatter(value: number) {
                return formatNumberWithComma(value);
              },
            },
          },
          stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            width: 2,
          },
        },
        series: [
          { name: 'Tiêm 1 mũi', data: first, type: 'area' },
          { name: 'Tiêm 2 mũi', data: second, type: 'area' },
          {
            name: 'Trung bình 7 ngày',
            data: average,
            type: 'line',
          },
        ],
      };
    },
    darkMode() {
      return (this.$store as any).state.common.darkMode;
    },
    theme() {
      return theme;
    },
  },
});
</script>
