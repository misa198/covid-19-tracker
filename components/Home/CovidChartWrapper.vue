<template>
  <HomeContainer>
    <v-row class="my-4">
      <v-col cols="12">
        <CovidChart
          :label="'Tổng số ca nhiễm tại Việt Nam'"
          :categories="[1, 2, 3, 4, 5]"
          :data="[1, 2, 3, 4, 6]"
          :type="'area'"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <CovidChart
          :label="'Tỉnh nhiều ca nhiễm nhất'"
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
import CovidChart from '~/components/home/CovidChart.vue';
import HomeContainer from '~/components/common/HomeContainer.vue';

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
