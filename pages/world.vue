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
  created() {
    this.$store.dispatch('world/fetchWorldwideCasesData');
  },
});
</script>
