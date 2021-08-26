import Vue from 'vue';

export interface AppVietnamVaccineStatistic {
  dayInjection: {
    date: string;
    first: number;
    second: number;
    average: number;
  }[];
  summaryInjection: {
    date: string;
    first: number;
    second: number;
  }[];
  firstTotal: number;
  firstRatio: number;
  secondTotal: number;
  secondRatio: number;
}

interface VaccineState {
  statistic: {
    data: AppVietnamVaccineStatistic;
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
    error: false,
  },
});

export const mutations = {
  fetchVaccineDataFulfilled(
    state: VaccineState,
    payload: AppVietnamVaccineStatistic
  ) {
    Vue.set(state.statistic, 'data', payload);
  },
  fetchVaccineDataRejected(state: VaccineState) {
    Vue.set(state.statistic, 'error', true);
  },
};
