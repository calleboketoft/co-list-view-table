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
var CoListViewTableCmp = (function () {
    function CoListViewTableCmp() {
        this.selected = new core_1.EventEmitter();
    }
    CoListViewTableCmp.prototype.ngOnInit = function () {
        this.displayTableData = this.tableData.slice();
    };
    CoListViewTableCmp.prototype.sortCol = function (col, index) {
        console.log('filtering: ' + col.filtering);
        console.log('field: ' + col.field);
        console.log('tableData: ');
        console.log(this.tableData);
        this.displayTableData = this.tableData.slice();
        // Sort the tableData here
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CoListViewTableCmp.prototype, "tableData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CoListViewTableCmp.prototype, "tableConfig", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CoListViewTableCmp.prototype, "selected", void 0);
    CoListViewTableCmp = __decorate([
        core_1.Component({
            selector: 'co-list-view-table-cmp',
            styles: ["\n    tr:hover {\n      cursor: pointer;\n    }\n  "],
            template: "\n    <table class='table'>\n      <thead>\n        <tr>\n          <th *ngFor='#col of tableConfig.columnDefs; #i = index'>\n            <input type='text' [hidden]='!col.filtering'>\n            <br>\n            <span (click)='sortCol(col, i)'>\n              {{col.displayName}}\n            </span>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='#dataRow of displayTableData' (click)='selected.emit(dataRow)'>\n          <td *ngFor='#col of tableConfig.columnDefs'>\n            {{dataRow[col.field]}}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CoListViewTableCmp);
    return CoListViewTableCmp;
}());
exports.CoListViewTableCmp = CoListViewTableCmp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY28tbGlzdC12aWV3LXRhYmxlLWNtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvLWxpc3Qtdmlldy10YWJsZS1jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUVyRCxDQUFDLENBRm1FO0FBb0NwRTtJQUFBO1FBR1ksYUFBUSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBZ0IxQyxDQUFDO0lBWkMscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBTyxJQUFJLENBQUMsU0FBUyxRQUFDLENBQUE7SUFDN0MsQ0FBQztJQUVELG9DQUFPLEdBQVAsVUFBUyxHQUFHLEVBQUUsS0FBSztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFPLElBQUksQ0FBQyxTQUFTLFFBQUMsQ0FBQTtRQUMzQywwQkFBMEI7SUFDNUIsQ0FBQztJQWpCRDtRQUFDLFlBQUssRUFBRTs7eURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7MkRBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7d0RBQUE7SUFqQ1g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxNQUFNLEVBQUUsQ0FBQyxxREFJUixDQUFDO1lBQ0YsUUFBUSxFQUFFLG1tQkFxQlQ7U0FDRixDQUFDOzswQkFBQTtJQW9CRix5QkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksMEJBQWtCLHFCQW1COUIsQ0FBQSJ9