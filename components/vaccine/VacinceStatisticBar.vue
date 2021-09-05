<template>
  <div class="vaccine-statistic-bar">
    <v-tooltip top>
      <template #activator="{ on, attrs }">
        <div
          class="vaccine-statistic-bar__first-ratio"
          :style="{
            background: theme.default.lightGreen,
            width: `${firstRatio}%`,
          }"
          v-bind="attrs"
          v-on="on"
        />
      </template>
      <span>{{ firstRatio.toFixed(2) + '%' }}</span>
    </v-tooltip>
    <v-tooltip top>
      <template #activator="{ on, attrs }">
        <div
          class="vaccine-statistic-bar__second-ratio"
          :style="{
            background: theme.default.success,
            width: `${secondRatio}%`,
          }"
          v-bind="attrs"
          v-on="on"
        />
      </template>
      <span>{{ secondRatio.toFixed(2) + '%' }}</span>
    </v-tooltip>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { theme } from '@/themes';

export default Vue.extend({
  props: {
    firstRatio: {
      type: Number,
      default: 0,
    },
    secondRatio: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    theme() {
      return theme;
    },
  },
});
</script>
<style lang="scss">
.vaccine-statistic-bar {
  width: 100%;
  height: 1.2rem;
  border: none;
  border-radius: 0.25rem;
  position: relative;
  overflow: hidden;
  background: #eee;

  &__first-ratio {
    height: 100%;
    position: absolute;
    z-index: 2;
  }

  &__second-ratio {
    height: 100%;
    position: absolute;
    z-index: 3;
  }
}
</style>
