import { Component } from '@angular/core'
import { exampleData } from './example.data'
import { TableConfigModel } from '../../index'

@Component({
  selector: 'app',
  template: `
    <button class="btn btn-secondary btn-sm"
      (click)="toggleTable()">
      Toggle table
    </button>
    <button class="btn btn-secondary btn-sm"
      (click)="reorganizeContent()">
      Reorganize content and remove random item
    </button>

    <br><br>

    <!-- Set the height of the table content on a wrapping div -->
    <div style="height: 320px;" *ngIf="showTable">
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
  public showTable = true
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

  public toggleTable () {
    this.showTable = !this.showTable
  }
  public reorganizeContent () {
    let order = this.getRandomInt(0, 1)
    let dataCopy = exampleData.map((item) => {
      return Object.assign({}, item)
    })
    dataCopy.sort((item1, item2) => {
      if (item1.userId === item2.userId) {
        return 0
      } else if (item1.userId > item2.userId) {
        return order === 1 ? 1 : -1
      } else {
        return order === 1 ? -1 : 1
      }
    })
    dataCopy.splice(this.getRandomInt(1, 7), 1)
    this.myData = dataCopy
  }
  public getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
