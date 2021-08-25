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
      title: 'Thông tin Vaccine | Covid-19 Tracker',
      description: 'Thông tin Vaccine Covid-19 tại Việt Nam',
    };
  },
  head() {
    return {
      title: this.$data.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$data.title,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$data.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$data.description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$data.description,
        },
      ],
    };
  },
  created() {
    this.$store.dispatch('vaccine/fetchAppVietNamVaccineStatistic');
  },
});
</script>
