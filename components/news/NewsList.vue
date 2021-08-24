<template>
  <div class="pb-6">
    <v-sheet
      :color="
        darkMode ? theme.dark.headerBackground : theme.light.headerBackground
      "
      width="100%"
      rounded
      elevation="2"
      class="pa-3 pb-0"
    >
      <NewsListItem />
      <NewsListItem />
      <NewsListItem />
      <NewsListItem />
      <NewsListItem />
      <NewsListItem />
      <NewsListItem />
      <NewsListItem />
      <NewsListItem />
    </v-sheet>
    <div class="d-flex align-center justify-center mt-8">
      <v-btn
        :color="
          darkMode ? theme.dark.headerBackground : theme.light.headerBackground
        "
        >Xem thêm</v-btn
      >
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { theme } from '~/themes';
import NewsListItem from '@/components/news/NewsListItem.vue';

export default Vue.extend({
  components: {
    NewsListItem,
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
