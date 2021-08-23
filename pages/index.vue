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
import SummarySheet from '@/components/home/SummarySheet.vue';
import CovidChartWrapper from '@/components/home/CovidChartWrapper.vue';
import CovidTable from '@/components/home/CovidTable.vue';
import HomeContainer from '~/components/common/HomeContainer.vue';

export default Vue.extend({
  components: {
    SummarySheet,
    CovidChartWrapper,
    CovidTable,
    HomeContainer,
  },
});
</script>
