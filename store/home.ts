import Vue from 'vue';
import { ActionContext } from 'vuex/types';
import {
  AppVietnamSummaryResponse,
  fetchAppVietNamSummary,
} from '@/services/app.service';
import {
  fetchKompaVietNamCases,
  KompaVietnamCasesResponse,
} from '@/services/kompa.service';
import { RootState } from '.';

export interface VietnamSummaryCasesData {
  confirmed: number;
  lastConfirmed: number;
  deaths: number;
  lastDeaths: number;
  recovered: number;
  lastRecovered: number;
}

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
  trendingLineCases: {
    data: TrendingLineCasesData[];
    loading: boolean;
    error: boolean;
  };
  provinceCases: {
    data: ProvinceCasesData[];
  };
  summary: {
    data: VietnamSummaryCasesData;
    loading: boolean;
    error: boolean;
  };
}

export const state: () => HomeState = () => ({
  trendingLineCases: {
    data: [],
    loading: false,
    error: false,
  },
  provinceCases: {
    data: [],
  },
  summary: {
    data: {
      confirmed: 0,
      lastConfirmed: 0,
      deaths: 0,
      lastDeaths: 0,
      recovered: 0,
      lastRecovered: 0,
    },
    loading: false,
    error: false,
  },
});

export const mutations = {
  fetchVietnamSummaryDataPending(state: HomeState) {
    Vue.set(state.summary, 'loading', true);
    Vue.set(state.summary, 'error', false);
  },
  fetchVietnamSummaryDataFulfilled(
    state: HomeState,
    payload: AppVietnamSummaryResponse
  ) {
    Vue.set(state.summary, 'loading', false);
    Vue.set(state.summary, 'data', payload.data);
  },
  fetchVietnamSummaryDataRejected(state: HomeState) {
    Vue.set(state.summary, 'loading', false);
    Vue.set(state.summary, 'error', true);
  },

  fetchVietnamCasesDataPending(state: HomeState) {
    Vue.set(state.trendingLineCases, 'loading', true);
    Vue.set(state.trendingLineCases, 'error', false);
  },
  fetchVietnamCasesDataFulfilled(
    state: HomeState,
    payload: KompaVietnamCasesResponse
  ) {
    const trendingLineCasesRes: TrendingLineCasesData[] = [];
    payload.data.trendlineVnCases.forEach((item) => {
      trendingLineCasesRes.push({
        date: `${item.date.slice(6, 8)}-${item.date.slice(
          4,
          6
        )}-${item.date.slice(0, 4)}`,
        confirmed: parseInt(item.confirmed, 10),
        recovered: parseInt(item.recovered, 10),
        deaths: parseInt(item.deaths, 10),
      });
    });
    const provinceCasesRes: ProvinceCasesData[] = [];
    payload.data.provinces.forEach((province) => {
      provinceCasesRes.push({
        confirmed: parseInt(province.Confirmed, 10),
        deaths: parseInt(province.Deaths, 10),
        recovered: parseInt(province.Recovered, 10),
        provinceId: province.Province_Id,
        provinceName: province.Province_Name,
      });
    });
    Vue.set(state.trendingLineCases, 'data', trendingLineCasesRes);
    Vue.set(state.provinceCases, 'data', provinceCasesRes);
    Vue.set(state.trendingLineCases, 'loading', false);
  },
  fetchVietnamCasesDataRejected(state: HomeState) {
    Vue.set(state.trendingLineCases, 'loading', false);
    Vue.set(state.trendingLineCases, 'error', true);
  },
};

export const actions = {
  async fetchVietnamSummaryCasesData({
    commit,
  }: ActionContext<HomeState, RootState>) {
    commit('fetchVietnamSummaryDataPending');
    try {
      const res = await fetchAppVietNamSummary();
      commit('fetchVietnamSummaryDataFulfilled', res);
    } catch (e) {
      commit('fetchVietnamSummaryDataRejected');
    }
  },

  async fetchVietnamTrendingLineCasesData({
    commit,
  }: ActionContext<HomeState, RootState>) {
    commit('fetchVietnamCasesDataPending');
    try {
      const res = await fetchKompaVietNamCases();
      commit('fetchVietnamCasesDataFulfilled', res);
    } catch (e) {
      commit('fetchVietnamCasesDataRejected');
    }
  },
};
