import {Component, Input, Output, EventEmitter} from '@angular/core'
import {Sorter} from './sorter.service'
import {SearchPipe} from './search.pipe'
import {SearchInputComponent} from './search-input.component'

export interface ITableConfig {
  columnDefs: any
}

@Component({
  selector: 'co-list-view-table-cmp',
  pipes: [SearchPipe],
  directives: [SearchInputComponent],
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
    <table class='table table-striped table-hover'>
      <thead>
        <tr>
          <th *ngFor='let col of tableConfig.columnDefs'>
            <span (click)='sortCol(col)'>
              {{col.displayName || col.field}}
            </span>
            <div *ngIf='isAnyFieldSearchable' class='search-wrap'>
              <search-input-cmp
                *ngIf='col.search'
                [field]='col.field'
                (search)='searchUpdate($event)'>
              </search-input-cmp>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          [class.table-info]='rowIndex === activeRow'
          *ngFor='let dataRow of tableData | search: tableConfigCopy; let rowIndex = index'
          (click)='selectRow(dataRow, rowIndex)'>
          <td *ngFor='let col of tableConfig.columnDefs'>
            {{dataRow[col.field]}}
          </td>
        </tr>
      </tbody>
    </table>
  `
})
export class CoListViewTableComponent {
  @Input() tableData: Array<any>;
  @Input() tableConfig: ITableConfig;
  @Output() selected = new EventEmitter();

  public tableConfigCopy;
  public isAnyFieldSearchable;
  public activeRow;

  sorter = new Sorter();

  ngOnChanges (changes) {
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

  selectRow (dataRow, rowIndex) {
    this.activeRow = rowIndex
    this.selected.emit(dataRow)
  }

  searchUpdate ($event) {
    let foundColDef = this.tableConfigCopy.columnDefs.find(colDef => {
      return colDef.field === $event.field
    })
    foundColDef.searchTerm = $event.value
    this.tableConfigCopy = Object['assign']({}, this.tableConfigCopy)
  }

  sortCol (col, dontToggle) {
    this.tableData = this.sorter.sort(col.field, this.tableData, dontToggle)
  }
}
