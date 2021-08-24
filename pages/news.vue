<template>
  <v-container>
    <HomeContainer>
      <FirstNews />
    </HomeContainer>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import FirstNews from '@/components/news/FirstNews.vue';
import HomeContainer from '@/components/common/HomeContainer.vue';
export default Vue.extend({
  components: {
    FirstNews,
    HomeContainer,
  },
});
</script>
