import {Component, Input, Output, EventEmitter} from 'angular2/core'

export interface ITableConfig {
  columnDefs: any
}

@Component({
  selector: 'co-list-view-table-cmp',
  styles: [`
    tr:hover {
      cursor: pointer;
    }
  `],
  template: `
    <table class='table'>
      <thead>
        <tr>
          <th *ngFor='#col of tableConfig.columnDefs'>
            {{col.displayName}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor='#dataRow of tableData' (click)='selected.emit(dataRow)'>
          <td *ngFor='#col of tableConfig.columnDefs'>
            {{dataRow[col.field]}}
          </td>
        </tr>
      </tbody>
    </table>
  `
})
export class CoListViewTableCmp {
  @Input() tableData: ITableConfig;
  @Input() tableConfig;
  @Output() selected = new EventEmitter();
}
