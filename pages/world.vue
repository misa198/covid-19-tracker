<template>
  <v-container>
    <HomeContainer>
      <WorldSummary />
    </HomeContainer>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import HomeContainer from '@/components/common/HomeContainer.vue';
import WorldSummary from '@/components/world/WorldSummary.vue';

export default Vue.extend({
  components: {
    WorldSummary,
    HomeContainer,
  },
  data() {
    return {
      title: 'Dịch bệnh trên thế giới | Covid-19 Tracker',
      description: 'Thông tin diễn biến dịch bệnh Covid-19 trên thế giới',
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
  created() {
    this.$store.dispatch('world/fetchWorldwideCasesData');
  },
});
</script>
