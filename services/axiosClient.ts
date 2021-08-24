import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { kompaApiUrl } from '~/constants/config';

export const axiosKompaClient = axios.create({
  baseURL: kompaApiUrl,
  headers: {
    accept: '*/*',
    'accept-language': 'vi,en-US;q=0.9,en;q=0.8',
    'content-type': 'application/json',
    'sec-ch-ua':
      '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    referrer: 'https://corona.kompa.ai/',
    referrerPolicy: 'strict-origin-when-cross-origin',
    mode: 'cors',
    credentials: 'omit',
  },
});

axiosKompaClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosKompaClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
