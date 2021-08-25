import Vue from 'vue';
import { ActionContext } from 'vuex/types';
import { RootState } from '.';
import { fetchKompaNews, KompaNewsResponse } from '@/services/kompa.service';

interface NewsStateData {
  content: string;
  id: string;
  picture: string;
  publishedDate: string;
  siteName: string;
  title: string;
  url: string;
}

export interface NewsState {
  data: NewsStateData[];
  loading: boolean;
  error: boolean;
}

export const state: () => NewsState = () => ({
  data: [],
  loading: false,
  error: false,
});

export const mutations = {
  fetchKompaNewsPending(state: NewsState) {
    Vue.set(state, 'loading', true);
    Vue.set(state, 'error', false);
  },
  fetchKompaNewsFulfilled(state: NewsState, payload: KompaNewsResponse) {
    Vue.set(state, 'loading', false);
    Vue.set(state, 'data', payload.data.topTrueNews);
  },
  fetchKompaNewsRejected(state: NewsState) {
    Vue.set(state, 'loading', false);
    Vue.set(state, 'error', true);
  },
};

export const actions = {
  async fetchKompaNews({ commit }: ActionContext<NewsState, RootState>) {
    commit('fetchKompaNewsPending');
    try {
      const res = await fetchKompaNews();
      commit('fetchKompaNewsFulfilled', res);
    } catch (e) {
      commit('fetchKompaNewsRejected');
    }
  },
};
