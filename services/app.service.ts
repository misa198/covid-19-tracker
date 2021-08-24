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
