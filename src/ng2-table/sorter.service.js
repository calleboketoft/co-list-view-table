"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://github.com/thelgevold/angular-2-samples
function tableDataSort(key, data, direction) {
    var dataCopy = data.map(function (i) { return Object.assign({}, i); });
    dataCopy.sort(function (a, b) {
        var aTmp = (a[key] + '').toLowerCase();
        var bTmp = (b[key] + '').toLowerCase();
        if (aTmp === bTmp || direction === 0) {
            return 0;
        }
        else if (aTmp > bTmp) {
            return direction;
        }
        else {
            return -direction;
        }
    });
    return dataCopy;
}
exports.tableDataSort = tableDataSort;
//# sourceMappingURL=sorter.service.js.map