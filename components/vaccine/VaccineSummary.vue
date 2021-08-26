<template>
  <v-sheet
    class="ma-auto mt-4 pb-8"
    elevation="2"
    rounded
    :color="
      darkMode ? theme.dark.headerBackground : theme.light.headerBackground
    "
    :style="{ position: 'relative' }"
  >
    <v-row>
      <v-col
        xs="12"
        sm="12"
        md="4"
        cols="12"
        :span="4"
        class="pa-4"
        :style="{ color: theme.default.success }"
      >
        <div class="text-subtitle-2 text-center mb-2">
          Tổng số người đã tiêm
        </div>
        <div class="text-h4 text-center font-weight-bold">
          {{
            formatNumber(statistic.data.firstTotal + statistic.data.secondTotal)
          }}
        </div>
      </v-col>
      <v-col xs="12" sm="6" md="4" cols="12" :span="4" class="pa-4">
        <div class="text-subtitle-2 text-center mb-2">Đã tiêm 1 mũi</div>
        <div class="text-h4 text-center font-weight-bold">
          {{ formatNumber(statistic.data.firstTotal) }}
        </div>
      </v-col>
      <v-col xs="12" sm="6" md="4" cols="12" :span="4" class="pa-4">
        <div class="text-subtitle-2 text-center mb-2">Đã tiêm 2 mũi</div>
        <div class="text-h4 text-center font-weight-bold">
          {{ formatNumber(statistic.data.secondTotal) }}
        </div>
      </v-col>
    </v-row>
    <v-row class="px-8 mt-7">
      <v-row class="mb-2 px-4">
        <span class="text-subtitle-2" :style="{ color: theme.default.success }"
          >Dân số đã tiêm 2 mũi</span
        >
        <v-spacer />
        <span class="text-subtitle-2" :style="{ color: theme.default.success }"
          >{{
            statistic.data.secondRatio
              ? statistic.data.secondRatio.toFixed(2)
              : 0
          }}%</span
        >
      </v-row>
      <v-progress-linear
        :value="statistic.data.secondRatio"
        :color="theme.default.success"
        height="14"
        rounded
      ></v-progress-linear>
      <div class="text-subtitle-2 mt-4 px-1">Mục tiêu: 70% dân số</div>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue';
import { theme } from '@/themes';
import { formatNumber } from '@/utils/formatNumber';

export default Vue.extend({
  computed: {
    darkMode() {
      return this.$store.state.common.darkMode;
    },
    theme() {
      return theme;
    },
    statistic() {
      return this.$store.state.vaccine.statistic;
    },
  },
  methods: {
    formatNumber(number: number) {
      return formatNumber(number);
    },
  },
});
</script>
