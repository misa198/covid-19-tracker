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
    <Loading v-if="statistic.loading" />
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
            statistic.loading
              ? '-'
              : formatNumber(
                  statistic.data.firstTotal + statistic.data.secondTotal
                )
          }}
        </div>
      </v-col>
      <v-col xs="12" sm="6" md="4" cols="12" :span="4" class="pa-4">
        <div class="text-subtitle-2 text-center mb-2">Đã tiêm 1 mũi</div>
        <div class="text-h4 text-center font-weight-bold">
          {{
            statistic.loading ? '-' : formatNumber(statistic.data.firstTotal)
          }}
        </div>
      </v-col>
      <v-col xs="12" sm="6" md="4" cols="12" :span="4" class="pa-4">
        <div class="text-subtitle-2 text-center mb-2">Đã tiêm 2 mũi</div>
        <div class="text-h4 text-center font-weight-bold">
          {{
            statistic.loading ? '-' : formatNumber(statistic.data.secondTotal)
          }}
        </div>
      </v-col>
    </v-row>
    <v-row class="px-8 mt-7">
      <div
        class="mb-2 d-flex"
        :style="{ width: '100%', color: theme.default.lightGreenText }"
      >
        <span class="text-subtitle-2">Dân số đã tiêm 1 mũi</span>
        <v-spacer />
        <span class="text-subtitle-2"
          >{{ firstRatio ? firstRatio.toFixed(2) : 0 }}%</span
        >
      </div>
      <div class="mb-4 d-flex" :style="{ width: '100%' }">
        <span class="text-subtitle-2" :style="{ color: theme.default.success }"
          >Dân số đã tiêm 2 mũi</span
        >
        <v-spacer />
        <span class="text-subtitle-2" :style="{ color: theme.default.success }"
          >{{ secondRatio ? secondRatio.toFixed(2) : 0 }}%</span
        >
      </div>
      <VaccineStatisticBar
        :first-ratio="firstRatio"
        :second-ratio="secondRatio"
      />
      <div class="text-subtitle-2 mt-4 px-1">
        Mục tiêu: 70% dân số được tiêm 2 mũi
      </div>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue';
import Loading from '@/components/common/Loading.vue';
import VaccineStatisticBar from './VacinceStatisticBar.vue';
import { theme } from '@/themes';
import { formatNumber } from '@/utils/formatNumber';

export default Vue.extend({
  components: {
    Loading,
    VaccineStatisticBar,
  },
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
    secondRatio() {
      return Math.abs(this.$store.state.vaccine.statistic.data.secondRatio);
    },
    firstRatio() {
      return Math.abs(this.$store.state.vaccine.statistic.data.firstRatio);
    },
  },
  methods: {
    formatNumber(number: number) {
      return formatNumber(number);
    },
  },
});
</script>
