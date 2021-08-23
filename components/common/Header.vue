<template>
  <div>
    <v-app-bar
      fixed
      app
      elevation="1"
      :color="
        darkMode ? theme.dark.headerBackground : theme.light.headerBackground
      "
    >
      <v-app-bar-nav-icon @click.stop="toggleDrawer" />
      <nuxt-link to="/">
        <v-toolbar-title
          :style="{
            userSelect: 'none',
            color:
              (darkMode ? theme.dark.text : theme.light.text) + '!important',
          }"
          v-text="title"
        />
      </nuxt-link>
      <v-spacer />
      <v-btn icon @click="changeThemes">
        <v-icon>mdi-brightness-6</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :color="
        darkMode ? theme.dark.headerBackground : theme.light.headerBackground
      "
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          active-class="primary white--text"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { theme } from '@/themes';

export default Vue.extend({
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-home-variant-outline',
          title: 'Trang chủ',
          to: '/',
        },
        {
          icon: 'mdi-needle',
          title: 'Vaccine',
          to: '/vaccine',
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
    };
  },
  computed: {
    darkMode() {
      return this.$store.state.common.darkMode;
    },
    theme() {
      return theme;
    },
  },

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    changeThemes() {
      this.$store.commit('common/changeTheme');
    },
  },
});
</script>
