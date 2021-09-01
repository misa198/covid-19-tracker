import { ProvinceByDay } from '~/models/ProvinceByDay';
import { ProvinceStatistic } from '~/models/ProvinceStatistic';
import { VietnamStatistic } from '~/models/VietnamStatistic';
import { axiosAppClient } from './axiosClient';

export interface AppVietnamStatisticResponse {
  data: VietnamStatistic;
  meta: {
    lastUpdated: string;
  };
}

export const fetchAppVietNamStatistic =
  async (): Promise<AppVietnamStatisticResponse> => {
    return await axiosAppClient.get('/vietnam');
  };

export interface AppProvinceStatisticResponse {
  data: ProvinceStatistic;
}

export const fetchAppProvinceStatistic =
  async (): Promise<AppProvinceStatisticResponse> => {
    return await axiosAppClient.get('/vietnam/provinces');
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

export interface AppProvinceCaseByDayResponse {
  data: ProvinceByDay[];
}

export const fetchAppProvinceByDay =
  async (): Promise<AppProvinceCaseByDayResponse> => {
    return await axiosAppClient.get('/vietnam/provinces/day');
  };
