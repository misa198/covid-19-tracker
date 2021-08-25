<template>
  <a :href="news.url" target="_blank" class="news-list-item">
    <div :style="{ width: '100%' }" class="mb-2">
      <v-row>
        <v-col xl="4" lg="4" mid="4" sm="12" xs="12" cols="12">
          <div
            :style="{
              width: '100%',
              paddingBottom: '60%',
              backgroundImage: `url(${news.picture})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              borderRadius: '4px',
            }"
          ></div>
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
            {{ news.content }}
          </div>
          <div class="text-subtitle-2 font-weight-bold mt-4">
            Theo <i> {{ news.siteName }}</i>
          </div>
        </v-col>
      </v-row>
    </div>
  </a>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
});
</script>
<style lang="scss">
.news-list-item {
  color: unset !important;
}
</style>
