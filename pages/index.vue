<template>
  <div>
    <client-only>
      <Chart />
    </client-only>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Chart from '@/components/Chart/index.vue';

export default Vue.extend({
  components: {
    Chart,
  },
});
</script>
