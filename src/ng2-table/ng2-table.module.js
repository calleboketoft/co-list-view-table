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
var platform_browser_1 = require('@angular/platform-browser');
var ng2_table_component_1 = require('./ng2-table.component');
var search_pipe_1 = require('./search.pipe');
var search_input_component_1 = require('./search-input.component');
var Ng2TableModule = (function () {
    function Ng2TableModule() {
    }
    Ng2TableModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [
                ng2_table_component_1.Ng2TableComponent,
                search_input_component_1.SearchInputComponent,
                search_pipe_1.SearchPipe
            ],
            exports: [ng2_table_component_1.Ng2TableComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2TableModule);
    return Ng2TableModule;
}());
exports.Ng2TableModule = Ng2TableModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nMi10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUN6QixDQUFDLENBRHVDO0FBQ3hDLGlDQUE4QiwyQkFDOUIsQ0FBQyxDQUR3RDtBQUN6RCxvQ0FBa0MsdUJBQ2xDLENBQUMsQ0FEd0Q7QUFDekQsNEJBQTJCLGVBQzNCLENBQUMsQ0FEeUM7QUFDMUMsdUNBQXFDLDBCQUVyQyxDQUFDLENBRjhEO0FBVy9EO0lBQUE7SUFBNkIsQ0FBQztJQVQ5QjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGdDQUFhLENBQUM7WUFDeEIsWUFBWSxFQUFFO2dCQUNaLHVDQUFpQjtnQkFDakIsNkNBQW9CO2dCQUNwQix3QkFBVTthQUNYO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUNBQWlCLENBQUM7U0FDN0IsQ0FBQzs7c0JBQUE7SUFDMkIscUJBQUM7QUFBRCxDQUFDLEFBQTlCLElBQThCO0FBQWpCLHNCQUFjLGlCQUFHLENBQUEifQ==