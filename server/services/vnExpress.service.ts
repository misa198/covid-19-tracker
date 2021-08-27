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
  const [bodyRes, siteDataRes] = await Promise.all([
    axios.get(covidVnExpressApiUrl),
    axios.get(covidVnExpressSiteUrl),
  ]);
  const body = bodyRes.data;
  const parsedData = formatVnExpressData(body);
  const siteData = siteDataRes.data;
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
