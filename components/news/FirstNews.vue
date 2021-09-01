<template>
  <a :href="firstNews.url" target="_blank">
    <v-sheet
      :color="
        darkMode ? theme.dark.headerBackground : theme.light.headerBackground
      "
      width="100%"
      rounded
      elevation="2"
      class="pa-6 pb-8"
      :style="{ userSelect: 'none' }"
    >
      <v-row>
        <div
          :style="{
            width: '100%',
            paddingBottom: '60%',
            borderRadius: '4px',
            overflow: 'hidden',
            position: 'relative',
          }"
        >
          <img
            :src="firstNews.picture"
            :alt="firstNews.title"
            :style="{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            }"
            :onerror="`this.src='${defaultNewsCoverImage}'`"
          />
        </div>
      </v-row>
      <v-row class="px-1">
        <v-col cols="12" class="pa-0 mt-3">
          <div class="text-h5 font-weight-bold">{{ firstNews.title }}</div>
        </v-col>
        <v-col cols="12" class="pa-0 mt-1">
          <div class="text-subtitle-1">{{ firstNews.content }}...</div>
        </v-col>
        <v-col cols="12" class="pa-0 mt-2">
          <div class="text-subtitle-2">
            <span> {{ formatTime(new Date(firstNews.publishedDate)) }}</span>
          </div>
          <div class="text-subtitle-2 mt-2">
            Theo <i> {{ firstNews.siteName }}</i>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </a>
</template>
<script lang="ts">
import Vue from 'vue';
import { theme } from '@/themes';
import { formatTime } from '~/utils/formatTime';
import { defaultNewsCoverImage } from '@/constants/config';

export default Vue.extend({
  data() {
    return {
      defaultNewsCoverImage,
    };
  },
  computed: {
    darkMode() {
      return this.$store.state.common.darkMode;
    },
    theme() {
      return theme;
    },
    firstNews() {
      return this.$store.state.news.data[0];
    },
  },
  methods: {
    formatTime(time: Date) {
      return formatTime(time);
    },
  },
});
</script>
