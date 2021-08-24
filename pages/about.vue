<template>
  <v-container :style="{ height: '100%' }">
    <HomeContainer
      class="d-flex justify-center align-center py-4"
      :style="{ height: '100%' }"
    >
      <v-sheet
        :color="
          darkMode ? theme.dark.headerBackground : theme.light.headerBackground
        "
        width="100%"
        rounded
        elevation="2"
        class="px-3 py-8 d-flex flex-column align-center"
      >
        <img src="~/assets/logo.png" width="200px" alt="Logo" class="mb-8" />
        <div class="text-h4 font-weight-bold text-center mb-6">
          Covid 19 Tracker
        </div>
        <div class="text-subtitle-1 font-weight-bold text-center mb-2">
          Cung cấp bởi
          <a href="https://misa198.vercel.app" target="_blank">Thành Vũ</a>
        </div>
        <div class="text-subtitle-1 font-weight-bold text-center mb-4">
          Dữ liệu từ
          <a href="https://vnexpress.net/" target="_blank">VnExpress</a>,
          <a href="https://zingnews.vn/" target="_blank">Zing News</a>
        </div>
        <div class="text-subtitle-1 font-weight-bold text-center">
          <a href="https://github.com/" target="_blank">Github repository</a>
        </div>
      </v-sheet>
    </HomeContainer>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { theme } from '~/themes';
import HomeContainer from '~/components/common/HomeContainer.vue';

export default Vue.extend({
  components: {
    HomeContainer,
  },
  computed: {
    darkMode() {
      return (this.$store as any).state.common.darkMode;
    },
    theme() {
      return theme;
    },
  },
});
</script>
