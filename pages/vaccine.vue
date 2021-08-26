<template>
  <v-container>
    <Seo :title="title" :description="description" />
    <HomeContainer>
      <VaccineSumary />
      <div>
        <client-only>
          <VaccineChartWrapper />
        </client-only>
      </div>
    </HomeContainer>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import HomeContainer from '@/components/common/HomeContainer.vue';
import VaccineSumary from '@/components/vaccine/VaccineSummary.vue';
import VaccineChartWrapper from '@/components/vaccine/VaccineChartWrapper.vue';
import Seo from '@/components/common/Seo.vue';

export default Vue.extend({
  components: {
    HomeContainer,
    VaccineSumary,
    VaccineChartWrapper,
    Seo,
  },
  data() {
    return {
      title: 'Thông tin Vaccine | Covid-19 Tracker',
      description: 'Thông tin Vaccine Covid-19 tại Việt Nam',
    };
  },
  created() {
    this.$store.dispatch('vaccine/fetchAppVietNamVaccineStatistic');
  },
});
</script>
