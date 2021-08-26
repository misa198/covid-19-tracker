<template>
  <HomeContainer>
    <v-sheet
      class="ma-auto mt-1 py-3 px-3"
      elevation="2"
      rounded
      :color="
        darkMode ? theme.dark.headerBackground : theme.light.headerBackground
      "
      :style="{ position: 'relative' }"
    >
      <Loading v-if="statistic.loading" />
      <v-sheet
        class="mx-auto"
        :color="
          darkMode
            ? theme.dark.secondaryBackground
            : theme.light.secondaryBackground
        "
        width="100%"
        rounded
      >
        <div
          class="text-h6 font-weight-bold text-center py-2"
          v-text="headerTitle"
        />
      </v-sheet>
      <div
        class="subtitle-1 font-weight-bold text-center pt-4 pb-2 red--text"
        v-text="bodyTitle"
      />
      <div
        class="ma-auto px-6 pb-2"
        :style="{
          flexDirection: 'column !important',
          width: '100%',
        }"
      >
        <v-row>
          <SumaryItem
            :color="theme.default.warning"
            :sub-color="theme.default.warningSecondary"
            :title="'Ca nhiễm'"
            :total-value="summary.confirmed"
            :daily-value="summary.newConfirmed"
          />
          <SumaryItem
            :color="theme.default.success"
            :sub-color="theme.default.successSecondary"
            :title="'Hồi phục'"
            :total-value="summary.recovered"
            :daily-value="summary.newRecovered"
          />
        </v-row>
        <v-row>
          <SumaryItem
            :color="theme.default.danger"
            :sub-color="theme.default.dangerSecondary"
            :title="'Tử vong'"
            :total-value="summary.deaths"
            :daily-value="summary.newDeaths"
          />
          <SumaryItem
            :color="theme.default.info"
            :sub-color="theme.default.infoSecondary"
            :title="'Đang điều trị'"
            :total-value="summary.curing"
            :daily-value="summary.newCuring"
            :is-curing="true"
          />
        </v-row>
      </div>
    </v-sheet>
  </HomeContainer>
</template>
<script lang="ts">
import Vue from 'vue';
import HomeContainer from '@/components/common/HomeContainer.vue';
import SumaryItem from '@/components/home/SummaryItem.vue';
import Loading from '@/components/common/Loading.vue';
import { theme } from '@/themes';

export default Vue.extend({
  components: {
    SumaryItem,
    HomeContainer,
    Loading,
  },
  data() {
    return {
      headerTitle: 'Số liệu Covid-19 tại Việt Nam',
      bodyTitle: 'Kể từ khi dịch bùng phát từ đầu 2020 đến nay',
    };
  },
  computed: {
    darkMode() {
      return this.$store.state.common.darkMode;
    },
    theme() {
      return theme;
    },
    statistic() {
      return this.$store.state.home.statistic;
    },
    summary() {
      const statisticData = this.$store.state.home.statistic.data;
      if (statisticData.length === 0) return {};

      const lastDayData = statisticData[statisticData.length - 1];
      const confirmed = lastDayData.totalConfirmed;
      const newConfirmed = lastDayData.newConfirmed;
      const recovered = lastDayData.totalRecovered;
      const newRecovered = lastDayData.newRecovered;
      const deaths = lastDayData.totalDeaths;
      const newDeaths = lastDayData.newDeaths;
      const curing = lastDayData.totalCuring;
      const newCuring = lastDayData.newCuring;
      return {
        confirmed,
        newConfirmed,
        recovered,
        newRecovered,
        deaths,
        newDeaths,
        curing,
        newCuring,
      };
    },
  },
});
</script>
