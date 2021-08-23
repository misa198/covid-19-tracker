<template>
  <v-container>
    <SummarySheet />
    <client-only>
      <CovidChartWrapper />
    </client-only>
    <div class="mt-8 mb-8">
      <HomeContainer>
        <CovidTable />
      </HomeContainer>
    </div>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import SummarySheet from '~/components/Home/SummarySheet.vue';
import CovidChartWrapper from '~/components/Home/CovidChartWrapper.vue';
import CovidTable from '~/components/Home/CovidTable.vue';
import HomeContainer from '@/components/Home/HomeContainer.vue';

export default Vue.extend({
  components: {
    SummarySheet,
    CovidChartWrapper,
    CovidTable,
    HomeContainer,
  },
});
</script>
