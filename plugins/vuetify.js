import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
// import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  customVariables: ['~/assets/variables.scss'],
  theme: {
    themes: {
      light: {
        background: '#f9fafb',
        secondaryBackground: '#f3f4f6',
        headerBackground: '#fff',
        warning: '#FB8C00',
        warningSecondary: '#FFF9C4',
        success: '#00C853',
        successSecondary: '#B9F6CA',
        danger: '#D84315',
        dangerSecondary: '#FFCCBC',
        info: '#455A64',
        infoSecondary: '#CFD8DC',
      },
      dark: {
        background: '#111827',
        secondaryBackground: '#374151',
        headerBackground: '#1f2937',
        success: '#00C853',
        successSecondary: '#B9F6CA',
        danger: '#D84315',
        dangerSecondary: '#FFCCBC',
        info: '#455A64',
        infoSecondary: '#CFD8DC',
      },
    },
  },
});
