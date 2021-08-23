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
        <VaccineChart
          :label="'Tổng người tiêm vaccine'"
          :categories="[1, 2, 3, 4, 5]"
          :data="[1, 2, 3, 4, 6]"
          :type="'area'"
        />
      </v-col>
      <v-col md="6" sm="12" cols="12">
        <VaccineChart
          :label="'Lượng vaccine theo ngày'"
          :categories="[1, 2, 3, 4, 5]"
          :data="[1, 2, 3, 4, 6]"
          :type="'area'"
        />
      </v-col>
    </v-row>
  </HomeContainer>
</template>
<script lang="ts">
import Vue from 'vue';
import { theme } from '~/themes';
import VaccineChart from '~/components/vaccine/VaccineChart.vue';
import HomeContainer from '~/components/common/HomeContainer.vue';

export default Vue.extend({
  components: {
    VaccineChart,
    HomeContainer,
  },
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
