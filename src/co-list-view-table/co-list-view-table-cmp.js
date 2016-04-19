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
        this.tableDataCopy = this.tableData.map(function (i) { return Object['assign']({}, i); });
    };
    CoListViewTableCmp.prototype.searchUpdate = function ($event) {
        var foundColDef = this.tableConfigCopy.columnDefs.find(function (colDef) {
            return colDef.field === $event.field;
        });
        foundColDef.searchTerm = $event.value;
        this.tableConfigCopy = Object['assign']({}, this.tableConfigCopy);
    };
    CoListViewTableCmp.prototype.sortCol = function (col, index) {
        this.tableDataCopy = this.sorter.sort(col.field, this.tableDataCopy);
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
            selector: 'co-list-view-table',
            pipes: [search_pipe_1.SearchPipe],
            directives: [search_input_1.SearchInput],
            styles: ["\n    tr:hover {\n      cursor: pointer;\n    }\n  "],
            template: "\n    <table class='table table-striped'>\n      <thead>\n        <tr>\n          <th *ngFor='#col of tableConfig.columnDefs; #i = index'>\n            <search-input-cmp\n              *ngIf='col.search'\n              [field]='col.field'\n              (search)='searchUpdate($event)'>\n            </search-input-cmp>\n            <br *ngIf='col.search'>\n            <span (click)='sortCol(col, i)'>\n              {{col.displayName || col.field}}\n            </span>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          *ngFor='#dataRow of tableDataCopy | search: tableConfigCopy'\n          (click)='selected.emit(dataRow)'>\n          <td *ngFor='#col of tableConfig.columnDefs'>\n            {{dataRow[col.field]}}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CoListViewTableCmp);
    return CoListViewTableCmp;
}());
exports.CoListViewTableCmp = CoListViewTableCmp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY28tbGlzdC12aWV3LXRhYmxlLWNtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvLWxpc3Qtdmlldy10YWJsZS1jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUNyRCxDQUFDLENBRG1FO0FBQ3BFLHVCQUFxQixVQUNyQixDQUFDLENBRDhCO0FBQy9CLDRCQUF5QixlQUN6QixDQUFDLENBRHVDO0FBQ3hDLDZCQUEwQixnQkFFMUIsQ0FBQyxDQUZ5QztBQTRDMUM7SUFBQTtRQUdZLGFBQVEsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUt4QyxXQUFNLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztJQW1CeEIsQ0FBQztJQWpCQyxxQ0FBUSxHQUFSO1FBQ0UsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDN0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQTtJQUN2RSxDQUFDO0lBRUQseUNBQVksR0FBWixVQUFjLE1BQU07UUFDbEIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUMzRCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsS0FBSyxDQUFBO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsV0FBVyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDbkUsQ0FBQztJQUVELG9DQUFPLEdBQVAsVUFBUyxHQUFHLEVBQUUsS0FBSztRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQ3RFLENBQUM7SUF6QkQ7UUFBQyxZQUFLLEVBQUU7O3lEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzJEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O3dEQUFBO0lBekNYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsS0FBSyxFQUFFLENBQUMsd0JBQVUsQ0FBQztZQUNuQixVQUFVLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1lBQ3pCLE1BQU0sRUFBRSxDQUFDLHFEQUlSLENBQUM7WUFDRixRQUFRLEVBQUUsd3pCQTJCVDtTQUNGLENBQUM7OzBCQUFBO0lBNEJGLHlCQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQztBQTNCWSwwQkFBa0IscUJBMkI5QixDQUFBIn0=