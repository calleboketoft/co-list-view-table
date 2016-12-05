import { Component } from '@angular/core'
import { exampleData } from './example.data'

@Component({
  selector: 'app',
  template: `
    <div style="height: 300px;">
      <ng2-table
        [tableData]="myData"
        [tableConfig]="myConfig"
        (selectedItem)="selectedItem($event)"
        (buttonClicked)="buttonClicked($event)">
      </ng2-table>
    </div>

    <br><br>

    <ng2-table
      [tableData]="myData"
      [tableConfig]="minimalConfig"
      (selectedItem)="selectedItem($event)">
    </ng2-table>
  `
})
export class AppComponent {
  public myData = exampleData
  public myConfig = {
    rowClickStyles: true,
    columnDefs: [
      {
        field: 'userId',
        displayName: 'ID',
        width: '100px'
      },
      {
        field: 'userName',
        displayName: 'Name',
        search: true,
        sortDefaultReverse: true,
        styleCell: { 'color': 'green' }
      },
      {
        field: 'nickName',
        displayName: 'Nickname',
        type: 'button',
        config: {
          buttonStyle: {'width': '120px'},
          buttonClass: 'btn btn-sm btn-info'
        },
        search: true
      },
      {
        displayName: 'Delete',
        type: 'button',
        styleCell: { 'text-align': 'center' },
        styleHeader: { 'text-align': 'center', 'color': 'orange' },
        config: {
          buttonName: 'X',
          buttonClass: 'btn btn-sm btn-danger'
        }
      }
    ]
  }

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
