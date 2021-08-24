<template>
  <HomeContainer>
    <v-row class="my-4">
      <v-col cols="12">
        <CovidChart />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <CovidProvinceChart />
      </v-col>
    </v-row>
  </HomeContainer>
</template>
<script lang="ts">
import Vue from 'vue';
import { theme } from '~/themes';
import CovidChart from '~/components/home/CovidChart.vue';
import CovidProvinceChart from '~/components/home/CovidProvinceChart.vue';
import HomeContainer from '~/components/common/HomeContainer.vue';

export default Vue.extend({
  components: {
    CovidChart,
    HomeContainer,
    CovidProvinceChart,
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
});
</script>
