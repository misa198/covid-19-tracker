<template>
  <v-sheet
    class="ma-auto mt-8 pb-8"
    elevation="2"
    rounded
    :color="
      darkMode ? theme.dark.headerBackground : theme.light.headerBackground
    "
  >
    <v-row>
      <v-col :span="4" class="pa-4" :style="{ color: theme.default.success }">
        <div class="text-subtitle-2 text-center mb-2">
          Tổng số người đã tiêm
        </div>
        <div class="text-h4 text-center font-weight-bold">10.000.000</div>
      </v-col>
      <v-col :span="4" class="pa-4">
        <div class="text-subtitle-2 text-center mb-2">Đã tiêm 1 mũi</div>
        <div class="text-h4 text-center font-weight-bold">10.000.000</div>
      </v-col>
      <v-col :span="4" class="pa-4">
        <div class="text-subtitle-2 text-center mb-2">Đã tiêm 2 mũi</div>
        <div class="text-h4 text-center font-weight-bold">10.000.000</div>
      </v-col>
    </v-row>
    <v-row class="px-8 mt-6">
      <v-row class="mb-2 px-4">
        <span class="text-subtitle-2" :style="{ color: theme.default.success }"
          >Dân số đã tiêm 2 mũi</span
        >
        <v-spacer />
        <span class="text-subtitle-2" :style="{ color: theme.default.success }"
          >50%</span
        >
      </v-row>
      <v-progress-linear
        value="40"
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
import { theme } from '~/themes';

export default Vue.extend({
  computed: {
    darkMode() {
      return this.$store.state.common.darkMode;
    },
    theme() {
      return theme;
    },
  },
});
</script>
