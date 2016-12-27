"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, filterParams) {
        return value.filter(function (item) {
            // each row
            var resultArr = []; // filter results per column
            filterParams.columnDefs.forEach(function (columnDef) {
                // each column
                var field = filterParams.columnDefs.find(function (colDef) {
                    return colDef.field === columnDef.field;
                });
                if (!field.filterEnabled) {
                    // the field doesn't support filter, always include
                    resultArr.push(true);
                }
                else {
                    // filterable field,
                    if (!field.filterValue) {
                        return true;
                    }
                    var fieldValue = (item[columnDef.field] + '').toLowerCase();
                    var filterValue = (field.filterValue + '').toLowerCase();
                    resultArr.push(fieldValue.includes(filterValue));
                }
            });
            return resultArr.every(function (i) { return i; });
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    core_1.Pipe({
        name: 'filter'
    }),
    __metadata("design:paramtypes", [])
], FilterPipe);
exports.FilterPipe = FilterPipe;
//# sourceMappingURL=filter.pipe.js.map