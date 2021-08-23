<template>
  <HomeContainer>
    <v-row class="mx-auto pt-7 pb-3">
      <v-col v-for="option in options" :key="option.value" md="4">
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
      <v-col md="6" sm="12" cols="12">
        <CovidChart
          :label="'Tổng số ca nhiễm tại Việt Nam'"
          :categories="[1, 2, 3, 4, 5]"
          :data="[1, 2, 3, 4, 6]"
          :type="'area'"
        />
      </v-col>
      <v-col md="6" sm="12" cols="12">
        <CovidChart
          :label="'Số ca theo ngày'"
          :categories="[1, 2, 3, 4, 5]"
          :data="[1, 2, 3, 4, 6]"
          :type="'line'"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6" sm="12" cols="12">
        <CovidChart
          :label="'Tỉnh nhiều ca nhiễm nhất'"
          :categories="[1, 2, 3, 4, 5]"
          :data="[1, 2, 3, 4, 6]"
          :type="'bar'"
        />
      </v-col>
      <v-col md="6" sm="12" cols="12">
        <CovidChart
          :label="'Tỉnh nhiều ca nhiễm nhất trong ngày'"
          :categories="[1, 2, 3, 4, 5]"
          :data="[1, 2, 3, 4, 6]"
          :type="'bar'"
        />
      </v-col>
    </v-row>
  </HomeContainer>
</template>
<script lang="ts">
import Vue from 'vue';
import { theme } from '~/themes';
import { Selected } from '@/store/home';
import CovidChart from '~/components/Home/CovidChart.vue';
import HomeContainer from '@/components/Home/HomeContainer.vue';

export default Vue.extend({
  components: {
    CovidChart,
    HomeContainer,
  },
  data() {
    return {
      options: [
        { value: 'hn', label: 'Hà Nội' },
        { value: 'hcm', label: 'TP.HCM' },
        { value: 'vn', label: 'Việt Nam' },
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
