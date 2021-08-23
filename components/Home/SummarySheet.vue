<template>
  <v-sheet
    class="ma-auto mt-1 py-3 px-3"
    elevation="2"
    max-width="500px"
    rounded
    color="headerBackground"
  >
    <v-sheet class="mx-auto" color="secondaryBackground" width="100%" rounded>
      <div
        class="text-h6 font-weight-bold text-center pt-2"
        v-text="headerTitle"
      />
      <div class="caption text-center pb-2" v-text="headerSubTitle" />
    </v-sheet>
    <div
      class="text-h7 font-weight-bold text-center pt-4 red--text"
      v-text="bodyTitle"
    />
  </v-sheet>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      headerTitle: 'Số liệu Covid-19 tại Việt Nam',
      headerSubTitle: `Cập nhật ${'3 giờ'} trước`,
      bodyTitle: 'Kể từ khi dịch bùng phát từ đầu 2020 đến nay',
    };
  },
});
</script>
