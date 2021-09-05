import {
  AppVaccineProvincesResponse,
  AppVietnamVaccineStatistic,
  AppVietnamVaccineStatisticResponse,
  fetchAppVaccineProvinces,
  fetchAppVietNamVaccineStatistic,
} from '@/services/app.service';
import Vue from 'vue';
import { ActionContext } from 'vuex/types';
import { VaccineProvince } from '~/models/VaccineProvince';
import { RootState } from '.';

interface VaccineState {
  statistic: {
    data: AppVietnamVaccineStatistic;
    loading: boolean;
    error: boolean;
  };
  provinces: {
    data: VaccineProvince[];
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
  provinces: {
    data: [],
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

  fetchVaccineProvincesDataPending(state: VaccineState) {
    Vue.set(state.provinces, 'loading', true);
    Vue.set(state.provinces, 'error', false);
  },
  fetchVaccineProvincesDataFulfilled(
    state: VaccineState,
    payload: AppVaccineProvincesResponse
  ) {
    Vue.set(state.provinces, 'loading', false);
    Vue.set(state.provinces, 'data', payload.data);
  },
  fetchVaccineProvincesDataRejected(state: VaccineState) {
    Vue.set(state.provinces, 'loading', false);
    Vue.set(state.provinces, 'error', true);
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

  async fetchProvincesVaccineStatistic({
    commit,
  }: ActionContext<VaccineState, RootState>) {
    commit('fetchVaccineProvincesDataPending');
    try {
      const res = await fetchAppVaccineProvinces();
      commit('fetchVaccineProvincesDataFulfilled', res);
    } catch (e) {
      commit('fetchVaccineProvincesDataRejected');
    }
  },
};
