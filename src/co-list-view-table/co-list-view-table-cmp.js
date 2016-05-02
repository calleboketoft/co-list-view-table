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
    CoListViewTableCmp.prototype.ngOnChanges = function (changes) {
        // add search terms etc to this one
        // the only problem would be if we want to send in a new tableConfig
        // via the @Input() since we're now working with a copy
        this.tableConfigCopy = this.tableConfigCopy || Object['assign']({}, this.tableConfig);
        this.isAnyFieldSearchable = this.tableConfigCopy.columnDefs.some(function (col) {
            return !!col.search;
        });
        // TODO when updating content, remember which column was clicked for sorting
        // atm, we reset the sorting when updating the content
        if (changes.tableData.currentValue.length > 0) {
            var sortDefaultCol = this.tableConfigCopy.columnDefs.find(function (col) {
                return col.sortDefault;
            });
            if (sortDefaultCol) {
                this.sortCol(sortDefaultCol, true);
            }
        }
    };
    CoListViewTableCmp.prototype.selectRow = function (dataRow, rowIndex) {
        this.activeRow = rowIndex;
        this.selected.emit(dataRow);
    };
    CoListViewTableCmp.prototype.searchUpdate = function ($event) {
        var foundColDef = this.tableConfigCopy.columnDefs.find(function (colDef) {
            return colDef.field === $event.field;
        });
        foundColDef.searchTerm = $event.value;
        this.tableConfigCopy = Object['assign']({}, this.tableConfigCopy);
    };
    CoListViewTableCmp.prototype.sortCol = function (col, dontToggle) {
        this.tableData = this.sorter.sort(col.field, this.tableData, dontToggle);
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
            styles: ["\n    /**\n     * Scrollable tbody\n     * https://jsfiddle.net/tsayen/xuvsncr2/28/\n     * http://stackoverflow.com/questions/17067294/html-table-with-100-width-with-vertical-scroll-inside-tbody\n     */\n\n    table {\n      display: flex;\n      flex-flow: column;\n      height: 100%;\n      width: 100%;\n    }\n    table thead {\n      /* head takes the height it requires,\n      and it's not scaled when table is resized */\n      flex: 0 0 auto;\n      width: calc(100% - 0.9em);\n    }\n    table tbody {\n      /* body takes all the remaining available space */\n      flex: 1 1 auto;\n      display: block;\n      overflow-y: scroll;\n    }\n    table tbody tr {\n      width: 100%;\n    }\n    table thead, table tbody tr {\n      display: table;\n      table-layout: fixed;\n    }\n\n    /**\n     * Appearance\n     */\n\n    tbody tr:hover,\n    th span:hover {\n      cursor: pointer;\n    }\n    .table thead th {\n      vertical-align: top;\n      border-bottom: 1px solid #eceeef;\n    }\n    .search-wrap {\n      margin-top: 8px;\n    }\n  "],
            template: "\n    <table class='table table-striped table-hover'>\n      <thead>\n        <tr>\n          <th *ngFor='let col of tableConfig.columnDefs'>\n            <span (click)='sortCol(col)'>\n              {{col.displayName || col.field}}\n            </span>\n            <div *ngIf='isAnyFieldSearchable' class='search-wrap'>\n              <search-input-cmp\n                *ngIf='col.search'\n                [field]='col.field'\n                (search)='searchUpdate($event)'>\n              </search-input-cmp>\n            </div>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          [class.table-info]='rowIndex === activeRow'\n          *ngFor='let dataRow of tableData | search: tableConfigCopy; let rowIndex = index'\n          (click)='selectRow(dataRow, rowIndex)'>\n          <td *ngFor='let col of tableConfig.columnDefs'>\n            {{dataRow[col.field]}}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CoListViewTableCmp);
    return CoListViewTableCmp;
}());
exports.CoListViewTableCmp = CoListViewTableCmp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY28tbGlzdC12aWV3LXRhYmxlLWNtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvLWxpc3Qtdmlldy10YWJsZS1jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUNyRCxDQUFDLENBRG1FO0FBQ3BFLHVCQUFxQixVQUNyQixDQUFDLENBRDhCO0FBQy9CLDRCQUF5QixlQUN6QixDQUFDLENBRHVDO0FBQ3hDLDZCQUEwQixnQkFFMUIsQ0FBQyxDQUZ5QztBQTBGMUM7SUFBQTtRQUdZLGFBQVEsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQU14QyxXQUFNLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztJQXdDeEIsQ0FBQztJQXRDQyx3Q0FBVyxHQUFYLFVBQWEsT0FBTztRQUNsQixtQ0FBbUM7UUFDbkMsb0VBQW9FO1FBQ3BFLHVEQUF1RDtRQUN2RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFFckYsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDbEUsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFBO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO1FBRUYsNEVBQTRFO1FBQzVFLHNEQUFzRDtRQUN0RCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUMzRCxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQTtZQUN4QixDQUFDLENBQUMsQ0FBQTtZQUNGLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ3BDLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELHNDQUFTLEdBQVQsVUFBVyxPQUFPLEVBQUUsUUFBUTtRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQTtRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBRUQseUNBQVksR0FBWixVQUFjLE1BQU07UUFDbEIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUMzRCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsS0FBSyxDQUFBO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsV0FBVyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDbkUsQ0FBQztJQUVELG9DQUFPLEdBQVAsVUFBUyxHQUFHLEVBQUUsVUFBVTtRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUMxRSxDQUFDO0lBL0NEO1FBQUMsWUFBSyxFQUFFOzt5REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzsyREFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzt3REFBQTtJQXZGWDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLEtBQUssRUFBRSxDQUFDLHdCQUFVLENBQUM7WUFDbkIsVUFBVSxFQUFFLENBQUMsMEJBQVcsQ0FBQztZQUN6QixNQUFNLEVBQUUsQ0FBQyx3aUNBZ0RSLENBQUM7WUFDRixRQUFRLEVBQUUsMDhCQTZCVDtTQUNGLENBQUM7OzBCQUFBO0lBa0RGLHlCQUFDO0FBQUQsQ0FBQyxBQWpERCxJQWlEQztBQWpEWSwwQkFBa0IscUJBaUQ5QixDQUFBIn0=