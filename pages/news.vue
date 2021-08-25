<template>
  <v-container>
    <HomeContainer>
      <FirstNews />
      <div class="mt-6">
        <NewsList />
      </div>
    </HomeContainer>
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
  created() {
    this.$store.dispatch('news/fetchKompaNews');
  },
});
</script>
