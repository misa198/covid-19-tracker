<template>
  <v-container>
    <Seo :title="title" :description="description" />
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
import Seo from '@/components/common/Seo.vue';

export default Vue.extend({
  components: {
    HomeContainer,
    FirstNews,
    NewsList,
    Seo,
  },
  data() {
    return {
      title: 'Tin tức mới nhất | Covid-19 Tracker',
      description: 'Tin tức mới nhất về dịch bệnh Covid-19',
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
