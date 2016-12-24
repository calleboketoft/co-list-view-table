import { Component } from '@angular/core'
import { exampleData } from './example-table.data'
import { exampleTableConfig } from './example-table.config'

@Component({
  selector: 'app',
  template: `
    <button class="btn btn-secondary btn-sm"
      (click)="toggleTable()">
      Toggle table
    </button>
    <button class="btn btn-secondary btn-sm"
      (click)="reorganizeContent()">
      Reorganize content and remove 2 random items
    </button>

    <br><br>

    <!-- Set the height of the table content on a wrapping div -->
    <div style="height: 340px;" *ngIf="showTable">
      <ng2-table
        [tableData]="myData"
        [tableConfig]="myConfig"
        (rowClicked)="rowClicked($event)"
        (cellItemClicked)="cellItemClicked($event)"
        (tableConfigUpdated)="tableConfigUpdated($event)">
      </ng2-table>
    </div>
  `
})
export class AppComponent {
  public showTable = true
  public myData = exampleData
  public myConfig = exampleTableConfig

  public rowClicked (item) {
    console.log('(rowClicked):', item)
  }
  public cellItemClicked (options) {
    console.log('(cellItemClicked):', options)
  }
  public tableConfigUpdated (config) {
    console.log('(tableConfigUpdated):', config)
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
    dataCopy.splice(this.getRandomInt(0, 4), 1)
    dataCopy.splice(this.getRandomInt(0, 3), 1)
    this.myData = dataCopy
  }
  public getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
