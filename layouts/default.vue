<template>
  <v-app>
    <Header />
    <v-main :style="{ background: darkMode ? '#111827' : '#f9fafb' }">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Header from '~/components/common/Header.vue';

export default Vue.extend({
  name: 'Layout',
  components: {
    Header,
  },
  computed: {
    darkMode() {
      return this.$store.state.common.darkMode;
    },
  },
  watch: {
    darkMode() {
      this.$vuetify.theme.dark = this.darkMode;
    },
  },
  mounted() {
    this.$store.commit('common/loadSettings');
  },
});
</script>
