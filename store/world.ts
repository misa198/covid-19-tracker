import Vue from 'vue';
import { ActionContext } from 'vuex/types';
import { RootState } from '.';
import {
  fetchKompaWorldwideCases,
  KompaWorldwideCasesResponse,
} from '~/services/kompa.service';

interface WorldStateData {
  totalDeaths: number;
  totalDeathsLast: number;
  totalRecovered: number;
  totalRecoveredLast: number;
  totalConfirmed: number;
  totalConfirmedLast: number;
}

export interface WorldState {
  data: WorldStateData;
  loading: boolean;
  error: boolean;
}

export const state: () => WorldState = () => ({
  data: {
    totalDeaths: 0,
    totalDeathsLast: 0,
    totalRecovered: 0,
    totalRecoveredLast: 0,
    totalConfirmed: 0,
    totalConfirmedLast: 0,
  },
  loading: false,
  error: false,
});

export const mutations = {
  fetchDataPending(state: WorldState) {
    Vue.set(state, 'loading', true);
    Vue.set(state, 'error', false);
  },
  fetchDataFulfilled(state: WorldState, payload: KompaWorldwideCasesResponse) {
    const result: WorldStateData = {
      totalConfirmed: payload.data.totalConfirmed,
      totalConfirmedLast: payload.data.totalConfirmedLast,
      totalDeaths: payload.data.totalDeaths,
      totalDeathsLast: payload.data.totalDeathsLast,
      totalRecovered: payload.data.totalRecovered,
      totalRecoveredLast: payload.data.totalRecoveredLast,
    };

    Vue.set(state, 'loading', false);
    Vue.set(state, 'data', result);
  },
  fetchDataRejected(state: WorldState) {
    Vue.set(state, 'loading', false);
    Vue.set(state, 'error', true);
  },
};

export const actions = {
  async fetchWorldwideCasesData({
    commit,
  }: ActionContext<WorldState, RootState>) {
    commit('fetchDataPending');
    try {
      const res = await fetchKompaWorldwideCases();
      commit('fetchDataFulfilled', res);
    } catch (e) {
      commit('fetchDataRejected');
    }
  },
};
