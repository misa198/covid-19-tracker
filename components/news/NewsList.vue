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
      <NewsListItem
        v-for="newsItem in newsItems"
        :key="newsItem.id"
        :news="newsItem"
      />
    </v-sheet>
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
      return this.$store.state.common.darkMode;
    },
    theme() {
      return theme;
    },
    newsItems() {
      const news = [...this.$store.state.news.data];
      return news.slice(1, news.length);
    },
  },
});
</script>
