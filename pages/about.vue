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
        <img src="@/assets/logo.png" width="200px" alt="Logo" class="mb-8" />
        <div class="text-h4 font-weight-bold text-center mb-6">
          Covid 19 Tracker
        </div>
        <div class="text-subtitle-1 font-weight-bold text-center mb-2">
          <div>Cung cấp bởi</div>
          <div>
            <a href="https://misa198.vercel.app" target="_blank">Thành Vũ</a>
          </div>
        </div>
        <div class="text-subtitle-1 font-weight-bold text-center mb-5">
          <div>Dữ liệu từ</div>
          <div>
            <div>
              <a href="https://moh.gov.vn/" target="_blank">Bộ Y Tế,</a>
              <a href="https://kompa.ai/" target="_blank">Kompa</a>
            </div>
            <div>
              <a href="https://vnexpress.net/" target="_blank">VnExpress,</a>
              <a href="https://zingnews.vn/" target="_blank">Zing News</a>
            </div>
          </div>
        </div>
        <div class="text-subtitle-1 font-weight-bold text-center">
          <a href="https://github.com/misa198/covid-19-tracker" target="_blank">
            <v-icon large>mdi-github</v-icon>
          </a>
        </div>
      </v-sheet>
    </HomeContainer>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { theme } from '@/themes';
import HomeContainer from '@/components/common/HomeContainer.vue';

export default Vue.extend({
  components: {
    HomeContainer,
  },
  data() {
    return {
      title: 'Thông tin | Covid-19 Tracker',
      description: 'Về Covid-19 Tracker',
    };
  },
  head() {
    return {
      title: this.$data.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$data.title,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$data.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$data.description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$data.description,
        },
      ],
    };
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
