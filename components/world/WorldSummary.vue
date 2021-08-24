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
      <div class="mt-2">
        <WorldSummaryItem
          :color="theme.default.warning"
          :sub-color="theme.default.warningSecondary"
          :title="'Ca nhiễm'"
          :daily-value="100000"
          :total-value="1000000"
        />
        <WorldSummaryItem
          :color="theme.default.success"
          :sub-color="theme.default.successSecondary"
          :title="'Hồi phục'"
          :daily-value="100000"
          :total-value="1000000"
        />
        <WorldSummaryItem
          :color="theme.default.danger"
          :sub-color="theme.default.dangerSecondary"
          :title="'Tử vong'"
          :daily-value="100000"
          :total-value="1000000"
        />
      </div>
    </v-sheet>
  </HomeContainer>
</template>
<script lang="ts">
import Vue from 'vue';
import HomeContainer from '~/components/common/HomeContainer.vue';
import WorldSummaryItem from '~/components/world/WorldSummaryItem.vue';
import { theme } from '~/themes';

export default Vue.extend({
  components: {
    HomeContainer,
    WorldSummaryItem,
  },
  data() {
    return {
      headerTitle: 'Số liệu Covid-19 trên thế giới',
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
