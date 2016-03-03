import {Component} from 'angular2/core'
import {CoListViewTableCmp} from '../co-list-view-table/co-list-view-table-cmp'

@Component({
  selector: 'app',
  directives: [CoListViewTableCmp],
  template: `
    <co-list-view-table-cmp
      [tableData]='myData'
      [tableConfig]='myConfig'
      (selected)='selectedItem($event)'>
    </co-list-view-table-cmp>
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
