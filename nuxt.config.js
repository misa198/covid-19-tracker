export default {
  target: 'server',
  serverMiddleware: {
    '/api/*': '~/api/*',
  },

  head: {
    titleTemplate: 'Covid-19 Tracker',
    htmlAttrs: {
      lang: 'vi',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://res.cloudinary.com/dumfvnj9f/image/upload/v1629902332/covid-19-tracker/covid-19-tracker_bdrjyv.png',
      },
      { hid: 'og:og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: process.env.APP_URL },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: process.env.FB_APP_ID,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [
    '~/plugins/vueTag.js',
    { src: '~/plugins/apexcharts.js', ssr: false },
  ],

  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],

  modules: ['@nuxtjs/axios', '@nuxt/http'],

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

  build: {},

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
};
