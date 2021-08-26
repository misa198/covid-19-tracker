import { axiosAppClient } from './axiosClient';

export interface AppVietnamSummaryResponse {
  data: {
    confirmed: number;
    lastConfirm: number;
    deaths: number;
    lastDeaths: number;
    recovered: number;
    lastRecovered: number;
  };
}

export const fetchAppVietNamSummary =
  async (): Promise<AppVietnamSummaryResponse> => {
    return await axiosAppClient.get('/vietnam');
  };

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

export interface AppVietnamVaccineStatisticResponse {
  data: AppVietnamVaccineStatistic;
}

export const fetchAppVietNamVaccineStatistic =
  async (): Promise<AppVietnamVaccineStatisticResponse> => {
    return await axiosAppClient.get('/vaccine');
  };
