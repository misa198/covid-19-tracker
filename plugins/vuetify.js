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
      },
      dark: {
        background: '#111827',
        secondaryBackground: '#374151',
        headerBackground: '#1f2937',
      },
    },
  },
});
