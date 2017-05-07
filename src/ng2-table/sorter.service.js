"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sort(a, b) {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
}
// https://github.com/thelgevold/angular-2-samples
function tableDataSort(key, data, direction) {
    var dataCopy = data.map(function (i) { return Object.assign({}, i); });
    dataCopy.sort(function (a, b) {
        var sortResult;
        var aTmp = a[key];
        var bTmp = b[key];
        if (typeof aTmp === 'number' && typeof bTmp === 'number') {
            sortResult = sort(aTmp, bTmp);
        }
        else {
            sortResult = sort((aTmp + '').toLowerCase(), (bTmp + '').toLowerCase());
        }
        return sortResult * direction;
    });
    return dataCopy;
}
exports.tableDataSort = tableDataSort;
//# sourceMappingURL=sorter.service.js.map