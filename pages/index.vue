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
import HomeContainer from '@/components/common/HomeContainer.vue';

export default Vue.extend({
  components: {
    SummarySheet,
    CovidChartWrapper,
    CovidTable,
    HomeContainer,
  },
  data() {
    return {
      title: 'Covid-19 Tracking',
      description: 'Theo dõi tình hình dịch bệnh Covid-19 tại Việt Nam',
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
    this.$store.dispatch('home/fetchVietnamTrendingLineCasesData');
    this.$store.dispatch('home/fetchVietnamSummaryCasesData');
  },
});
</script>
