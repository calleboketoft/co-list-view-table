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
var sorter_1 = require('./sorter');
var CoListViewTableCmp = (function () {
    function CoListViewTableCmp() {
        this.selected = new core_1.EventEmitter();
        this.sorter = new sorter_1.Sorter();
    }
    CoListViewTableCmp.prototype.sortCol = function (col, index) {
        this.sorter.sort(col.field, this.tableData);
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
            template: "\n    <table class='table table-striped'>\n      <thead>\n        <tr>\n          <th *ngFor='#col of tableConfig.columnDefs; #i = index'>\n            <input type='text' [hidden]='!col.filtering'>\n            <br>\n            <span (click)='sortCol(col, i)'>\n              {{col.displayName}}\n            </span>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='#dataRow of tableData' (click)='selected.emit(dataRow)'>\n          <td *ngFor='#col of tableConfig.columnDefs'>\n            {{dataRow[col.field]}}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CoListViewTableCmp);
    return CoListViewTableCmp;
}());
exports.CoListViewTableCmp = CoListViewTableCmp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY28tbGlzdC12aWV3LXRhYmxlLWNtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvLWxpc3Qtdmlldy10YWJsZS1jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUNyRCxDQUFDLENBRG1FO0FBQ3BFLHVCQUFxQixVQUVyQixDQUFDLENBRjhCO0FBb0MvQjtJQUFBO1FBR1ksYUFBUSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRXhDLFdBQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFBO0lBS3ZCLENBQUM7SUFIQyxvQ0FBTyxHQUFQLFVBQVMsR0FBRyxFQUFFLEtBQUs7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQVJEO1FBQUMsWUFBSyxFQUFFOzt5REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzsyREFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzt3REFBQTtJQWpDWDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLE1BQU0sRUFBRSxDQUFDLHFEQUlSLENBQUM7WUFDRixRQUFRLEVBQUUsMG1CQXFCVDtTQUNGLENBQUM7OzBCQUFBO0lBV0YseUJBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLDBCQUFrQixxQkFVOUIsQ0FBQSJ9