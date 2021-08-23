<template>
  <v-container>
    <SummarySheet />
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import SummarySheet from '~/components/Home/SummarySheet.vue';

export default Vue.extend({
  components: {
    SummarySheet,
  },

});
</script>
