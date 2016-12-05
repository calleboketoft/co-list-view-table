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
            rowClick: true,
            columnDefs: [
                {
                    field: 'userId',
                    displayName: 'ID',
                    width: '100px'
                },
                {
                    field: 'userName',
                    displayName: 'Name',
                    search: true,
                    sortDefaultReverse: true,
                    styleCell: { 'color': 'green' }
                },
                {
                    field: 'nickName',
                    displayName: 'Nickname',
                    search: true
                },
                {
                    displayName: 'Delete',
                    type: 'button',
                    styleCell: { 'text-align': 'center' },
                    styleHeader: { 'text-align': 'center', 'color': 'orange' },
                    config: {
                        buttonName: 'X',
                        buttonClass: 'btn btn-sm btn-danger'
                    }
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
    AppComponent.prototype.selectedItem = function (item) {
        console.log('clicked item:', item);
    };
    AppComponent.prototype.buttonClicked = function (options) {
        console.log(options);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <div style=\"height: 300px;\">\n      <ng2-table\n        [tableData]=\"myData\"\n        [tableConfig]=\"myConfig\"\n        (selectedItem)=\"selectedItem($event)\"\n        (buttonClicked)=\"buttonClicked($event)\">\n      </ng2-table>\n    </div>\n\n    <br><br>\n\n    <ng2-table\n      [tableData]=\"myData\"\n      [tableConfig]=\"minimalConfig\"\n      (selectedItem)=\"selectedItem($event)\">\n    </ng2-table>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map