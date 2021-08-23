<template>
  <v-container>
    <SummarySheet />
    <CovidChartWrapper />
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import SummarySheet from '~/components/Home/SummarySheet.vue';
import CovidChartWrapper from '~/components/Home/CovidChartWrapper.vue';

export default Vue.extend({
  components: {
    SummarySheet,
    CovidChartWrapper,
  },
});
</script>
