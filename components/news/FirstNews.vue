<template>
  <v-sheet
    :color="
      darkMode ? theme.dark.headerBackground : theme.light.headerBackground
    "
    width="100%"
    rounded
    elevation="2"
    class="pa-6"
    :style="{ userSelect: 'none' }"
  >
    <v-row>
      <div
        :style="{
          width: '100%',
          paddingBottom: '60%',
          backgroundImage: `url(${firstNews.picture})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          borderRadius: '4px',
        }"
      ></div>
    </v-row>
    <v-row class="px-1">
      <v-col cols="12" class="pa-0 mt-3">
        <div class="text-h5 font-weight-bold">{{ firstNews.title }}</div>
      </v-col>
      <v-col cols="12" class="pa-0 mt-1">
        <div class="text-subtitle-1">
          {{ firstNews.content }}
        </div>
      </v-col>
      <v-col cols="12" class="pa-0 mt-2">
        <div class="text-subtitle-2">
          Theo <i> {{ firstNews.siteName }}</i>
        </div>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script lang="ts">
import Vue from 'vue';
import { theme } from '~/themes';
export default Vue.extend({
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
});
</script>
