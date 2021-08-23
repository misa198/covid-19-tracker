<template>
  <v-app>
    <Header />
    <v-main
      :style="{
        background: darkMode ? theme.dark.background : theme.light.background,
      }"
    >
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Header from '~/components/common/Header.vue';
import { theme } from '@/themes';

export default Vue.extend({
  name: 'Layout',
  components: {
    Header,
  },
  computed: {
    darkMode() {
      return this.$store.state.common.darkMode;
    },
    theme() {
      return theme;
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
