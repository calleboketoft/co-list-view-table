import { Component } from '@angular/core'
import { exampleData } from './example.data'

@Component({
  selector: 'app',
  template: `
    <div style="height: 300px;">
      <ng2-table
        [tableData]="myData"
        [tableConfig]="myConfig"
        (selected)="selectedItem($event)"
        (buttonClicked)="buttonClicked($event)">
      </ng2-table>
    </div>

    <br ><br >

    <ng2-table
      [tableData]="myData"
      [tableConfig]="minimalConfig"
      (selected)="selectedItem($event)">
    </ng2-table>
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
