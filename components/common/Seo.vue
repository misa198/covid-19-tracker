<template>
  <span v-if="false"></span>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  head() {
    return {
      title: this.$props.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$props.title,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$props.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$props.description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$props.description,
        },
      ],
    };
  },
});
</script>
