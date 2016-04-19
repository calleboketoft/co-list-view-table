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
            Object.keys(item).forEach(function (fieldKey) {
                // each column
                var field = searchParams.columnDefs.find(function (colDef) {
                    return colDef.field === fieldKey;
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
                    resultArr.push(item[fieldKey].toLowerCase().includes(field.searchTerm.toLowerCase()));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1CLGVBRW5CLENBQUMsQ0FGaUM7QUFLbEM7SUFBQTtJQXdCQSxDQUFDO0lBdkJDLDhCQUFTLEdBQVQsVUFBVyxLQUFLLEVBQUUsRUFBYztZQUFiLG9CQUFZO1FBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSTtZQUN2QixXQUFXO1lBQ1gsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFBLENBQUMsNEJBQTRCO1lBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUTtnQkFDaEMsY0FBYztnQkFDZCxJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07b0JBQzdDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQTtnQkFDbEMsQ0FBQyxDQUFDLENBQUE7Z0JBQ0YsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDbEIsbURBQW1EO29CQUNuRCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUN0QixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLG9CQUFvQjtvQkFDcEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQTtvQkFDYixDQUFDO29CQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDdkYsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFBO1lBQ0YsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUQsQ0FBQyxDQUFDLENBQUE7UUFDaEMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBMUJIO1FBQUMsV0FBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLFFBQVE7U0FDZixDQUFDOztrQkFBQTtJQXlCRixpQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF4Qlksa0JBQVUsYUF3QnRCLENBQUEifQ==