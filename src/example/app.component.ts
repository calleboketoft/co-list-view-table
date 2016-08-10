import {Component} from '@angular/core'
import {CoListViewTableComponent} from '../co-list-view-table/co-list-view-table.component'
import {exampleData} from './example.data'

@Component({
  selector: 'app',
  directives: [CoListViewTableComponent],
  template: `
    <div style="height: 300px;">
      <co-list-view-table-cmp
        [tableData]="myData"
        [tableConfig]="myConfig"
        (selected)="selectedItem($event)"
        (buttonClicked)="buttonClicked($event)">
      </co-list-view-table-cmp>
    </div>

    <br ><br >

    <co-list-view-table-cmp
      [tableData]="myData"
      [tableConfig]="minimalConfig"
      (selected)="selectedItem($event)">
    </co-list-view-table-cmp>
  `
})
export class AppComponent {
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
      },
      {
        displayName: 'Delete',
        type: 'button',
        config: {
          buttonName: 'X',
          buttonClass: 'btn btn-sm btn-danger'
        }
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
  public selectedItem (item) {
    console.log('clicked item:', item)
  }
  public buttonClicked (options) {
    console.log(options)
  }
}
