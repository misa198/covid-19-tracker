import { axiosKompaClient } from './axiosClient';

export interface KompaVietnamCasesResponse {
  data: {
    provinces: {
      Confirmed: string;
      Deaths: string;
      Recovered: string;
      Province_Id: string;
      Province_Name: string;
    }[];
    trendlineVnCases: {
      date: string;
      confirmed: string;
      recovered: string;
      deaths: string;
    }[];
  };
}

export const fetchKompaVietNamCases =
  async (): Promise<KompaVietnamCasesResponse> => {
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
        trendlineVnCases {
          date
          confirmed
          recovered
          deaths
        }
      }
      `,
    };
    return await axiosKompaClient.post('/', JSON.stringify(query));
  };

export interface KompaWorldwideCasesResponse {
  data: {
    totalConfirmed: number;
    totalConfirmedLast: number;
    totalRecovered: number;
    totalRecoveredLast: number;
    totalDeaths: number;
    totalDeathsLast: number;
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
        totalDeaths
        totalDeathsLast
      }
    `,
  };
  return await axiosKompaClient.post('/', JSON.stringify(query));
};

export interface KompaNewsResponse {
  data: {
    topTrueNews: {
      content: string;
      id: string;
      picture: string;
      publishedDate: string;
      siteName: string;
      title: string;
      url: string;
    };
  };
}

export const fetchKompaNews = async () => {
  const query = {
    operationName: 'topTrueNews',
    variables: {},
    query: `
      query topTrueNews {
        topTrueNews {
          id
          type
          title
          content
          url
          siteName
          publishedDate
          author
          picture
        }
      }
      `,
  };
  return await axiosKompaClient.post('/', JSON.stringify(query));
};
