<template>
  <v-container>
    <HomeContainer v-if="news.data.length > 0">
      <FirstNews />
      <div class="mt-6">
        <NewsList />
      </div>
    </HomeContainer>
    <div v-else class="d-flex justify-center py-8">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import HomeContainer from '@/components/common/HomeContainer.vue';
import FirstNews from '@/components/news/FirstNews.vue';
import NewsList from '@/components/news/NewsList.vue';

export default Vue.extend({
  components: {
    HomeContainer,
    FirstNews,
    NewsList,
  },
  data() {
    return {
      title: 'Tin tức mới nhất | Covid-19 Tracking',
      description: 'Tin tức mới nhất về dịch bệnh Covid-19',
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
    news() {
      return this.$store.state.news;
    },
  },
  created() {
    this.$store.dispatch('news/fetchKompaNews');
  },
});
</script>
