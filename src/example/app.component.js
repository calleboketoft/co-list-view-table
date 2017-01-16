"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var example_table_data_1 = require("./example-table.data");
var AppComponent = (function () {
    function AppComponent() {
        this.exampleData = example_table_data_1.exampleData;
        this.showMinimalTable = false;
        this.minimalTableConfig = {
            columnDefs: [
                { field: 'userId' },
                { field: 'pet' },
                { field: 'userName' },
                { field: 'nickName' }
            ]
        };
    }
    AppComponent.prototype.showMinimalTableFn = function () {
        this.showMinimalTable = true;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: "\n    <example-table-component>\n    </example-table-component>\n\n    <br><br>\n    <button class=\"btn btn-secondary btn-sm\" (click)=\"showMinimalTableFn()\">\n      Show minimal config example\n    </button>\n\n    <ng2-table\n      *ngIf=\"showMinimalTable\"\n      [tableData]=\"exampleData\"\n      [tableConfig]=\"minimalTableConfig\">\n    </ng2-table>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map