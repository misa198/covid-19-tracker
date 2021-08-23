<template>
  <v-container>
    <SummarySheet />
    <client-only>
      <CovidChartWrapper />
    </client-only>
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
