<template>
  <v-app dark>
    <Header />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Header from '@/components/Header/index.vue';

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
