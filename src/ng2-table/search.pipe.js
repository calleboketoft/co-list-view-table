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
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, searchParams) {
        return value.filter(function (item) {
            // each row
            var resultArr = []; // filter results per column
            searchParams.columnDefs.forEach(function (columnDef) {
                // each column
                var field = searchParams.columnDefs.find(function (colDef) {
                    return colDef.field === columnDef.field;
                });
                if (!field.search) {
                    // the field doesn't support search, always include
                    resultArr.push(true);
                }
                else {
                    // searchable field,
                    if (!field.searchTerm) {
                        return true;
                    }
                    var fieldValue = (item[columnDef.field] + '').toLowerCase();
                    var searchTerm = (field.searchTerm + '').toLowerCase();
                    resultArr.push(fieldValue.includes(searchTerm));
                }
            });
            return resultArr.every(function (i) { return i; });
        });
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    core_1.Pipe({
        name: 'search'
    }),
    __metadata("design:paramtypes", [])
], SearchPipe);
exports.SearchPipe = SearchPipe;
//# sourceMappingURL=search.pipe.js.map