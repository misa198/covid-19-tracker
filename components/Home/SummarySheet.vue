<template>
  <HomeContainer>
    <v-sheet
      class="ma-auto mt-1 py-3 px-3"
      elevation="2"
      rounded
      :color="
        darkMode ? theme.dark.headerBackground : theme.light.headerBackground
      "
    >
      <v-sheet
        class="mx-auto"
        :color="
          darkMode
            ? theme.dark.secondaryBackground
            : theme.light.secondaryBackground
        "
        width="100%"
        rounded
      >
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
      <div
        class="ma-auto px-6 pb-2"
        style="
           {
            flex-direction: 'column !important';
          }
        "
        width="100%"
      >
        <v-row>
          <SumaryItem
            :show-daily-value="true"
            :color="theme.default.warning"
            :sub-color="theme.default.warningSecondary"
            :title="'Ca nhiễm mới'"
            :total-value="100000"
            :daily-value="2000"
          />
          <SumaryItem
            :show-daily-value="true"
            :color="theme.default.success"
            :sub-color="theme.default.successSecondary"
            :title="'Hồi phục'"
            :total-value="100000"
            :daily-value="2000"
          />
        </v-row>
        <v-row>
          <SumaryItem
            :show-daily-value="true"
            :color="theme.default.danger"
            :sub-color="theme.default.dangerSecondary"
            :title="'Tử vong'"
            :total-value="100000"
            :daily-value="2000"
          />
          <SumaryItem
            :show-daily-value="true"
            :color="theme.default.info"
            :sub-color="theme.default.infoSecondary"
            :title="'Đang chữa trị'"
            :total-value="100000"
            :daily-value="2000"
          />
        </v-row>
      </div>
    </v-sheet>
  </HomeContainer>
</template>
<script lang="ts">
import Vue from 'vue';
import SumaryItem from '@/components/Home/SummaryItem.vue';
import HomeContainer from '@/components/Home/HomeContainer.vue';
import { theme } from '~/themes';

export default Vue.extend({
  components: {
    SumaryItem,
    HomeContainer,
  },
  data() {
    return {
      headerTitle: 'Số liệu Covid-19 tại Việt Nam',
      headerSubTitle: `Cập nhật ${'3 giờ'} trước`,
      bodyTitle: 'Kể từ khi dịch bùng phát từ đầu 2020 đến nay',
    };
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
