import Vue from 'vue';

export interface CommonState {
  darkMode: boolean;
}

export const state: () => CommonState = () => ({
  darkMode: false,
});

export const mutations = {
  loadSettings(state: CommonState) {
    const loadedSettings = localStorage.getItem('settings');
    if (loadedSettings) {
      Vue.set(state, 'darkMode', Boolean(JSON.parse(loadedSettings).darkMode));
    } else {
      localStorage.setItem('settings', JSON.stringify(state));
    }
  },
  changeTheme(state: CommonState) {
    Vue.set(state, 'darkMode', !state.darkMode);
    localStorage.setItem('settings', JSON.stringify(state));
  },
};
