import { Component } from '@angular/core'
import { exampleData } from './example.data'
import { TableConfigModel } from '../../index'

@Component({
  selector: 'app',
  template: `
    <div style="height: 300px; margin-bottom: 25px;">
      <ng2-table
        [tableData]="myData"
        [tableConfig]="myConfig"
        (rowClicked)="rowClicked($event)"
        (cellItemClicked)="cellItemClicked($event)">
      </ng2-table>
    </div>

    <ng2-table
      [tableData]="myData"
      [tableConfig]="minimalConfig"
      (rowClicked)="rowClicked($event)">
    </ng2-table>
  `
})
export class AppComponent {
  public myData = exampleData
  public myConfig: TableConfigModel = {
    tableNgClass: 'table table-striped table-hover',
    rowNgStylePredicate: (rowData) => {
      return rowData.userId === '5' ? {'cursor': 'crosshair'} : {'cursor': 'pointer'}
    },
    rowNgClassPredicate: (rowData, rowIndex, activeRow) => {
      return rowIndex === activeRow ? ['table-active'] : ''
    },
    columnDefs: [
      {
        field: 'userId',
        headerText: 'ID',
        width: '100px'
      },
      {
        field: 'pet',
        headerText: 'Pet',
        cellItem: {
          elementType: 'div',
          cellItemNgClassPredicate: (rowData) => {
            return rowData.pet === 'beer' ? 'tag tag-warning' : 'tag tag-primary'
          }
        }
      },
      {
        field: 'userName',
        headerText: 'Name',
        search: true,
        sortDefaultReverse: true,
        cellNgStyle: { 'color': 'green' }
      },
      {
        field: 'nickName',
        headerText: 'Nickname',
        search: true,
        cellItem: {
          elementType: 'div',
          cellItemNgStyle: { 'width': '120px' },
          cellItemNgClass: 'btn btn-sm btn-info'
        }
      },
      {
        headerText: 'Delete',
        headerNgStyle: { 'text-align': 'center', 'color': 'orange' },
        cellItem: {
          elementType: 'button',
          staticContent: 'X',
          cellItemNgClass: 'btn btn-sm btn-danger'
        },
        cellNgStyle: { 'text-align': 'center' }
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
  public rowClicked (item) {
    console.log('clicked item:', item)
  }
  public cellItemClicked (options) {
    console.log(options)
  }
}
