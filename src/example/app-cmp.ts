import {Component} from '@angular/core'
import {CoListViewTableCmp} from '../co-list-view-table/co-list-view-table-cmp'
import {exampleData} from './example-data'

@Component({
  selector: 'app',
  directives: [CoListViewTableCmp],
  template: `
    <div style='height: 250px;'>
      <co-list-view-table-cmp
        [tableData]='myData'
        [tableConfig]='myConfig'
        (selected)='selectedItem($event)'>
      </co-list-view-table-cmp>
    </div>

    <br><br>

    <co-list-view-table-cmp
      [tableData]='myData'
      [tableConfig]='minimalConfig'
      (selected)='selectedItem($event)'>
    </co-list-view-table-cmp>
  `
})
export class AppCmp {
  public myData = exampleData;
  public myConfig = {
    columnDefs: [
      {
        field: 'userId',
        displayName: 'ID'
      },
      {
        field: 'userName',
        displayName: 'Name',
        search: true,
        sortDefault: true
      },
      {
        field: 'nickName',
        displayName: 'Nickname',
        search: true
      }
    ]
  };

  public minimalConfig = {
    columnDefs: [
      {
        field: 'userId'
      },
      {
        field: 'userName'
      }
    ]
  }
  private selectedItem (item) {
    console.log('clicked item:', item)
  }
}
