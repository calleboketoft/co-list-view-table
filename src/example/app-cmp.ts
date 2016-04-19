import {Component} from 'angular2/core'
import {CoListViewTableCmp} from '../co-list-view-table/co-list-view-table-cmp'

@Component({
  selector: 'app',
  directives: [CoListViewTableCmp],
  template: `
    <co-list-view-table
      [tableData]='myData'
      [tableConfig]='myConfig'
      (selected)='selectedItem($event)'>
    </co-list-view-table>

    <br><br>

    <co-list-view-table
      [tableData]='myData'
      [tableConfig]='minimalConfig'
      (selected)='selectedItem($event)'>
    </co-list-view-table>
  `
})
export class AppCmp {
  public myData = [
    {
      userId: '1',
      userName: 'Carl',
      nickName: 'Calle'
    },
    {
      userId: '2',
      userName: 'Boke',
      nickName: 'G'
    },
    {
      userId: '3',
      userName: 'Bubba',
      nickName: 'Bullen'
    }
  ];
  private myConfig = {
    columnDefs: [
      {
        field: 'userId',
        displayName: 'ID'
      },
      {
        field: 'userName',
        displayName: 'Name',
        search: true
      },
      {
        field: 'nickName',
        displayName: 'Nickname',
        search: true
      }
    ]
  };

  private minimalConfig = {
    columnDefs: [
      {field: 'userId'},
      {field: 'userName'}
    ]
  }
  private selectedItem (item) {
    console.log('clicked item:', item)
  }
}
