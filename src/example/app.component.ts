import { Component } from '@angular/core'
import { exampleData } from './example.data'
import { TableConfigModel } from '../../index'

@Component({
  selector: 'app',
  template: `
    <!-- Set the height of the table content on a wrapping div -->
    <div style="height: 340px;">
      <ng2-table
        [tableData]="myData"
        [tableConfig]="myConfig"
        (rowClicked)="rowClicked($event)"
        (cellItemClicked)="cellItemClicked($event)">
      </ng2-table>
    </div>
  `
})
export class AppComponent {
  public myData = exampleData
  public myConfig: TableConfigModel = {
    // the following three properties create a "clickable row" look
    // and highlights the most recently clicked row in the table
    tableNgClass: 'table table-striped table-hover',
    rowNgStyle: {'cursor': 'pointer'},
    rowNgClassPredicate: (rowData, rowIndex, activeRow) => {
      return rowIndex === activeRow ? ['table-active'] : ''
    },
    columnDefs: [
      {
        field: 'userId',
        headerText: 'ID',
        headerNgClass: 'text-muted',
        width: '100px'
      },
      {
        field: 'pet',
        headerText: 'Pet',
        cellItem: {
          // elementType can be either 'div' or 'button'
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
        cellNgStyle: { 'font-weight': 'bold' }
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
        // field isn't required when having a cellItem
        headerText: 'Delete',
        headerNgStyle: { 'text-align': 'center', 'color': 'red' },
        cellNgStyle: { 'text-align': 'center' },
        cellItem: {
          elementType: 'button',
          staticContent: 'Danger',
          cellItemNgClass: 'btn btn-sm btn-danger'
        }
      }
    ]
  }

  public rowClicked (item) {
    console.log('clicked item:', item)
  }
  public cellItemClicked (options) {
    console.log('Cell item clicked:', options)
  }
}
