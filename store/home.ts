import Vue from 'vue';

export type Selected = 'vn' | 'hn' | 'hcm';

export interface HomeState {
  selected: Selected;
}

export const state: () => HomeState = () => ({
  selected: 'vn',
});

export const mutations = {
  changeSelected(state: HomeState, selected: 'vn' | 'hn' | 'hcm') {
    Vue.set(state, 'selected', selected);
  },
};
