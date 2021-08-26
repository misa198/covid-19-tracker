<template>
  <HomeContainer>
    <v-sheet
      class="ma-auto mt-8 pt-2 pb-3 px-3"
      elevation="2"
      rounded
      :color="
        darkMode ? theme.dark.headerBackground : theme.light.headerBackground
      "
      :style="{ position: 'relative' }"
    >
      <Loading v-if="statistic.loading" />
      <div
        class="text-h5 font-weight-bold text-center pt-4 pb-5 red--text"
        v-text="title"
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
            :show-subtitle="false"
          />
          <SumaryItem
            :color="theme.default.danger"
            :sub-color="theme.default.dangerSecondary"
            :title="'Tử vong'"
            :total-value="summary.deaths"
            :show-subtitle="false"
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
      title: 'Kể từ đợt bùng phát 27/4',
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
      const deaths = lastDayData.totalDeaths;

      return {
        confirmed,
        deaths,
      };
    },
  },
});
</script>
