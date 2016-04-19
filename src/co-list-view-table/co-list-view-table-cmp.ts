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
              *ngIf='col.filtering'
              [field]='col.field'
              (term)='searchUpdate($event)'>
            </search-input-cmp>
            <br>
            <span (click)='sortCol(col, i)'>
              {{col.displayName}}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          *ngFor='#dataRow of tableData'
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

  sorter = new Sorter()

  searchUpdate ($event) {
    console.log($event)
  }

  sortCol (col, index) {
    this.sorter.sort(col.field, this.tableData)
  }
}
