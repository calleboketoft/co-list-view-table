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
    tr:hover {
      cursor: pointer;
    }
  `],
  template: `
    <table class='table table-striped'>
      <thead>
        <tr>
          <th *ngFor='#col of tableConfig.columnDefs; #i = index'>
            <search-input-cmp
              *ngIf='col.search'
              [field]='col.field'
              (search)='searchUpdate($event)'>
            </search-input-cmp>
            <br *ngIf='col.search'>
            <span (click)='sortCol(col, i)'>
              {{col.displayName || col.field}}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          *ngFor='#dataRow of tableDataCopy | search: tableConfigCopy'
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
  public tableDataCopy;

  sorter = new Sorter();

  ngOnInit () {
    // add search terms etc to this one
    this.tableConfigCopy = Object['assign']({}, this.tableConfig)
    this.tableDataCopy = this.tableData.map(i => Object['assign']({}, i))
  }

  searchUpdate ($event) {
    let foundColDef = this.tableConfigCopy.columnDefs.find(colDef => {
      return colDef.field === $event.field
    })
    foundColDef.searchTerm = $event.value
    this.tableConfigCopy = Object['assign']({}, this.tableConfigCopy)
  }

  sortCol (col, index) {
    this.tableDataCopy = this.sorter.sort(col.field, this.tableDataCopy)
  }
}
