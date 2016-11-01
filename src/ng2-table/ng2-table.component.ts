import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core'
import { Sorter } from './sorter.service'

export interface ITableConfig {
  columnDefs: any
}

@Component({
  selector: 'ng2-table',
  styles: [`
    /**
     * Scrollable tbody
     * https://jsfiddle.net/tsayen/xuvsncr2/28/
     * http://stackoverflow.com/questions/17067294/html-table-with-100-width-with-vertical-scroll-inside-tbody
     */

    table {
      display: flex;
      flex-flow: column;
      height: 100%;
      width: 100%;
    }
    table thead {
      /* head takes the height it requires,
      and it's not scaled when table is resized */
      flex: 0 0 auto;
      width: calc(100% - 0.9em);
    }
    table tbody {
      /* body takes all the remaining available space */
      flex: 1 1 auto;
      display: block;
      overflow-y: scroll;
    }
    table tbody tr {
      width: 100%;
    }
    table thead, table tbody tr {
      display: table;
      table-layout: fixed;
    }

    /**
     * Appearance
     */

    tbody tr:hover,
    th span:hover {
      cursor: pointer;
    }
    .table thead th {
      vertical-align: top;
      border-bottom: 1px solid #eceeef;
    }
    .search-wrap {
      margin-top: 8px;
    }
  `],
  template: `
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th *ngFor="let col of tableConfig.columnDefs">
            <span (click)="sortCol(col)">
              {{col.displayName || col.field}}
            </span>
            <div *ngIf="isAnyFieldSearchable" class="search-wrap">
              <search-input-cmp
                *ngIf="col.search"
                [field]="col.field"
                (search)="searchUpdate($event)">
              </search-input-cmp>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          [class.table-info]="rowIndex === activeRow"
          *ngFor="let dataRow of tableData | search: tableConfigCopy; let rowIndex = index"
          (click)="selectRow(dataRow, rowIndex)">
          <td *ngFor="let col of tableConfig.columnDefs">
            <div [ngSwitch]="col.type">
              <div *ngSwitchCase="'button'">
                <div [ngStyle]="col.style">
                  <button type="button" [class]="col.config.buttonClass || 'btn btn-sm btn-primary'"
                    (click)="buttonFn($event, col, dataRow)">
                    {{col.config.buttonName}}
                  </button>
                </div>
              </div>
              <div *ngSwitchDefault [ngStyle]="col.style">
                {{dataRow[col.field]}}
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  `
})
export class Ng2TableComponent implements OnChanges {
  @Input() tableData: Array<any>;
  @Input() tableConfig: ITableConfig;
  @Output() selectedItem = new EventEmitter();
  @Output() buttonClicked = new EventEmitter();

  public tableConfigCopy;
  public isAnyFieldSearchable;
  public activeRow;

  public sorter = new Sorter();

  public ngOnChanges (changes) {
    // add search terms etc to this one
    // the only problem would be if we want to send in a new tableConfig
    // via the @Input() since we're now working with a copy
    this.tableConfigCopy = this.tableConfigCopy || Object['assign']({}, this.tableConfig)

    this.isAnyFieldSearchable = this.tableConfigCopy.columnDefs.some(col => {
      return !!col.search
    })

    // TODO when updating content, remember which column was clicked for sorting
    // atm, we reset the sorting when updating the content
    if (changes.tableData.currentValue.length > 0) {
      let sortDefaultCol = this.tableConfigCopy.columnDefs.find(col => {
        return col.sortDefault
      })
      if (sortDefaultCol) {
        this.sortCol(sortDefaultCol, true)
      }
    }
  }

  public selectRow (dataRow, rowIndex) {
    this.activeRow = rowIndex
    this.selectedItem.emit(dataRow)
  }

  // Custom button clicked
  public buttonFn ($event, colSpec, row) {
    $event.stopPropagation() // don't want to trigger "selectRow" as well
    this.buttonClicked.emit({colSpec, row})
  }

  public searchUpdate ($event) {
    let foundColDef = this.tableConfigCopy.columnDefs.find(colDef => {
      return colDef.field === $event.field
    })
    foundColDef.searchTerm = $event.value
    this.tableConfigCopy = Object['assign']({}, this.tableConfigCopy)
  }

  public sortCol (col, dontToggle) {
    this.tableData = this.sorter.sort(col.field, this.tableData, dontToggle)
  }
}
