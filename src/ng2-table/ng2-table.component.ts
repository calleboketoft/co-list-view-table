import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core'
import { tableDataSort } from './sorter.service'
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
          <!-- must render from tableConfig so the table don't re-render all the
               time when tableConfigCopy is updated -->
          <th *ngFor="let col of tableConfig.columnDefs"
            [style.width]="col.width"
            [ngClass]="getNgThing('header', 'class', tableConfig, null, null, null, col)"
            [ngStyle]="getNgThing('header', 'style', tableConfig, null, null, null, col)">
            <span (click)="colHeaderSortClicked(col)">
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

  public copyTableConfig (tableConfig) {
    // columnDefs need to be deep copied
    let columnDefsCopy = tableConfig.columnDefs.map(colDef => {

      // sortAdvanced needs to be deep copied
      let copiedSortAdvanced = colDef.sortAdvanced
        ? Object.assign({}, colDef.sortAdvanced) : null
      let copiedColDef = Object.assign({}, colDef)
      if (copiedSortAdvanced) {
        copiedColDef.sortAdvanced = copiedSortAdvanced
      }
      return copiedColDef
    })

    let tableConfigCopy = Object.assign({}, tableConfig, {
      columnDefs: columnDefsCopy
    })
    return tableConfigCopy
  }

  public ngOnChanges (changes) {
    // add search terms etc to this one
    // the only problem would be if we want to send in a new tableConfig
    // via the @Input() since we're now working with a copy
    this.tableConfigCopy = this.copyTableConfig(this.tableConfig)

    this.isAnyFieldSearchable = this.tableConfigCopy.columnDefs.some(colDef => {
      return !!colDef.search
    })

    // re-apply sorting when updating data in table
    if (changes.tableData.currentValue.length > 0) {
      let sortAdvanced = this.tableConfigCopy.columnDefs.find(colDef => {
        return !!colDef.sortAdvanced
      })

      // sortAdvanced takes precedence in sorting
      if (sortAdvanced) {
        // there might be multiple columns with advanced sort
        this.sortColsAdvanced(this.tableConfigCopy.columnDefs)

      // if no sortAdvanced is present, look for basicSort
      } else {
        let basicSortColIndex = this.tableConfigCopy.columnDefs.findIndex(colDef => {
          return colDef.sortDefault || colDef.sortDefaultReverse
        })
        if (basicSortColIndex !== -1) {
          let colToSort = this.tableConfigCopy.columnDefs[basicSortColIndex]

          colToSort.sortAdvanced = {
            count: 1,
            // convert the basic sort to the opposite sorting direction of the
            // default sort since the colHeaderSortClicked reverses the direction by default
            direction: colToSort.sortDefault ? 1 : -1
          }
          this.tableData = tableDataSort(colToSort.field, this.tableData, colToSort.sortAdvanced.direction)
        }
      }
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
    // NOTE not 100% sure why I have to do this
    let updatedTableConfigCopy = this.copyTableConfig(this.tableConfigCopy)
    this.tableConfigCopy = updatedTableConfigCopy
    this.tableConfigUpdated.emit(updatedTableConfigCopy)
  }

  public sortColsAdvanced (columnDefs) {
    // go through all columns and figure out sorting order based on
    // "sortAdvanced.count". Then call "tableDataSort" in the correct order
    let columnsToApplySorting = columnDefs.filter(colDef => {
      return !!colDef.sortAdvanced
    })
    columnsToApplySorting.sort((a, b) => {
      if (a.sortAdvanced.count < b.sortAdvanced.count) {
        return -1
      }
      if (a.sortAdvanced.count > b.sortAdvanced.count) {
        return 1
      }
      // a must be equal to b
      return 0
    })

    // sort all the columns with sortAdvanced, in order
    this.tableData = columnsToApplySorting.reduce((mem, curr) => {
      mem = tableDataSort(curr.field, mem, curr.sortAdvanced.direction)
      return mem
    }, this.tableData)
  }

  public colHeaderSortClicked (col) {

    // The incoming col is from the original tableConfig, which we don't want
    // to modify. Find the col from the tableConfigCopy and modify that one instead
    let colInCopy = this.tableConfigCopy.columnDefs.find(colDef => {
      return col.field === colDef.field
    })

    // Find the current highest sort count. Every time a column header is clicked
    // for sorting, the counter gets increased. This can be used to create an
    // exact sort order based on multiple columns being sorted.
    let maxSortCount = this.tableConfigCopy.columnDefs.reduce((mem, curr) => {
      if (curr.sortAdvanced && curr.sortAdvanced.count > mem) {
        mem = curr.sortAdvanced.count
      }
      return mem
    }, 0)

    colInCopy.sortAdvanced = colInCopy.sortAdvanced || { }
    // Set the sort count to max + 1, this is the most recently pressed sort
    colInCopy.sortAdvanced.count = maxSortCount + 1
    // if the column sort has been pressed already, switch direction
    colInCopy.sortAdvanced.direction = colInCopy.sortAdvanced.direction ? - colInCopy.sortAdvanced.direction : 1

    // Update columnDef for sorted item
    let colDefIndexToReplace = this.tableConfigCopy.columnDefs.findIndex((colDef) => {
      return colDef.field === colInCopy.field
    })
    this.tableConfigCopy.columnDefs[colDefIndexToReplace] = colInCopy

    this.tableData = tableDataSort(colInCopy.field, this.tableData, colInCopy.sortAdvanced.direction)
    this.tableConfigUpdated.emit(this.copyTableConfig(this.tableConfigCopy))
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
