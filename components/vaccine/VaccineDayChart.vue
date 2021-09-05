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
    <v-row class="mb-2 px-4">
      <v-col
        v-for="(range, index) in ranges"
        :key="index"
        md="3"
        cols="6"
        class="d-flex justify-center"
      >
        <v-btn
          width="100%"
          dark
          light
          :outlined="selectedRange.value !== range.value"
          :color="theme.default.danger"
          @click="selectRange(index)"
          >{{ range.name }}</v-btn
        >
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import Loading from '@/components/common/Loading.vue';
import { Range } from '@/models/Range';
import { AppVietnamVaccineStatistic } from '@/services/app.service';
import { theme } from '@/themes';
import Vue from 'vue';
import { formatNumber, formatNumberWithComma } from '~/utils/formatNumber';

const ranges: Range[] = [
  { name: '1 tháng', value: 30 },
  { name: '2 tháng', value: 60 },
  { name: '3 tháng', value: 90 },
  { name: 'Toàn bộ', value: 10000 },
];

export default Vue.extend({
  components: {
    Loading,
  },
  data() {
    return {
      ranges,
      selectedRange: ranges[0],
    };
  },
  computed: {
    statistic() {
      return this.$store.state.vaccine.statistic;
    },
    data() {
      const statisticData = this.$store.state.vaccine.statistic
        .data as AppVietnamVaccineStatistic;
      const selected = [...statisticData.dayInjection].slice(
        Math.max(
          statisticData.dayInjection.length - this.$data.selectedRange.value,
          1
        )
      );
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
            theme.default.lightGreen,
            theme.default.lime,
          ],
          chart: {
            id: 'chart',
            zoom: false,
            stacked: true,
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
            width: [0, 0, 2],
          },
        },
        series: [
          {
            name: 'Tiêm 1 mũi',
            data: first,
            type: 'bar',
          },
          { name: 'Tiêm 2 mũi', data: second, type: 'bar' },
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
  methods: {
    selectRange(index: number) {
      this.$data.selectedRange = ranges[index];
    },
  },
});
</script>
