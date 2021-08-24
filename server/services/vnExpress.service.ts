import axios from 'axios';
import { covidVnExpressApiUrl } from '../../constants/config';
import { formatVnExpressData } from '../utils/formatApiData';

const getVietnamSummaryVnExpress = async () => {
  const body = await axios.get(covidVnExpressApiUrl);
  const parsedData = formatVnExpressData(body.data as string);
  const dataArray = parsedData.filter((item) => item.confirmed);
  const today = dataArray.reverse()[0];
  const yesterday = dataArray.reverse()[1];
  return {
    confirmed: today.confirmed,
    lastConfirmed: yesterday.confirmed,
    deaths: today.deaths,
    lastDeaths: yesterday.deaths,
    recovered: today.recovered,
    lastRecovered: yesterday.recovered,
  };
};

export default { getVietnamSummaryVnExpress };
