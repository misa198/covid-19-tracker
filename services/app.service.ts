import { VietnamStatistic } from '~/models/VietnamStatistic';
import { axiosAppClient } from './axiosClient';

export interface AppVietnamStatisticResponse {
  data: VietnamStatistic;
}

export const fetchAppVietNamStatistic =
  async (): Promise<AppVietnamStatisticResponse> => {
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
