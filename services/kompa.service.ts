import { axiosKompaClient } from './axiosClient';

export interface KompaProvinceCasesResponse {
  data: {
    provinces: {
      Confirmed: string;
      Deaths: string;
      Recovered: string;
      Province_Id: string;
      Province_Name: string;
    }[];
    totalVietNam: {
      confirmed: string;
      deaths: string;
      recovered: string;
    };
  };
}

export const fetchKompaVietNamCases =
  async (): Promise<KompaProvinceCasesResponse> => {
    const query = {
      operationName: 'provinces',
      variables: {},
      query: `
      query provinces {
        provinces {
          Province_Name
          Province_Id
          Lat
          Long
          Confirmed
          Deaths
          Recovered
          Last_Update
        }
        totalVietNam {
          confirmed
          deaths
          recovered
        }
      }
      `,
    };
    return await axiosKompaClient.post('/', JSON.stringify(query));
  };

export interface KompaWorldwideCasesResponse {
  data: {
    totalConfirmed: {
      totalConfirmed: string;
      totalConfirmedLast: string;
      totalRecovered: string;
      totalRecoveredLast: string;
      totalDeath: string;
      totalDeathLast: string;
    };
  };
}

export const fetchKompaWorldwideCases = async () => {
  const query = {
    operationName: 'totalConfirmed',
    variables: {},
    query: `
      query totalConfirmed {
        totalConfirmed
        totalConfirmedLast
        totalRecovered
        totalRecoveredLast
        totalDeath
        totalDeathLast
      }
    `,
  };
  return await axiosKompaClient.post('/', JSON.stringify(query));
};
