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
var example_data_1 = require('./example.data');
var AppComponent = (function () {
    function AppComponent() {
        this.myData = example_data_1.exampleData;
        this.myConfig = {
            tableNgClass: 'table table-striped table-hover',
            rowNgStylePredicate: function (rowData) {
                return rowData.userId === '5' ? { 'cursor': 'crosshair' } : { 'cursor': 'pointer' };
            },
            rowNgClassPredicate: function (rowData, rowIndex, activeRow) {
                return rowIndex === activeRow ? ['table-active'] : '';
            },
            columnDefs: [
                {
                    field: 'userId',
                    headerText: 'ID',
                    width: '100px'
                },
                {
                    field: 'pet',
                    headerText: 'Pet',
                    cellItem: {
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
                    cellNgStyle: { 'color': 'green' }
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
                    headerText: 'Delete',
                    headerNgStyle: { 'text-align': 'center', 'color': 'orange' },
                    cellItem: {
                        elementType: 'button',
                        staticContent: 'X',
                        cellItemNgClass: 'btn btn-sm btn-danger'
                    },
                    cellNgStyle: { 'text-align': 'center' }
                }
            ]
        };
        this.minimalConfig = {
            columnDefs: [
                {
                    field: 'userId'
                },
                {
                    field: 'userName'
                }
            ]
        };
    }
    AppComponent.prototype.rowClicked = function (item) {
        console.log('clicked item:', item);
    };
    AppComponent.prototype.cellItemClicked = function (options) {
        console.log(options);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <div style=\"height: 300px; margin-bottom: 25px;\">\n      <ng2-table\n        [tableData]=\"myData\"\n        [tableConfig]=\"myConfig\"\n        (rowClicked)=\"rowClicked($event)\"\n        (cellItemClicked)=\"cellItemClicked($event)\">\n      </ng2-table>\n    </div>\n\n    <ng2-table\n      [tableData]=\"myData\"\n      [tableConfig]=\"minimalConfig\"\n      (rowClicked)=\"rowClicked($event)\">\n    </ng2-table>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map