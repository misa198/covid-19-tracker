<template>
  <HomeContainer>
    <VaccineSumary />
  </HomeContainer>
</template>

<script lang="ts">
import Vue from 'vue';
import HomeContainer from '~/components/common/HomeContainer.vue';
import VaccineSumary from '~/components/vaccine/VaccineSummary.vue';

export default Vue.extend({
  components: {
    HomeContainer,
    VaccineSumary,
  },
});
</script>
