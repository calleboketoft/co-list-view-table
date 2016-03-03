import {Component} from 'angular2/core'
import {ListViewTableCmp} from '../co-list-view-table/co-list-view-table'

@Component({
  selector: 'app',
  directives: [ListViewTableCmp],
  template: `
    <list-view-table-cmp
      [tableData]='myData'
      [tableConfig]='myConfig'
      (selected)='selectedItem($event)'>
    </list-view-table-cmp>
  `
})
export class AppCmp {
  public myData = [
    {userId: '1', userName: 'Calle'},
    {userId: '2', userName: 'Nisse'}
  ];
  private myConfig = {
    columnDefs: [
      {field: 'userId', displayName: 'ID'},
      {field: 'userName', displayName: 'Name'}
    ]
  };
  private selectedItem (item) {
    console.log('clicked item:', item)
  }
}
