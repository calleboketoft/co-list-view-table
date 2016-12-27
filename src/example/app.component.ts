import { Component } from '@angular/core'
import { exampleData } from './example-table.data'
import { TableConfigModel } from '../../index'

@Component({
  selector: 'app',
  template: `
    <example-table-component>
    </example-table-component>

    <br><br>
    <button class="btn btn-secondary btn-sm" (click)="showMinimalTableFn()">
      Show minimal config example
    </button>

    <ng2-table
      *ngIf="showMinimalTable"
      [tableData]="exampleData"
      [tableConfig]="minimalTableConfig">
    </ng2-table>
  `
})
export class AppComponent {
  public exampleData = exampleData
  public showMinimalTable = false
  public minimalTableConfig: TableConfigModel = {
    columnDefs: [
      { field: 'userId' },
      { field: 'pet' },
      { field: 'userName' },
      { field: 'nickName' }
    ]
  }

  public showMinimalTableFn () {
    this.showMinimalTable = true
  }
}
