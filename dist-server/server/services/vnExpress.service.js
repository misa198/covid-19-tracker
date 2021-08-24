"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../../constants/config");
const formatApiData_1 = require("../utils/formatApiData");
const getVietnamSummaryVnExpress = () => __awaiter(void 0, void 0, void 0, function* () {
    const body = yield axios_1.default.get(config_1.covidVnExpressApiUrl);
    const parsedData = formatApiData_1.formatVnExpressData(body.data);
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
});
exports.default = { getVietnamSummaryVnExpress };
