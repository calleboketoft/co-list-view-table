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
var sorter_service_1 = require("./sorter.service");
var style_and_class_service_1 = require("./style-and-class.service");
var Ng2TableComponent = (function () {
    function Ng2TableComponent() {
        this.rowClicked = new core_1.EventEmitter();
        this.cellItemClicked = new core_1.EventEmitter();
        this.tableConfigUpdated = new core_1.EventEmitter();
        this.getNgThing = style_and_class_service_1.getNgThing;
    }
    // Deep copy the parts of the tableConfig that will be modified when
    // sorting and searching the columns
    Ng2TableComponent.prototype.copyTableConfig = function (tableConfig) {
        // columnDefs need to be deep copied
        var columnDefsCopy = tableConfig.columnDefs.map(function (colDef) {
            // sortAdvanced needs to be deep copied
            var copiedSortAdvanced = colDef.sortAdvanced
                ? Object.assign({}, colDef.sortAdvanced) : null;
            var copiedColDef = Object.assign({}, colDef);
            if (copiedSortAdvanced) {
                copiedColDef.sortAdvanced = copiedSortAdvanced;
            }
            return copiedColDef;
        });
        var tableConfigCopy = Object.assign({}, tableConfig, {
            columnDefs: columnDefsCopy
        });
        return tableConfigCopy;
    };
    Ng2TableComponent.prototype.ngAfterViewChecked = function () {
        // update header width based on view changes
        this.setTheadClass(this.tbody, this.thead);
    };
    Ng2TableComponent.prototype.setTheadClass = function (tbody, thead) {
        if (tbody && thead) {
            if (tbody.nativeElement.scrollHeight > tbody.nativeElement.clientHeight) {
                thead.nativeElement.className = 'with-scrollbar';
            }
            else {
                thead.nativeElement.className = 'without-scrollbar';
            }
        }
    };
    Ng2TableComponent.prototype.ngOnChanges = function (changes) {
        // if there's an incoming tableConfig, replace existing tableConfigCopy
        if (changes.tableConfig) {
            this.tableConfigCopy = this.copyTableConfig(this.tableConfig);
        }
        this.isAnyFieldFilterable = this.tableConfigCopy.columnDefs.some(function (colDef) {
            return !!colDef.filterEnabled;
        });
        // re-apply sorting when updating tableData or tableConfig
        if ((changes.tableConfig || changes.tableData) && this.tableData.length > 0) {
            var sortAdvanced = this.tableConfigCopy.columnDefs.find(function (colDef) {
                return !!colDef.sortAdvanced;
            });
            // sortAdvanced takes precedence over sortDefault in sorting
            if (sortAdvanced) {
                // there might be multiple columns with advanced sort
                this.sortColsAdvanced(this.tableConfigCopy.columnDefs);
            }
            else {
                var sortDefaultColIndex = this.tableConfigCopy.columnDefs.findIndex(function (colDef) {
                    return !!colDef.sortDefault;
                });
                if (sortDefaultColIndex !== -1) {
                    var colToSort = this.tableConfigCopy.columnDefs[sortDefaultColIndex];
                    // convert sortDefault to sortAdvanced to be able to simplify further
                    // column sorting
                    colToSort.sortAdvanced = {
                        count: 1,
                        direction: colToSort.sortDefault.startsWith('asc') ? 1 : -1
                    };
                    this.tableData = sorter_service_1.tableDataSort(colToSort.field, this.tableData, colToSort.sortAdvanced.direction);
                }
            }
        }
    };
    Ng2TableComponent.prototype.activateRow = function (options) {
        if (options.rowIndex) {
            this.tableConfigCopy.activeRow = options.rowIndex;
        }
        // TODO find based on rowData if rowIndex isn't available
        this.tableConfigUpdated.emit(this.copyTableConfig(this.tableConfigCopy));
    };
    Ng2TableComponent.prototype.rowClickedFn = function ($event, rowData, rowIndex) {
        if (this.tableConfigCopy.clickingRowActivatesRow !== false) {
            this.tableConfigCopy.activeRow = rowIndex;
        }
        this.rowClicked.emit({
            $event: $event,
            rowData: rowData,
            rowIndex: rowIndex
        });
    };
    Ng2TableComponent.prototype.cellItemClickedFn = function ($event, colSpec, rowData, rowIndex) {
        $event.stopPropagation(); // don't want to trigger "rowClickedFn" as well
        this.cellItemClicked.emit({
            $event: $event,
            columnDef: colSpec,
            rowData: rowData,
            rowIndex: rowIndex
        });
    };
    Ng2TableComponent.prototype.filterUpdate = function (originalCol) {
        // The incoming col is from the original tableConfig, which we don't want
        // to modify. Find the col from the tableConfigCopy and modify that one instead
        var foundColDef = this.tableConfigCopy.columnDefs.find(function (colDef) {
            return colDef.field === originalCol.field;
        });
        // add search term to the colDef for the field being searched
        foundColDef.filterValue = originalCol.value;
        // NOTE not 100% sure why I have to do this, foundColDef should've been
        // a reference to the tableConfigCopy item?
        var updatedTableConfigCopy = this.copyTableConfig(this.tableConfigCopy);
        this.tableConfigCopy = updatedTableConfigCopy;
        this.tableConfigUpdated.emit(updatedTableConfigCopy);
    };
    Ng2TableComponent.prototype.sortColsAdvanced = function (columnDefs) {
        // go through all columns and figure out sorting order based on
        // "sortAdvanced.count". Then call "tableDataSort" in the correct order
        var columnsToApplySorting = columnDefs.filter(function (colDef) {
            return !!colDef.sortAdvanced;
        });
        // use the count property to figure out in which order the columns were sorted
        columnsToApplySorting.sort(function (a, b) {
            if (a.sortAdvanced.count < b.sortAdvanced.count) {
                return -1;
            }
            if (a.sortAdvanced.count > b.sortAdvanced.count) {
                return 1;
            }
            return 0;
        });
        // sort all the columns with sortAdvanced, in order
        this.tableData = columnsToApplySorting.reduce(function (mem, curr) {
            mem = sorter_service_1.tableDataSort(curr.field, mem, curr.sortAdvanced.direction);
            return mem;
        }, this.tableData);
    };
    Ng2TableComponent.prototype.colHeaderSortClicked = function (originalCol) {
        // The incoming col is from the original tableConfig, which we don't want
        // to modify. Find the col from the tableConfigCopy and modify that one instead
        var colInCopy = this.tableConfigCopy.columnDefs.find(function (colDef) {
            return originalCol.field === colDef.field;
        });
        // Find the current highest sort count. Every time a column header is clicked
        // for sorting, the counter gets incremented. This can be used to recreate an
        // exact sort order based on multiple columns being sorted.
        var maxSortCount = this.tableConfigCopy.columnDefs.reduce(function (mem, curr) {
            if (curr.sortAdvanced && curr.sortAdvanced.count > mem) {
                mem = curr.sortAdvanced.count;
            }
            return mem;
        }, 0);
        colInCopy.sortAdvanced = colInCopy.sortAdvanced || {};
        // Set the sort count to max + 1, this is the most recently pressed sort
        colInCopy.sortAdvanced.count = maxSortCount + 1;
        var newDirection;
        if (colInCopy.sortAdvanced.direction === 1) {
            newDirection = -1;
        }
        else if (colInCopy.sortAdvanced.direction === -1) {
            newDirection = 0;
        }
        else {
            // if there was no previous sorting or 0
            newDirection = 1;
        }
        colInCopy.sortAdvanced.direction = newDirection;
        // Update columnDef for sorted item in the tableConfigCopy
        var colDefIndexToReplace = this.tableConfigCopy.columnDefs.findIndex(function (colDef) {
            return colDef.field === colInCopy.field;
        });
        this.tableConfigCopy.columnDefs[colDefIndexToReplace] = colInCopy;
        // reapply sorting to tableData
        this.sortColsAdvanced(this.tableConfigCopy.columnDefs);
        this.tableConfigUpdated.emit(this.copyTableConfig(this.tableConfigCopy));
    };
    return Ng2TableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], Ng2TableComponent.prototype, "tableData", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Ng2TableComponent.prototype, "tableConfig", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2TableComponent.prototype, "rowClicked", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2TableComponent.prototype, "cellItemClicked", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2TableComponent.prototype, "tableConfigUpdated", void 0);
