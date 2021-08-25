<template>
  <v-sheet
    class="d-flex justify-center align-center"
    rounded
    :style="{
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: 30,
    }"
    :color="
      darkMode ? theme.dark.headerBackground : theme.light.headerBackground
    "
  >
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </v-sheet>
</template>
<script>
import Vue from 'vue';
import { theme } from '@/themes';

export default Vue.extend({
  computed: {
    darkMode() {
      return this.$store.state.common.darkMode;
    },
    theme() {
      return theme;
    },
  },
});
</script>
