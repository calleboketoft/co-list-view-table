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
var search_pipe_1 = require('./search-pipe');
var search_input_1 = require('./search-input');
var CoListViewTableCmp = (function () {
    function CoListViewTableCmp() {
        this.selected = new core_1.EventEmitter();
        this.sorter = new sorter_1.Sorter();
    }
    CoListViewTableCmp.prototype.ngOnInit = function () {
        // add search terms etc to this one
        this.tableConfigCopy = Object['assign']({}, this.tableConfig);
    };
    CoListViewTableCmp.prototype.searchUpdate = function ($event) {
        var foundColDef = this.tableConfigCopy.columnDefs.find(function (colDef) {
            return colDef.field === $event.field;
        });
        foundColDef.searchTerm = $event.value;
        this.tableConfigCopy = Object['assign']({}, this.tableConfigCopy);
    };
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
            pipes: [search_pipe_1.SearchPipe],
            directives: [search_input_1.SearchInput],
            styles: ["\n    tr:hover {\n      cursor: pointer;\n    }\n  "],
            template: "\n    <table class='table table-striped'>\n      <thead>\n        <tr>\n          <th *ngFor='#col of tableConfig.columnDefs; #i = index'>\n            <search-input-cmp\n              *ngIf='col.search'\n              [field]='col.field'\n              (search)='searchUpdate($event)'>\n            </search-input-cmp>\n            <br>\n            <span (click)='sortCol(col, i)'>\n              {{col.displayName}}\n            </span>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          *ngFor='#dataRow of tableData | search: tableConfigCopy'\n          (click)='selected.emit(dataRow)'>\n          <td *ngFor='#col of tableConfig.columnDefs'>\n            {{dataRow[col.field]}}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CoListViewTableCmp);
    return CoListViewTableCmp;
}());
exports.CoListViewTableCmp = CoListViewTableCmp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY28tbGlzdC12aWV3LXRhYmxlLWNtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvLWxpc3Qtdmlldy10YWJsZS1jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUNyRCxDQUFDLENBRG1FO0FBQ3BFLHVCQUFxQixVQUNyQixDQUFDLENBRDhCO0FBQy9CLDRCQUF5QixlQUN6QixDQUFDLENBRHVDO0FBQ3hDLDZCQUEwQixnQkFFMUIsQ0FBQyxDQUZ5QztBQTRDMUM7SUFBQTtRQUdZLGFBQVEsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUl4QyxXQUFNLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztJQWtCeEIsQ0FBQztJQWhCQyxxQ0FBUSxHQUFSO1FBQ0UsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDL0QsQ0FBQztJQUVELHlDQUFZLEdBQVosVUFBYyxNQUFNO1FBQ2xCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDM0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUN0QyxDQUFDLENBQUMsQ0FBQTtRQUNGLFdBQVcsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUFFRCxvQ0FBTyxHQUFQLFVBQVMsR0FBRyxFQUFFLEtBQUs7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQXZCRDtRQUFDLFlBQUssRUFBRTs7eURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7MkRBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7d0RBQUE7SUF6Q1g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxLQUFLLEVBQUUsQ0FBQyx3QkFBVSxDQUFDO1lBQ25CLFVBQVUsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDekIsTUFBTSxFQUFFLENBQUMscURBSVIsQ0FBQztZQUNGLFFBQVEsRUFBRSxveEJBMkJUO1NBQ0YsQ0FBQzs7MEJBQUE7SUEwQkYseUJBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDO0FBekJZLDBCQUFrQixxQkF5QjlCLENBQUEifQ==