__decorate([
    core_1.ViewChild('tbody'),
    __metadata("design:type", Object)
], Ng2TableComponent.prototype, "tbody", void 0);
__decorate([
    core_1.ViewChild('thead'),
    __metadata("design:type", Object)
], Ng2TableComponent.prototype, "thead", void 0);
Ng2TableComponent = __decorate([
    core_1.Component({
        selector: 'ng2-table',
        styles: ["\n    /**\n     * Scrollable tbody\n     * https://jsfiddle.net/tsayen/xuvsncr2/28/\n     * http://stackoverflow.com/questions/17067294/html-table-with-100-width-with-vertical-scroll-inside-tbody\n     */\n\n    table {\n      display: flex;\n      flex-flow: column;\n      height: 100%;\n      width: 100%;\n    }\n    table thead {\n      /* head takes the height it requires,\n      and it's not scaled when table is resized */\n      flex: 0 0 auto;\n    }\n    table thead.with-scrollbar {\n      width: calc(100% - 0.9em);\n    }\n    table thead.without-scrollbar {\n      width: 100%\n    }\n    table tbody {\n      /* body takes all the remaining available space */\n      flex: 1 1 auto;\n      display: block;\n      overflow: auto;\n    }\n    table tbody tr {\n      width: 100%;\n    }\n    table thead, table tbody tr {\n      display: table;\n      table-layout: fixed;\n    }\n\n    /**\n     * Appearance\n     */\n\n    th span:hover {\n      cursor: pointer;\n    }\n    .table thead th {\n      vertical-align: top;\n      border-bottom: 1px solid #eceeef;\n    }\n    .filter-wrap {\n      margin-top: 8px;\n    }\n\n    /**\n     * Preserve newlines\n     * http://stackoverflow.com/questions/10937218/how-to-show-multiline-text-in-a-table-cell\n     *\n     * And let word-wrap still work\n     * http://stackoverflow.com/a/4413129\n     */\n    td > div > .cell-content {\n      white-space: pre-wrap;\n    }\n  "],
        template: "\n    <table\n      [ngClass]=\"getNgThing('table', 'class', tableConfig)\"\n      [ngStyle]=\"getNgThing('table', 'style', tableConfig)\">\n      <thead #thead>\n        <tr>\n          <!-- rendering from tableConfigCopy makes the header re-render each\n               time tableConfigCopy is updated -->\n          <th *ngFor=\"let col of tableConfigCopy.columnDefs\"\n            [style.width]=\"col.width\"\n            [ngClass]=\"getNgThing('header', 'class', tableConfig, null, null, null, col)\"\n            [ngStyle]=\"getNgThing('header', 'style', tableConfig, null, null, null, col)\">\n            <span (click)=\"colHeaderSortClicked(col)\">\n              {{col.headerText || col.field}}\n              <span *ngIf=\"col.sortAdvanced?.direction === -1\" class=\"ng2-table-caret\">\n                &nbsp;&#9660;\n              </span>\n              <span *ngIf=\"col.sortAdvanced?.direction === 1\" class=\"ng2-table-caret\">\n                &nbsp;&#9650;\n              </span>\n            </span>\n\n            <div *ngIf=\"!isAnyFieldFilterable\" class=\"filter-wrap\">\n            </div>\n\n            <div *ngIf=\"isAnyFieldFilterable\" class=\"filter-wrap\">\n              <filter-input-cmp\n                *ngIf=\"col.filterEnabled\"\n                [filterValue]=\"col.filterValue\"\n                [field]=\"col.field\"\n                [placeholder]=\"col.filterPlaceholder\"\n                (filter)=\"filterUpdate($event)\">\n              </filter-input-cmp>\n            </div>\n          </th>\n        </tr>\n      </thead>\n      <tbody #tbody>\n        <tr\n          *ngFor=\"let rowData of tableData | filter: tableConfigCopy; let rowIndex = index\"\n          [ngClass]=\"getNgThing('row', 'class', tableConfig, rowData, rowIndex, tableConfigCopy.activeRow)\"\n          [ngStyle]=\"getNgThing('row', 'style', tableConfig, rowData, rowIndex, tableConfigCopy.activeRow)\"\n          (click)=\"rowClickedFn($event, rowData, rowIndex)\">\n          <td *ngFor=\"let col of tableConfig.columnDefs\" [style.width]=\"col.width\">\n            <div [ngSwitch]=\"col.cellItem?.elementType\">\n\n              <!-- BUTTON -->\n              <div *ngSwitchCase=\"'button'\">\n                <div\n                  [ngClass]=\"getNgThing('cell', 'class', tableConfig, rowData, rowIndex, tableConfigCopy.activeRow, col)\"\n                  [ngStyle]=\"getNgThing('cell', 'style', tableConfig, rowData, rowIndex, tableConfigCopy.activeRow, col)\">\n                  <button type=\"button\"\n                    [ngClass]=\"getNgThing('cellItemButton', 'class', tableConfig, rowData, rowIndex, tableConfigCopy.activeRow, col)\"\n                    [ngStyle]=\"getNgThing('cellItemButton', 'style', tableConfig, rowData, rowIndex, tableConfigCopy.activeRow, col)\"\n                    (click)=\"cellItemClickedFn($event, col, rowData)\"\n                    >{{col.cellItem?.staticContent || rowData[col.field]}}</button>\n                </div>\n              </div>\n\n              <!-- DIV -->\n              <div *ngSwitchCase=\"'div'\">\n                <div\n                  [ngClass]=\"getNgThing('cell', 'class', tableConfig, rowData, rowIndex, tableConfigCopy.activeRow, col)\"\n                  [ngStyle]=\"getNgThing('cell', 'style', tableConfig, rowData, rowIndex, tableConfigCopy.activeRow, col)\">\n                  <div\n                    [ngClass]=\"getNgThing('cellItemDiv', 'class', tableConfig, rowData, rowIndex, tableConfigCopy.activeRow, col)\"\n                    [ngStyle]=\"getNgThing('cellItemDiv', 'style', tableConfig, rowData, rowIndex, tableConfigCopy.activeRow, col)\"\n                    (click)=\"cellItemClickedFn($event, col, rowData, rowIndex)\"\n                    >{{col.cellItem?.staticContent || rowData[col.field]}}</div>\n                </div>\n              </div>\n\n              <!-- NO ITEM -->\n              <div *ngSwitchDefault class=\"cell-content\"\n                  [ngClass]=\"getNgThing('cell', 'class', tableConfig, rowData, rowIndex, tableConfigCopy.activeRow, col)\"\n                  [ngStyle]=\"getNgThing('cell', 'style', tableConfig, rowData, rowIndex, tableConfigCopy.activeRow, col)\"\n                >{{rowData[col.field]}}</div>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  "
    })
], Ng2TableComponent);
exports.Ng2TableComponent = Ng2TableComponent;
//# sourceMappingURL=ng2-table.component.js.map