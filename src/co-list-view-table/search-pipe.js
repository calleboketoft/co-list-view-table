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
var core_1 = require('angular2/core');
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, _a) {
        var searchParams = _a[0];
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
                    resultArr.push(item[columnDef.field].toLowerCase().includes(field.searchTerm.toLowerCase()));
                }
            });
            return resultArr.every(function (i) { return i; });
        });
    };
    SearchPipe = __decorate([
        core_1.Pipe({
            name: 'search'
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPipe);
    return SearchPipe;
}());
exports.SearchPipe = SearchPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1CLGVBRW5CLENBQUMsQ0FGaUM7QUFLbEM7SUFBQTtJQXdCQSxDQUFDO0lBdkJDLDhCQUFTLEdBQVQsVUFBVyxLQUFLLEVBQUUsRUFBYztZQUFiLG9CQUFZO1FBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSTtZQUN2QixXQUFXO1lBQ1gsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFBLENBQUMsNEJBQTRCO1lBQy9DLFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsU0FBUztnQkFDdkMsY0FBYztnQkFDZCxJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07b0JBQzdDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxLQUFLLENBQUE7Z0JBQ3pDLENBQUMsQ0FBQyxDQUFBO2dCQUNGLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLG1EQUFtRDtvQkFDbkQsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDdEIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixvQkFBb0I7b0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUE7b0JBQ2IsQ0FBQztvQkFDRCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUM5RixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUE7WUFDRixNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsRUFBRCxDQUFDLENBQUMsQ0FBQTtRQUNoQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUExQkg7UUFBQyxXQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsUUFBUTtTQUNmLENBQUM7O2tCQUFBO0lBeUJGLGlCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCWSxrQkFBVSxhQXdCdEIsQ0FBQSJ9