<template>
  <div
    :style="{
      maxWidth: '750px',
      margin: 'auto',
    }"
  >
    <v-row class="mx-auto py-7">
      <v-col v-for="option in options" :key="option.value" cols="4">
        <v-btn
          :outlined="selected !== option.value"
          :color="theme.default.danger"
          dark
          width="100%"
          @click="changeSelected(option.value)"
          >{{ option.label }}</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { theme } from '~/themes';
import { Selected } from '@/store/home';

export default Vue.extend({
  data() {
    return {
      options: [
        { value: 'vn', label: 'Việt Nam' },
        { value: 'hn', label: 'Hà Nội' },
        { value: 'hcm', label: 'TP.HCM' },
      ],
    };
  },
  computed: {
    darkMode() {
      return this.$store.state.common.darkMode;
    },
    selected() {
      return this.$store.state.home.selected;
    },
    theme() {
      return theme;
    },
  },
  methods: {
    changeSelected(value: Selected) {
      this.$store.commit('home/changeSelected', value);
    },
  },
});
</script>
