<template>
  <v-col cols="6" class="px-2">
    <div
      class="subtitle-2 text-center"
      :style="{ color: color }"
      v-text="
        showDailyValue ? `Hôm nay: ${formatNumberMethod(dailyValue)}` : '&nbsp;'
      "
    />
    <div
      class="text-h4 font-weight-black text-center"
      :style="{ color: color }"
      v-text="formatNumberMethod(totalValue)"
    />

    <v-sheet class="mx-auto mt-2" :color="subColor" width="100%" rounded>
      <div
        class="subtitle-1 font-weight-bold text-center"
        :style="{ color: color }"
        v-text="title"
      />
    </v-sheet>
  </v-col>
</template>
<script lang="ts">
import Vue from 'vue';
import { formatNumber } from '@/utils/formatNumber';
export default Vue.extend({
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    subColor: {
      type: String,
      default: 'secondary',
    },
    title: {
      type: String,
      default: '',
    },
    dailyValue: {
      type: Number,
      default: 0,
    },
    totalValue: {
      type: Number,
      default: 0,
    },
    showDailyValue: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    formatNumberMethod(value: number) {
      return formatNumber(value);
    },
  },
});
</script>
