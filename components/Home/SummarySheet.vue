<template>
  <v-sheet
    class="ma-auto mt-1 py-3 px-3"
    elevation="2"
    max-width="500px"
    rounded
    color="headerBackground"
  >
    <v-sheet class="mx-auto" color="secondaryBackground" width="100%" rounded>
      <div
        class="text-h6 font-weight-bold text-center pt-2"
        v-text="headerTitle"
      />
      <div class="caption text-center pb-2" v-text="headerSubTitle" />
    </v-sheet>
    <div
      class="subtitle-1 font-weight-bold text-center pt-4 pb-2 red--text"
      v-text="bodyTitle"
    />
    <v-row class="ma-auto px-6 pb-2" width="100%">
      <v-row>
        <SumaryItem
          :show-daily-value="true"
          :color="'#FB8C00'"
          :sub-color="'#FFF9C4'"
          :title="'Ca nhiễm mới'"
          :total-value="100000"
          :daily-value="2000"
        />
        <SumaryItem
          :show-daily-value="true"
          :color="'#00C853'"
          :sub-color="'#B9F6CA'"
          :title="'Hồi phục'"
          :total-value="100000"
          :daily-value="2000"
        />
      </v-row>
      <v-row>
        <SumaryItem
          :show-daily-value="true"
          :color="'#D84315'"
          :sub-color="'#FFCCBC'"
          :title="'Tử vong'"
          :total-value="100000"
          :daily-value="2000"
        />
        <SumaryItem
          :show-daily-value="true"
          :color="'#455A64'"
          :sub-color="'#CFD8DC'"
          :title="'Đang chữa trị'"
          :total-value="100000"
          :daily-value="2000"
        />
      </v-row>
    </v-row>
  </v-sheet>
</template>
<script lang="ts">
import Vue from 'vue';
import SumaryItem from '@/components/Home/SummaryItem.vue';

export default Vue.extend({
  components: {
    SumaryItem,
  },
  data() {
    return {
      headerTitle: 'Số liệu Covid-19 tại Việt Nam',
      headerSubTitle: `Cập nhật ${'3 giờ'} trước`,
      bodyTitle: 'Kể từ khi dịch bùng phát từ đầu 2020 đến nay',
    };
  },
});
</script>
