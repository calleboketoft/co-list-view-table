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
var example_data_1 = require("./example.data");
var AppComponent = (function () {
    function AppComponent() {
        this.showTable = true;
        this.myData = example_data_1.exampleData;
        this.myConfig = {
            // the following three properties create a "clickable row" look
            // and highlights the most recently clicked row in the table
            tableNgClass: 'table table-striped table-hover',
            rowNgStyle: { 'cursor': 'pointer' },
            rowNgClassPredicate: function (rowData, rowIndex, activeRow) {
                return rowIndex === activeRow ? ['table-active'] : '';
            },
            columnDefs: [
                {
                    field: 'userId',
                    headerText: 'ID',
                    headerNgClass: 'text-muted',
                    width: '100px'
                },
                {
                    field: 'pet',
                    headerText: 'Pet',
                    cellItem: {
                        // elementType can be either 'div' or 'button'
                        elementType: 'div',
                        cellItemNgClassPredicate: function (rowData) {
                            return rowData.pet === 'beer' ? 'tag tag-warning' : 'tag tag-primary';
                        }
                    }
                },
                {
                    field: 'userName',
                    headerText: 'Name',
                    search: true,
                    sortDefaultReverse: true,
                    cellNgStyle: { 'font-weight': 'bold' }
                },
                {
                    field: 'nickName',
                    headerText: 'Nickname',
                    search: true,
                    cellItem: {
                        elementType: 'div',
                        cellItemNgStyle: { 'width': '120px' },
                        cellItemNgClass: 'btn btn-sm btn-info'
                    }
                },
                {
                    // field isn't required when having a cellItem
                    headerText: 'Delete',
                    headerNgStyle: { 'text-align': 'center', 'color': 'red' },
                    cellNgStyle: { 'text-align': 'center' },
                    cellItem: {
                        elementType: 'button',
                        staticContent: 'Danger',
                        cellItemNgClass: 'btn btn-sm btn-danger'
                    }
                }
            ]
        };
    }
    AppComponent.prototype.rowClicked = function (item) {
        console.log('clicked item:', item);
    };
    AppComponent.prototype.cellItemClicked = function (options) {
        console.log('Cell item clicked:', options);
    };
    AppComponent.prototype.toggleTable = function () {
        this.showTable = !this.showTable;
    };
    AppComponent.prototype.reorganizeContent = function () {
        var order = this.getRandomInt(0, 1);
        var dataCopy = example_data_1.exampleData.map(function (item) {
            return Object.assign({}, item);
        });
        dataCopy.sort(function (item1, item2) {
            if (item1.userId === item2.userId) {
                return 0;
            }
            else if (item1.userId > item2.userId) {
                return order === 1 ? 1 : -1;
            }
            else {
                return order === 1 ? -1 : 1;
            }
        });
        dataCopy.splice(this.getRandomInt(1, 7), 1);
        this.myData = dataCopy;
    };
    AppComponent.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: "\n    <button class=\"btn btn-secondary btn-sm\"\n      (click)=\"toggleTable()\">\n      Toggle table\n    </button>\n    <button class=\"btn btn-secondary btn-sm\"\n      (click)=\"reorganizeContent()\">\n      Reorganize content and remove random item\n    </button>\n\n    <br><br>\n\n    <!-- Set the height of the table content on a wrapping div -->\n    <div style=\"height: 320px;\" *ngIf=\"showTable\">\n      <ng2-table\n        [tableData]=\"myData\"\n        [tableConfig]=\"myConfig\"\n        (rowClicked)=\"rowClicked($event)\"\n        (cellItemClicked)=\"cellItemClicked($event)\">\n      </ng2-table>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map