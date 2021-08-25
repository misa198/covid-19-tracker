<template>
  <HomeContainer>
    <v-row class="my-4">
      <v-col cols="12" class="mb-2">
        <VaccineDayChart />
      </v-col>
      <v-col cols="12">
        <VaccineSummaryChart />
      </v-col>
    </v-row>
  </HomeContainer>
</template>
<script lang="ts">
import Vue from 'vue';
import VaccineDayChart from '~/components/vaccine/VaccineDayChart.vue';
import VaccineSummaryChart from '~/components/vaccine/VaccineSummaryChart.vue';
import HomeContainer from '~/components/common/HomeContainer.vue';

export default Vue.extend({
  components: {
    VaccineDayChart,
    HomeContainer,
    VaccineSummaryChart,
  },
});
</script>
