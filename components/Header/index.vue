<template src="./index.html"></template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Trang chủ',
          to: '/',
        },
        {
          icon: 'mdi-web',
          title: 'Thế giới',
          to: '/world',
        },
        {
          icon: 'mdi-newspaper-variant-outline',
          title: 'Tin tức',
          to: '/news',
        },
        {
          icon: 'mdi-information-outline',
          title: 'Giới thiệu',
          to: '/about',
        },
      ],
      title: 'Covid 19 Tracker',
    }
  },
})
</script>
