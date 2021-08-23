<template>
  <HomeContainer>
    <v-row class="my-4">
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
