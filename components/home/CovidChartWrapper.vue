<template>
  <HomeContainer>
    <v-row class="mt-6 mb-3">
      <v-col cols="12">
        <CovidChart />
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6" sm="12" cols="12">
        <CovidProvinceChart />
      </v-col>
      <v-col md="6" sm="12" cols="12">
        <CovidProvinceDeathsChart />
      </v-col>
    </v-row>
    <v-row class="mt-6 mb-0">
      <v-col cols="12">
        <CovidProvinceCasesByDayChar />
      </v-col>
    </v-row>
  </HomeContainer>
</template>
<script lang="ts">
import Vue from 'vue';
import { theme } from '@/themes';
import CovidChart from '@/components/home/CovidChart.vue';
import CovidProvinceChart from '@/components/home/CovidProvinceChart.vue';
import CovidProvinceCasesByDayChar from '@/components/home/CovidProvinceCasesByDayChar.vue';
import CovidProvinceDeathsChart from '~/components/home/CovidProvinceDeathsChart.vue';
import HomeContainer from '@/components/common/HomeContainer.vue';

export default Vue.extend({
  components: {
    CovidChart,
    HomeContainer,
    CovidProvinceChart,
    CovidProvinceDeathsChart,
    CovidProvinceCasesByDayChar,
  },
  computed: {
    darkMode() {
      return this.$store.state.common.darkMode;
    },
    theme() {
      return theme;
    },
  },
});
</script>
