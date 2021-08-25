<template>
  <v-app>
    <Header :style="{ zIndex: 100 }" />
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
import Header from '@/components/common/Header.vue';
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

<style lang="scss">
a {
  text-decoration: none;
}

.v-overlay--active {
  z-index: 99 !important;
}

.apexcharts-svg {
  background: transparent !important;
}
.apexcharts-tooltip.apexcharts-theme-dark {
  .apexcharts-tooltip-title {
    background: white !important;
    border-bottom: 1px solid rgb(214, 214, 214) !important;
  }

  background: white !important;
  color: #000 !important;
}
</style>
