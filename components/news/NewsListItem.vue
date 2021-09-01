<template>
  <a :href="news.url" target="_blank" class="news-list-item">
    <div :style="{ width: '100%' }" class="mb-2">
      <v-row>
        <v-col xl="4" lg="4" mid="4" sm="12" xs="12" cols="12">
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
              :src="news.picture"
              alt=""
              :style="{
                width: '100%',
                height: '100%',
                position: 'absolute',
              }"
            />
          </div>
        </v-col>
        <v-col xl="8" lg="8" mid="8" sm="12" xs="12" cols="12">
          <div class="text-h6 font-weight-bold mb-2">
            {{ news.title }}
          </div>
          <div
            class="text-subtitle-2 mb-2"
            :style="{
              display: '-webkit-box',
              '-webkit-line-clamp': 3,
              '-webkit-box-orient': 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }"
          >
            {{ news.content }}...
          </div>
          <div class="text-subtitle-2 font-weight-bold mt-2">
            <span> {{ formatTime(new Date(news.publishedDate)) }}</span>
          </div>
          <div class="text-subtitle-2 font-weight-bold mt-2">
            Theo <i> {{ news.siteName }}</i>
          </div>
        </v-col>
      </v-row>
    </div>
  </a>
</template>
<script lang="ts">
import Vue from 'vue';
import { formatTime } from '@/utils/formatTime';
export default Vue.extend({
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatTime(time: Date) {
      return formatTime(time);
    },
  },
});
</script>
<style lang="scss">
.news-list-item {
  color: unset !important;
}
</style>
