<template>
  <v-sheet
    :color="
      darkMode ? theme.dark.headerBackground : theme.light.headerBackground
    "
    width="100%"
    rounded
    elevation="2"
    class="pa-6"
    :style="{ userSelect: 'none' }"
  >
    <v-row>
      <div
        :style="{
          width: '100%',
          paddingBottom: '60%',
          backgroundImage: `url(https://i-vnexpress.vnecdn.net/2021/08/24/phan-van-mai-7160-1629778509.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          borderRadius: '4px',
        }"
      ></div>
    </v-row>
    <v-row class="px-1">
      <v-col cols="12" class="pa-0 mt-3">
        <div class="text-h5 font-weight-bold">
          Ông Phan Văn Mãi làm Chủ tịch TP HCM
        </div>
      </v-col>
      <v-col cols="12" class="pa-0 mt-1">
        <div class="text-subtitle-1">
          Tân Chủ tịch UBND TP HCM đắc cử với tỷ lệ phiếu 87/89 đại biểu có mặt,
          sau khi được Chủ tịch HĐND thành phố Nguyễn Thị Lệ giới thiệu tại kỳ
          họp thứ 2, HĐND TP HCM khóa X. Việc miễn nhiệm ông Phong diễn ra trước
          đó với tỷ lệ 100% đại biểu tán thành
        </div>
      </v-col>
      <v-col cols="12" class="pa-0 mt-2">
        <div class="text-subtitle-2">40 phút trước</div>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script lang="ts">
import Vue from 'vue';
import { theme } from '~/themes';
export default Vue.extend({
  computed: {
    darkMode() {
      return (this.$store as any).state.common.darkMode;
    },
    theme() {
      return theme;
    },
  },
});
</script>
