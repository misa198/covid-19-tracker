import {
  AppProvinceStatisticResponse,
  AppVietnamStatisticResponse,
  fetchAppProvinceStatistic,
  fetchAppVietNamStatistic,
} from '@/services/app.service';
import Vue from 'vue';
import { ActionContext } from 'vuex/types';
import { ProvinceStatistic } from '~/models/ProvinceStatistic';
import { VietnamStatistic } from '~/models/VietnamStatistic';
import { RootState } from '.';

export interface TrendingLineCasesData {
  date: string;
  confirmed: number;
  recovered: number;
  deaths: number;
}

export interface ProvinceCasesData {
  confirmed: number;
  deaths: number;
  recovered: number;
  provinceId: string;
  provinceName: string;
}

export interface HomeState {
  provinceCases: {
    data: ProvinceStatistic[];
    loading: boolean;
    error: boolean;
  };
  statistic: {
    data: VietnamStatistic[];
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
  statistic: {
    data: [],
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
  },
  fetchVietnamStatisticDataRejected(state: HomeState) {
    Vue.set(state.statistic, 'loading', false);
    Vue.set(state.statistic, 'error', true);
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
