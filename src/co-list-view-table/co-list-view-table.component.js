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
var sorter_service_1 = require('./sorter.service');
var search_pipe_1 = require('./search.pipe');
var search_input_component_1 = require('./search-input.component');
var CoListViewTableComponent = (function () {
    function CoListViewTableComponent() {
        this.selected = new core_1.EventEmitter();
        this.sorter = new sorter_service_1.Sorter();
    }
    CoListViewTableComponent.prototype.ngOnChanges = function (changes) {
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
    CoListViewTableComponent.prototype.selectRow = function (dataRow, rowIndex) {
        this.activeRow = rowIndex;
        this.selected.emit(dataRow);
    };
    CoListViewTableComponent.prototype.searchUpdate = function ($event) {
        var foundColDef = this.tableConfigCopy.columnDefs.find(function (colDef) {
            return colDef.field === $event.field;
        });
        foundColDef.searchTerm = $event.value;
        this.tableConfigCopy = Object['assign']({}, this.tableConfigCopy);
    };
    CoListViewTableComponent.prototype.sortCol = function (col, dontToggle) {
        this.tableData = this.sorter.sort(col.field, this.tableData, dontToggle);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CoListViewTableComponent.prototype, "tableData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CoListViewTableComponent.prototype, "tableConfig", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CoListViewTableComponent.prototype, "selected", void 0);
    CoListViewTableComponent = __decorate([
        core_1.Component({
            selector: 'co-list-view-table-cmp',
            pipes: [search_pipe_1.SearchPipe],
            directives: [search_input_component_1.SearchInputComponent],
            styles: ["\n    /**\n     * Scrollable tbody\n     * https://jsfiddle.net/tsayen/xuvsncr2/28/\n     * http://stackoverflow.com/questions/17067294/html-table-with-100-width-with-vertical-scroll-inside-tbody\n     */\n\n    table {\n      display: flex;\n      flex-flow: column;\n      height: 100%;\n      width: 100%;\n    }\n    table thead {\n      /* head takes the height it requires,\n      and it's not scaled when table is resized */\n      flex: 0 0 auto;\n      width: calc(100% - 0.9em);\n    }\n    table tbody {\n      /* body takes all the remaining available space */\n      flex: 1 1 auto;\n      display: block;\n      overflow-y: scroll;\n    }\n    table tbody tr {\n      width: 100%;\n    }\n    table thead, table tbody tr {\n      display: table;\n      table-layout: fixed;\n    }\n\n    /**\n     * Appearance\n     */\n\n    tbody tr:hover,\n    th span:hover {\n      cursor: pointer;\n    }\n    .table thead th {\n      vertical-align: top;\n      border-bottom: 1px solid #eceeef;\n    }\n    .search-wrap {\n      margin-top: 8px;\n    }\n  "],
            template: "\n    <table class='table table-striped table-hover'>\n      <thead>\n        <tr>\n          <th *ngFor='let col of tableConfig.columnDefs'>\n            <span (click)='sortCol(col)'>\n              {{col.displayName || col.field}}\n            </span>\n            <div *ngIf='isAnyFieldSearchable' class='search-wrap'>\n              <search-input-cmp\n                *ngIf='col.search'\n                [field]='col.field'\n                (search)='searchUpdate($event)'>\n              </search-input-cmp>\n            </div>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          [class.table-info]='rowIndex === activeRow'\n          *ngFor='let dataRow of tableData | search: tableConfigCopy; let rowIndex = index'\n          (click)='selectRow(dataRow, rowIndex)'>\n          <td *ngFor='let col of tableConfig.columnDefs'>\n            {{dataRow[col.field]}}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CoListViewTableComponent);
    return CoListViewTableComponent;
}());
exports.CoListViewTableComponent = CoListViewTableComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY28tbGlzdC12aWV3LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvLWxpc3Qtdmlldy10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUNyRCxDQUFDLENBRG1FO0FBQ3BFLCtCQUFxQixrQkFDckIsQ0FBQyxDQURzQztBQUN2Qyw0QkFBeUIsZUFDekIsQ0FBQyxDQUR1QztBQUN4Qyx1Q0FBbUMsMEJBRW5DLENBQUMsQ0FGNEQ7QUEwRjdEO0lBQUE7UUFHWSxhQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFNeEMsV0FBTSxHQUFHLElBQUksdUJBQU0sRUFBRSxDQUFDO0lBd0N4QixDQUFDO0lBdENDLDhDQUFXLEdBQVgsVUFBYSxPQUFPO1FBQ2xCLG1DQUFtQztRQUNuQyxvRUFBb0U7UUFDcEUsdURBQXVEO1FBQ3ZELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUVyRixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNsRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUE7UUFDckIsQ0FBQyxDQUFDLENBQUE7UUFFRiw0RUFBNEU7UUFDNUUsc0RBQXNEO1FBQ3RELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQzNELE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFBO1lBQ3hCLENBQUMsQ0FBQyxDQUFBO1lBQ0YsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDcEMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsNENBQVMsR0FBVCxVQUFXLE9BQU8sRUFBRSxRQUFRO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFBO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFRCwrQ0FBWSxHQUFaLFVBQWMsTUFBTTtRQUNsQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQzNELE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDdEMsQ0FBQyxDQUFDLENBQUE7UUFDRixXQUFXLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUNuRSxDQUFDO0lBRUQsMENBQU8sR0FBUCxVQUFTLEdBQUcsRUFBRSxVQUFVO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQzFFLENBQUM7SUEvQ0Q7UUFBQyxZQUFLLEVBQUU7OytEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O2lFQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7OzhEQUFBO0lBdkZYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsS0FBSyxFQUFFLENBQUMsd0JBQVUsQ0FBQztZQUNuQixVQUFVLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQztZQUNsQyxNQUFNLEVBQUUsQ0FBQyx3aUNBZ0RSLENBQUM7WUFDRixRQUFRLEVBQUUsMDhCQTZCVDtTQUNGLENBQUM7O2dDQUFBO0lBa0RGLCtCQUFDO0FBQUQsQ0FBQyxBQWpERCxJQWlEQztBQWpEWSxnQ0FBd0IsMkJBaURwQyxDQUFBIn0=