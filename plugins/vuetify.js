import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

export default new Vuetify({
  theme: {
    default: {
      primary: '#d84315',
      warning: '#FB8C00',
      warningSecondary: '#FFF9C4',
      success: '#00C853',
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
});

Vue.use(Vuetify);
