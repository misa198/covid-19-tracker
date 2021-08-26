<template>
  <v-container>
    <Seo :title="title" :description="description" />
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
import HomeContainer from '@/components/common/HomeContainer.vue';
import Seo from '@/components/common/Seo.vue';

export default Vue.extend({
  components: {
    SummarySheet,
    CovidChartWrapper,
    CovidTable,
    HomeContainer,
    Seo,
  },
  data() {
    return {
      title: 'Covid-19 Tracker',
      description: 'Theo dõi tình hình dịch bệnh Covid-19 tại Việt Nam',
    };
  },
  created() {
    this.$store.dispatch('home/fetchVietnamTrendingLineCasesData');
    this.$store.dispatch('home/fetchVietnamSummaryCasesData');
  },
});
</script>
