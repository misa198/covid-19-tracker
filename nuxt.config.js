export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Covid-19 Tracker',
    title: 'Covid-19 Tracker',
    htmlAttrs: {
      lang: 'vi',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/apexcharts.js', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics',
  ],

  loading: false,

  vuetify: {
    theme: {
      default: {
        primary: '#d84315',
        warning: '#FB8C00',
        warningSecondary: '#FFF9C4',
        success: '#10b981',
        successSecondary: '#B9F6CA',
        danger: '#D84315',
        dangerSecondary: '#FFCCBC',
        info: '#455A64',
        infoSecondary: '#CFD8DC',
      },
      themes: {
        light: {
          primary: '#d84315',
          background: '#f9fafb',
          secondaryBackground: '#f3f4f6',
          headerBackground: '#fff',
        },
        dark: {
          primary: '#d84315',
          background: '#111827',
          secondaryBackground: '#374151',
          headerBackground: '#1f2937',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // vendor: ['vue-apexchart'],
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
};
