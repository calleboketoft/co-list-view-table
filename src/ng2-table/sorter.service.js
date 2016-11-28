"use strict";
// https://github.com/thelgevold/angular-2-samples
var Sorter = (function () {
    function Sorter() {
        this.direction = 1;
    }
    Sorter.prototype.sort = function (key, data, dontToggle) {
        var _this = this;
        var dataCopy = data.map(function (i) { return Object.assign({}, i); });
        if (this.key === key && !dontToggle) {
            this.direction = -this.direction;
        }
        else {
            this.direction = 1;
        }
        this.key = key;
        dataCopy.sort(function (a, b) {
            var aTmp = (a[key] + '').toLowerCase();
            var bTmp = (b[key] + '').toLowerCase();
            if (aTmp === bTmp) {
                return 0;
            }
            else if (aTmp > bTmp) {
                return _this.direction;
            }
            else {
                return -_this.direction;
            }
        });
        return dataCopy;
    };
    return Sorter;
}());
exports.Sorter = Sorter;
//# sourceMappingURL=sorter.service.js.map