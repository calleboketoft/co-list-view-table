import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {Sorter} from './sorter'
import {SearchPipe} from './search-pipe'
import {SearchInput} from './search-input'

export interface ITableConfig {
  columnDefs: any
}

@Component({
  selector: 'co-list-view-table-cmp',
  pipes: [SearchPipe],
  directives: [SearchInput],
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
          <th *ngFor='#col of tableConfig.columnDefs; #colIndex = index'>
            <span (click)='sortCol(col, colIndex)'>
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
          *ngFor='#dataRow of tableData | search: tableConfigCopy; #rowIndex = index'
          (click)='selectRow(dataRow, rowIndex)'>
          <td *ngFor='#col of tableConfig.columnDefs'>
            {{dataRow[col.field]}}
          </td>
        </tr>
      </tbody>
    </table>
  `
})
export class CoListViewTableCmp {
  @Input() tableData: Array<any>;
  @Input() tableConfig: ITableConfig;
  @Output() selected = new EventEmitter();

  public tableConfigCopy;
  public isAnyFieldSearchable;
  public activeRow;

  sorter = new Sorter();

  ngOnInit () {
    // add search terms etc to this one
    // the only problem would be if we want to send in a new tableConfig
    // via the @Input() since we're now working with a copy
    this.tableConfigCopy = Object['assign']({}, this.tableConfig)

    this.isAnyFieldSearchable = this.tableConfigCopy.columnDefs.some(col => {
      return !!col.search
    })
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

  sortCol (col, index) {
    this.tableData = this.sorter.sort(col.field, this.tableData)
  }
}
