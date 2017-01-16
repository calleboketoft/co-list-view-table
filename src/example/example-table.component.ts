import { Component, ViewChild } from '@angular/core'
import { exampleData } from './example-table.data'
import { exampleTableConfig } from './example-table.config'
import { Ng2TableComponent } from '../../'

@Component({
  selector: 'example-table-component',
  template: `
    <button class="btn btn-secondary btn-sm"
      (click)="toggleTable()">
      Toggle table
    </button>
    <button class="btn btn-secondary btn-sm"
      (click)="reorganizeContent()">
      Reorganize content and remove 2 random items
    </button>
    <button class="btn btn-secondary btn-sm"
      (click)="activateRow()">
      Activate row
    </button>
    <button class="btn btn-secondary btn-sm"
      *ngIf="tableConfigUpdatedCounter > 0"
      (click)="setTableConfigToUpdated()">
      Set tableConfig to updated
      {{tableConfigUpdatedCounter}}
    </button>
    <span>
    </span>

    <br><br>

    <!-- Set the height of the table content on a wrapping div -->
    <div style="height: 340px;" *ngIf="showTable">
      <ng2-table
        [tableData]="tableData"
        [tableConfig]="tableConfig"
        (rowClicked)="rowClicked($event)"
        (cellItemClicked)="cellItemClicked($event)"
        (tableConfigUpdated)="tableConfigUpdated($event)">
      </ng2-table>
    </div>
  `
})
export class ExampleTableComponent {
  public showTable = true
  public tableData = exampleData
  public tableConfig = exampleTableConfig
  public tableConfigUpdatedCounter = 0
  public updatedTableConfig
  public rowToActivate

  @ViewChild(Ng2TableComponent) public ng2TableComponent: Ng2TableComponent

  public rowClicked (options) {
    console.log('(rowClicked):', options)
  }
  public cellItemClicked (options) {
    console.log('(cellItemClicked):', options)
  }
  public tableConfigUpdated (config) {
    console.log('(tableConfigUpdated):', config)
    this.tableConfigUpdatedCounter++
    this.updatedTableConfig = config
  }

  public toggleTable () {
    this.showTable = !this.showTable
  }
  public setTableConfigToUpdated () {
    this.tableConfig = this.updatedTableConfig
  }
  public activateRow () {
    this.ng2TableComponent.activateRow({
      rowIndex: this.getRandomInt(0, this.tableData.length - 1)
    })
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
    this.tableData = dataCopy
  }
  public getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
