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
    tbody tr:hover {
      cursor: pointer;
    }
    th span:hover {
      cursor: pointer;
    }
    .table thead th {
      vertical-align: top;
    }
    .search-wrap {
      margin-top: 8px;
    }
  `],
  template: `
    <table class='table table-striped table-hover'>
      <thead>
        <tr>
          <th *ngFor='#col of tableConfig.columnDefs; #i = index'>
            <span (click)='sortCol(col, i)'>
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
          *ngFor='#dataRow of tableData | search: tableConfigCopy'
          (click)='selected.emit(dataRow)'>
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
