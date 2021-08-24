"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatVnExpressData = exports.formatDate = void 0;
const formatDate = (data) => {
    const splitData = data.split('/');
    return `${parseInt(splitData[0], 10) < 10 ? '0' + splitData[0] : splitData[0]}-${parseInt(splitData[1], 10) < 10 ? '0' + splitData[1] : splitData[1]}-2021`;
};
exports.formatDate = formatDate;
const formatVnExpressData = (data) => {
    const lines = data.split('\n');
    return lines.slice(2, lines.length - 1).map((l) => ({
        date: exports.formatDate(l.split('","')[0].slice(1)),
        recovered: parseInt(l.split('","')[24], 10),
        deaths: parseInt(l.split('","')[23], 10),
        confirmed: parseInt(l.split('","')[22], 10),
        curing: parseInt(l.split('","')[21], 10),
    }));
};
exports.formatVnExpressData = formatVnExpressData;
