import { axiosKompaClient } from './axiosClient';

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
