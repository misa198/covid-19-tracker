import {
  AppProvinceStatisticResponse,
  AppVietnamStatisticResponse,
  fetchAppProvinceByDay,
  fetchAppProvinceStatistic,
  fetchAppVietNamStatistic,
} from '@/services/app.service';
import Vue from 'vue';
import { ActionContext } from 'vuex/types';
import { ProvinceByDay } from '~/models/ProvinceByDay';
import { ProvinceStatistic } from '~/models/ProvinceStatistic';
import { VietnamStatistic } from '~/models/VietnamStatistic';
import { RootState } from '.';

export interface HomeState {
  provinceCases: {
    data: ProvinceStatistic[];
    loading: boolean;
    error: boolean;
  };
  provinceCasesByDay: {
    data: ProvinceByDay[];
    loading: boolean;
    error: boolean;
  };
  statistic: {
    data: VietnamStatistic[];
    lastUpdated: string;
    loading: boolean;
    error: boolean;
  };
}

export const state: () => HomeState = () => ({
  provinceCases: {
    data: [],
    loading: false,
    error: false,
  },
  provinceCasesByDay: {
    data: [],
    loading: false,
    error: false,
  },
  statistic: {
    data: [],
    lastUpdated: '',
    loading: false,
    error: false,
  },
});

export const mutations = {
  fetchVietnamStatisticDataPending(state: HomeState) {
    Vue.set(state.statistic, 'loading', true);
    Vue.set(state.statistic, 'error', false);
  },
  fetchVietnamStatisticDataFulfilled(
    state: HomeState,
    payload: AppVietnamStatisticResponse
  ) {
    Vue.set(state.statistic, 'loading', false);
    Vue.set(state.statistic, 'data', payload.data);
    Vue.set(state.statistic, 'lastUpdated', payload.meta.lastUpdated);
  },
  fetchVietnamStatisticDataRejected(state: HomeState) {
    Vue.set(state.statistic, 'loading', false);
    Vue.set(state.statistic, 'error', true);
  },

  fetchProvincesCasesByDayStatisticDataPending(state: HomeState) {
    Vue.set(state.provinceCasesByDay, 'loading', true);
    Vue.set(state.provinceCasesByDay, 'error', false);
  },
  fetchProvincesCasesByDayStatisticDataFulfilled(
    state: HomeState,
    payload: AppProvinceStatisticResponse
  ) {
    Vue.set(state.provinceCasesByDay, 'loading', false);
    Vue.set(state.provinceCasesByDay, 'data', payload.data);
  },
  fetchProvincesCasesByDayStatisticDataRejected(state: HomeState) {
    Vue.set(state.provinceCasesByDay, 'loading', false);
    Vue.set(state.provinceCasesByDay, 'error', true);
  },

  fetchProvincesStatisticDataPending(state: HomeState) {
    Vue.set(state.provinceCases, 'loading', true);
    Vue.set(state.provinceCases, 'error', false);
  },
  fetchProvincesStatisticDataFulfilled(
    state: HomeState,
    payload: AppProvinceStatisticResponse
  ) {
    Vue.set(state.provinceCases, 'loading', false);
    Vue.set(state.provinceCases, 'data', payload.data);
  },
  fetchProvincesStatisticDataRejected(state: HomeState) {
    Vue.set(state.provinceCases, 'loading', false);
    Vue.set(state.provinceCases, 'error', true);
  },
};

export const actions = {
  async fetchVietnamStatisticCasesData({
    commit,
  }: ActionContext<HomeState, RootState>) {
    commit('fetchVietnamStatisticDataPending');
    try {
      const res = await fetchAppVietNamStatistic();
      commit('fetchVietnamStatisticDataFulfilled', res);
    } catch (e) {
      commit('fetchVietnamStatisticDataRejected');
    }
  },

  async fetchProvinceCasesByDayStatisticCasesData({
    commit,
  }: ActionContext<HomeState, RootState>) {
    commit('fetchProvincesCasesByDayStatisticDataPending');
    try {
      const res = await fetchAppProvinceByDay();
      commit('fetchProvincesCasesByDayStatisticDataFulfilled', res);
    } catch (e) {
      commit('fetchProvincesCasesByDayStatisticDataRejected');
    }
  },

  async fetchProvinceStatisticCasesData({
    commit,
  }: ActionContext<HomeState, RootState>) {
    commit('fetchProvincesStatisticDataPending');
    try {
      const res = await fetchAppProvinceStatistic();
      commit('fetchProvincesStatisticDataFulfilled', res);
    } catch (e) {
      commit('fetchProvincesStatisticDataRejected');
    }
  },
};
