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
var core_1 = require('@angular/core');
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
                    resultArr.push(fieldValue['includes'](searchTerm));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1CLGVBRW5CLENBQUMsQ0FGaUM7QUFLbEM7SUFBQTtJQTJCQSxDQUFDO0lBMUJDLDhCQUFTLEdBQVQsVUFBVyxLQUFLLEVBQUUsWUFBWTtRQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUk7WUFDdkIsV0FBVztZQUNYLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQSxDQUFDLDRCQUE0QjtZQUMvQyxZQUFZLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVM7Z0JBQ3ZDLGNBQWM7Z0JBQ2QsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO29CQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsS0FBSyxDQUFBO2dCQUN6QyxDQUFDLENBQUMsQ0FBQTtnQkFDRixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNsQixtREFBbUQ7b0JBQ25ELFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ3RCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sb0JBQW9CO29CQUNwQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUN0QixNQUFNLENBQUMsSUFBSSxDQUFBO29CQUNiLENBQUM7b0JBQ0QsSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFBO29CQUMzRCxJQUFJLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUE7b0JBRXRELFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7Z0JBQ3BELENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQTtZQUNGLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxFQUFELENBQUMsQ0FBQyxDQUFBO1FBQ2hDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQTdCSDtRQUFDLFdBQUksQ0FBQztZQUNKLElBQUksRUFBRSxRQUFRO1NBQ2YsQ0FBQzs7a0JBQUE7SUE0QkYsaUJBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBM0JZLGtCQUFVLGFBMkJ0QixDQUFBIn0=