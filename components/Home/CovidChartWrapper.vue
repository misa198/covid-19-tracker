<template>
  <div
    :style="{
      maxWidth: '750px',
      margin: 'auto',
    }"
  >
    <v-row class="mx-auto pt-7 pb-3">
      <v-col v-for="option in options" :key="option.value" cols="4">
        <v-btn
          :outlined="selected !== option.value"
          :color="theme.default.danger"
          dark
          width="100%"
          @click="changeSelected(option.value)"
          >{{ option.label }}</v-btn
        >
      </v-col>
    </v-row>
    <v-row class="mb-4">
      <v-col xs="12" md="6">
        <Chart
          :label="'Tổng số ca nhiễm tại Việt Nam'"
          :categories="[1, 2, 3, 4, 5]"
          :data="[1, 2, 3, 4, 6]"
          :type="'area'"
        />
      </v-col>
      <v-col xs="12" md="6">
        <Chart
          :label="'Số ca theo ngày'"
          :categories="[1, 2, 3, 4, 5]"
          :data="[1, 2, 3, 4, 6]"
          :type="'line'"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12" md="6">
        <Chart
          :label="'Tỉnh nhiều ca nhiễm nhất'"
          :categories="[1, 2, 3, 4, 5]"
          :data="[1, 2, 3, 4, 6]"
          :type="'bar'"
        />
      </v-col>
      <v-col xs="12" md="6">
        <Chart
          :label="'Tỉnh nhiều ca nhiễm nhất trong ngày'"
          :categories="[1, 2, 3, 4, 5]"
          :data="[1, 2, 3, 4, 6]"
          :type="'bar'"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { theme } from '~/themes';
import { Selected } from '@/store/home';
import Chart from '@/components/Home/Chart.vue';

export default Vue.extend({
  components: {
    Chart,
  },
  data() {
    return {
      options: [
        { value: 'vn', label: 'Việt Nam' },
        { value: 'hn', label: 'Hà Nội' },
        { value: 'hcm', label: 'TP.HCM' },
      ],
    };
  },
  computed: {
    darkMode() {
      return this.$store.state.common.darkMode;
    },
    selected() {
      return this.$store.state.home.selected;
    },
    theme() {
      return theme;
    },
  },
  methods: {
    changeSelected(value: Selected) {
      this.$store.commit('home/changeSelected', value);
    },
  },
});
</script>
