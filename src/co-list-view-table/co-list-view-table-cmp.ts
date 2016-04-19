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
          <th *ngFor='#col of tableConfig.columnDefs; #i = index'>
            <input type='text' [hidden]='!col.filtering'>
            <br>
            <span (click)='sortCol(col, i)'>
              {{col.displayName}}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor='#dataRow of displayTableData' (click)='selected.emit(dataRow)'>
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

  public displayTableData // sorted and filtered etc.

  ngOnInit () {
    this.displayTableData = [...this.tableData]
  }

  sortCol (col, index) {
    console.log('filtering: ' + col.filtering)
    console.log('field: ' + col.field)
    console.log('tableData: ')
    console.log(this.tableData)
    this.displayTableData = [...this.tableData]
    // Sort the tableData here
  }
}
