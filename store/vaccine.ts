import Vue from 'vue';
import { ActionContext } from 'vuex/types';
import { RootState } from '.';
import {
  AppVietnamVaccineStatistic,
  AppVietnamVaccineStatisticResponse,
  fetchAppVietNamVaccineStatistic,
} from '@/services/app.service';

interface VaccineState {
  statistic: {
    data: AppVietnamVaccineStatistic;
    loading: boolean;
    error: boolean;
  };
}

export const state: () => VaccineState = () => ({
  statistic: {
    data: {
      dayInjection: [],
      summaryInjection: [],
      firstTotal: 0,
      firstRatio: 0,
      secondTotal: 0,
      secondRatio: 0,
    },
    loading: false,
    error: false,
  },
});

export const mutations = {
  fetchVaccineDataPending(state: VaccineState) {
    Vue.set(state.statistic, 'loading', true);
    Vue.set(state.statistic, 'error', false);
  },
  fetchVaccineDataFulfilled(
    state: VaccineState,
    payload: AppVietnamVaccineStatisticResponse
  ) {
    Vue.set(state.statistic, 'loading', false);
    Vue.set(state.statistic, 'data', payload.data);
  },
  fetchVaccineDataRejected(state: VaccineState) {
    Vue.set(state.statistic, 'loading', false);
    Vue.set(state.statistic, 'error', true);
  },
};

export const actions = {
  async fetchAppVietNamVaccineStatistic({
    commit,
  }: ActionContext<VaccineState, RootState>) {
    commit('fetchVaccineDataPending');
    try {
      const res = await fetchAppVietNamVaccineStatistic();
      commit('fetchVaccineDataFulfilled', res);
    } catch (e) {
      commit('fetchVaccineDataRejected');
    }
  },
};
