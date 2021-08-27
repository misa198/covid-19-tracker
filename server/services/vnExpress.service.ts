import axios from 'axios';
import {
  covidProvinceVnExpressApiUrl,
  covidVnExpressApiUrl,
  covidVnExpressSiteUrl,
} from '../../constants/config';
import {
  formatVnExpressData,
  formatVnExpressProvinceData,
} from '../utils/formatApiData';
import { expressUpdateDateTime } from '../../constants/regex';

const getVietnamStatisticVnExpress = async () => {
  const body = await axios.get(covidVnExpressApiUrl);
  const parsedData = formatVnExpressData(body.data as string);
  const siteData = (await axios.get(covidVnExpressSiteUrl)).data;
  const updatedTime = siteData
    .match(expressUpdateDateTime)[0]
    .split('Cập nhật ')[1];
  return [parsedData, updatedTime];
};

const getProvinceStatisticVnExpress = async () => {
  const body = await axios.get(covidProvinceVnExpressApiUrl);
  const parsedData = formatVnExpressProvinceData(body.data as string);
  return parsedData;
};

export default { getVietnamStatisticVnExpress, getProvinceStatisticVnExpress };
