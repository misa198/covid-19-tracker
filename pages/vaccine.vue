<template>
  <v-container>
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

export default Vue.extend({
  components: {
    HomeContainer,
    VaccineSumary,
    VaccineChartWrapper,
  },
  data() {
    return {
      title: 'Thông tin Vaccine | Covid-19 Tracking',
    };
  },
  head() {
    return {
      title: this.$data.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Thông tin Vaccine',
        },
      ],
    };
  },
  created() {
    this.$store.dispatch('vaccine/fetchAppVietNamVaccineStatistic');
  },
});
</script>
