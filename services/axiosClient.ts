import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { appApiUrl, kompaApiUrl } from '@/constants/config';

// Request to Kompa api
export const axiosKompaClient = axios.create({
  baseURL: kompaApiUrl,
  headers: {
    accept: '*/*',
    'accept-language': 'vi,en-US;q=0.9,en;q=0.8',
    'content-type': 'application/json',
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

// Request to app server api
export const axiosAppClient = axios.create({
  baseURL: appApiUrl,
});

axiosAppClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosAppClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
