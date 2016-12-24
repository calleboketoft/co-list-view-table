import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core'
import { Sorter } from './sorter.service'
import { TableConfigModel } from './table-config.model'

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
      overflow: auto;
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

    /**
     * Preserve newlines
     * http://stackoverflow.com/questions/10937218/how-to-show-multiline-text-in-a-table-cell
     *
     * And let word-wrap still work
     * http://stackoverflow.com/a/4413129
     */
    td > div > .cell-content {
      white-space: pre-wrap;
    }
  `],
  template: `
    <table
      [ngClass]="getNgThing('table', 'class', tableConfig)"
      [ngStyle]="getNgThing('table', 'style', tableConfig)">
      <thead>
        <tr>
          <th *ngFor="let col of tableConfig.columnDefs"
            [style.width]="col.width"
            [ngClass]="getNgThing('header', 'class', tableConfig, null, null, null, col)"
            [ngStyle]="getNgThing('header', 'style', tableConfig, null, null, null, col)">
            <span (click)="sortCol(col)">
              {{col.headerText || col.field}}
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
          *ngFor="let rowData of tableData | search: tableConfigCopy; let rowIndex = index; let activeRowz = activeRow"
          [ngClass]="getNgThing('row', 'class', tableConfig, rowData, rowIndex, activeRow)"
          [ngStyle]="getNgThing('row', 'style', tableConfig, rowData, rowIndex, activeRow)"
          (click)="selectRow(rowData, rowIndex)">
          <td *ngFor="let col of tableConfig.columnDefs" [style.width]="col.width">
            <div [ngSwitch]="col.cellItem?.elementType">

              <!-- BUTTON -->
              <div *ngSwitchCase="'button'">
                <div
                  [ngClass]="getNgThing('cell', 'class', tableConfig, rowData, rowIndex, activeRow, col)"
                  [ngStyle]="getNgThing('cell', 'style', tableConfig, rowData, rowIndex, activeRow, col)">
                  <button type="button"
                    [ngClass]="getNgThing('cellItemButton', 'class', tableConfig, rowData, rowIndex, activeRow, col)"
                    [ngStyle]="getNgThing('cellItemButton', 'style', tableConfig, rowData, rowIndex, activeRow, col)"
                    (click)="buttonFn($event, col, rowData)"
                    >{{col.cellItem?.staticContent || rowData[col.field]}}</button>
                </div>
              </div>

              <!-- DIV -->
              <div *ngSwitchCase="'div'">
                <div
                  [ngClass]="getNgThing('cell', 'class', tableConfig, rowData, rowIndex, activeRow, col)"
                  [ngStyle]="getNgThing('cell', 'style', tableConfig, rowData, rowIndex, activeRow, col)">
                  <div
                    [ngClass]="getNgThing('cellItemDiv', 'class', tableConfig, rowData, rowIndex, activeRow, col)"
                    [ngStyle]="getNgThing('cellItemDiv', 'style', tableConfig, rowData, rowIndex, activeRow, col)"
                    (click)="buttonFn($event, col, rowData)"
                    >{{col.cellItem?.staticContent || rowData[col.field]}}</div>
                </div>
              </div>

              <!-- NO ITEM -->
              <div *ngSwitchDefault class="cell-content"
                  [ngClass]="getNgThing('cell', 'class', tableConfig, rowData, rowIndex, activeRow, col)"
                  [ngStyle]="getNgThing('cell', 'style', tableConfig, rowData, rowIndex, activeRow, col)"
                >{{rowData[col.field]}}</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  `
})
export class Ng2TableComponent implements OnChanges {
  @Input() tableData: Array<any>
  @Input() tableConfig: TableConfigModel
  @Output() rowClicked = new EventEmitter()
  @Output() cellItemClicked = new EventEmitter()
  @Output() tableConfigUpdated = new EventEmitter()

  public tableConfigCopy
  public isAnyFieldSearchable
  public activeRow
  public rowClickStyles = false

  public sorter = new Sorter()

  public ngOnChanges (changes) {
    // add search terms etc to this one
    // the only problem would be if we want to send in a new tableConfig
    // via the @Input() since we're now working with a copy

    // columnDefs need to be deep copied
    let columnDefsCopy = this.tableConfig.columnDefs.map(colDef => {
      return Object.assign({}, colDef)
    })

    this.tableConfigCopy = this.tableConfigCopy || Object.assign({}, this.tableConfig, {
      columnDefs: columnDefsCopy
    })

    this.isAnyFieldSearchable = this.tableConfigCopy.columnDefs.some(col => {
      return !!col.search
    })

    // TODO when updating content, remember which column was clicked for sorting
    // atm, we reset the sorting when updating the content
    if (changes.tableData.currentValue.length > 0) {
      this.tableConfigCopy.columnDefs.find(col => {
        if (col.sortDefault) {
          this.sortCol(col, true)
        } else if (col.sortDefaultReverse) {
          // Sorting again to reverse the sorting
          this.sortCol(col, false)
          this.sortCol(col, false)
        }
      })
    }
  }

  public selectRow (dataRow, rowIndex) {
    this.activeRow = rowIndex
    this.rowClicked.emit(dataRow)
  }

  // Custom button clicked
  public buttonFn ($event, colSpec, row) {
    $event.stopPropagation() // don't want to trigger "selectRow" as well
    this.cellItemClicked.emit({colSpec, row})
  }

  public searchUpdate ($event) {
    let foundColDef = this.tableConfigCopy.columnDefs.find(colDef => {
      return colDef.field === $event.field
    })
    // Add search term to the colDef for the field being searched
    foundColDef.searchTerm = $event.value
    let updatedTableConfigCopy = Object.assign({}, this.tableConfigCopy)
    this.tableConfigCopy = updatedTableConfigCopy
    this.tableConfigUpdated.emit(updatedTableConfigCopy)
  }

  public sortCol (col, dontToggle) {
    this.tableData = this.sorter.sort(col.field, this.tableData, dontToggle)
  }

  public getNgThing (thingType, classOrStyle, tableConfig, rowData, rowIndex, activeRow, col?) {
    switch (thingType + '-' + classOrStyle) {

      case 'table-class':
        return tableConfig['tableNgClass'] || 'table table-striped'

      case 'table-style':
        return tableConfig['tableNgStyle'] || ''

      case 'row-class':
        if (tableConfig['rowNgClassPredicate']) {
          return tableConfig['rowNgClassPredicate'](rowData, rowIndex, activeRow)
        }
        return tableConfig['rowNgClass'] || ''

      case 'row-style':
        if (tableConfig['rowNgStylePredicate']) {
          return tableConfig['rowNgStylePredicate'](rowData, rowIndex, activeRow)
        }
        return tableConfig['rowNgStyle'] || ''

      case 'cell-class':
        if (col['cellNgClassPredicate']) {
          return col['cellNgClassPredicate'](rowData, rowIndex, activeRow)
        }
        return col['cellNgClass'] || ''

      case 'cell-style':
        if (col['cellNgStylePredicate']) {
          return col['cellNgStylePredicate'](rowData, rowIndex, activeRow)
        }
        return col['cellNgStyle'] || ''

      case 'cellItemButton-class':
        if (col['cellItem']['cellItemNgClassPredicate']) {
          return col['cellItem']['cellItemNgClassPredicate'](rowData, rowIndex, activeRow)
        }
        return col['cellItem']['cellItemNgClass'] || ''

      case 'cellItemButton-style':
        if (col['cellItem']['cellItemNgStylePredicate']) {
          return col['cellItem']['cellItemNgStylePredicate'](rowData, rowIndex, activeRow)
        }
        return col['cellItem']['cellItemNgStyle'] || ''

      case 'cellItemDiv-class':
        if (col['cellItem']['cellItemNgClassPredicate']) {
          return col['cellItem']['cellItemNgClassPredicate'](rowData, rowIndex, activeRow)
        }
        return col['cellItem']['cellItemNgClass'] || ''

      case 'cellItemDiv-style':
        if (col['cellItem']['cellItemNgStylePredicate']) {
          return col['cellItem']['cellItemNgStylePredicate'](rowData, rowIndex, activeRow)
        }
        return col['cellItem']['cellItemNgStyle'] || ''

      case 'header-class':
        return col['headerNgClass'] || ''

      case 'header-style':
        return col['headerNgStyle'] || ''
    }
  }
}
