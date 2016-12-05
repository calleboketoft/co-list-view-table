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
var Ng2TableComponent = (function () {
    function Ng2TableComponent() {
        this.selectedItem = new core_1.EventEmitter();
        this.buttonClicked = new core_1.EventEmitter();
        this.rowClickStyles = false;
        this.sorter = new sorter_service_1.Sorter();
    }
    Ng2TableComponent.prototype.ngOnChanges = function (changes) {
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
            var colToSortBy = this.tableConfigCopy.columnDefs.find(function (col) {
                return col.sortDefault || col.sortDefaultReverse;
            });
            if (colToSortBy) {
                // Sort once, standard direction
                this.sortCol(colToSortBy, false);
                if (colToSortBy.sortDefaultReverse) {
                    // Sorting again to reverse the sorting
                    this.sortCol(colToSortBy, false);
                }
            }
        }
    };
    Ng2TableComponent.prototype.configTernary = function (configKey, trueVal, falseVal) {
        if (trueVal === void 0) { trueVal = true; }
        if (falseVal === void 0) { falseVal = false; }
        if (this.tableConfigCopy) {
            return this.tableConfigCopy[configKey] ? trueVal : falseVal;
        }
    };
    Ng2TableComponent.prototype.selectRow = function (dataRow, rowIndex) {
        this.activeRow = rowIndex;
        this.selectedItem.emit(dataRow);
    };
    // Custom button clicked
    Ng2TableComponent.prototype.buttonFn = function ($event, colSpec, row) {
        $event.stopPropagation(); // don't want to trigger "selectRow" as well
        this.buttonClicked.emit({ colSpec: colSpec, row: row });
    };
    Ng2TableComponent.prototype.searchUpdate = function ($event) {
        var foundColDef = this.tableConfigCopy.columnDefs.find(function (colDef) {
            return colDef.field === $event.field;
        });
        foundColDef.searchTerm = $event.value;
        this.tableConfigCopy = Object['assign']({}, this.tableConfigCopy);
    };
    Ng2TableComponent.prototype.sortCol = function (col, dontToggle) {
        this.tableData = this.sorter.sort(col.field, this.tableData, dontToggle);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Ng2TableComponent.prototype, "tableData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Ng2TableComponent.prototype, "tableConfig", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Ng2TableComponent.prototype, "selectedItem", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Ng2TableComponent.prototype, "buttonClicked", void 0);
    Ng2TableComponent = __decorate([
        core_1.Component({
            selector: 'ng2-table',
            styles: ["\n    /**\n     * Scrollable tbody\n     * https://jsfiddle.net/tsayen/xuvsncr2/28/\n     * http://stackoverflow.com/questions/17067294/html-table-with-100-width-with-vertical-scroll-inside-tbody\n     */\n\n    table {\n      display: flex;\n      flex-flow: column;\n      height: 100%;\n      width: 100%;\n    }\n    table thead {\n      /* head takes the height it requires,\n      and it's not scaled when table is resized */\n      flex: 0 0 auto;\n      width: calc(100% - 0.9em);\n    }\n    table tbody {\n      /* body takes all the remaining available space */\n      flex: 1 1 auto;\n      display: block;\n      overflow: auto;\n    }\n    table tbody tr {\n      width: 100%;\n    }\n    table thead, table tbody tr {\n      display: table;\n      table-layout: fixed;\n    }\n\n    /**\n     * Appearance\n     */\n\n    th span:hover {\n      cursor: pointer;\n    }\n    .table thead th {\n      vertical-align: top;\n      border-bottom: 1px solid #eceeef;\n    }\n    .search-wrap {\n      margin-top: 8px;\n    }\n\n    /**\n     * Preserve newlines\n     * http://stackoverflow.com/questions/10937218/how-to-show-multiline-text-in-a-table-cell\n     *\n     * And let word-wrap still work\n     * http://stackoverflow.com/a/4413129\n     */\n    td > div > .cell-content {\n      white-space: pre-wrap;\n    }\n  "],
            template: "\n    <table class=\"table table-striped\"\n      [class.table-hover]=\"configTernary('rowClickStyles')\">\n      <thead>\n        <tr>\n          <th *ngFor=\"let col of tableConfig.columnDefs\"\n            [style.width]=\"col.width\"\n            [ngStyle]=\"col.styleHeader\">\n            <span (click)=\"sortCol(col)\">\n              {{col.displayName || col.field}}\n            </span>\n            <div *ngIf=\"isAnyFieldSearchable\" class=\"search-wrap\">\n              <search-input-cmp\n                *ngIf=\"col.search\"\n                [field]=\"col.field\"\n                (search)=\"searchUpdate($event)\">\n              </search-input-cmp>\n            </div>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          [class.table-info]=\"configTernary('rowClickStyles') && rowIndex === activeRow\"\n          [style.cursor]=\"configTernary('rowClickStyles', 'pointer', '')\"\n          *ngFor=\"let dataRow of tableData | search: tableConfigCopy; let rowIndex = index\"\n          (click)=\"selectRow(dataRow, rowIndex)\">\n          <td *ngFor=\"let col of tableConfig.columnDefs\" [style.width]=\"col.width\">\n            <div [ngSwitch]=\"col.type\">\n              <div *ngSwitchCase=\"'button'\">\n                <div [ngStyle]=\"col.styleCell\">\n                  <button type=\"button\"\n                    [class]=\"col.config.buttonClass || 'btn btn-sm btn-primary'\"\n                    (click)=\"buttonFn($event, col, dataRow)\">\n                      {{col.config.buttonName}}\n                  </button>\n                </div>\n              </div>\n              <div *ngSwitchDefault class=\"cell-content\"\n                [ngStyle]=\"col.styleCell\">{{dataRow[col.field]}}</div>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2TableComponent);
    return Ng2TableComponent;
}());
exports.Ng2TableComponent = Ng2TableComponent;
//# sourceMappingURL=ng2-table.component.js.map