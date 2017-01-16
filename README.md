# co-list-view-table

Simple table for list views

## Run the example code

- `npm install`
- `npm run build`
- `npm start`
- navigate to `localhost:3000` in web browser


## How to use

- Install module: `npm install --save @calle/ng2-table`
- Import module and register with your app component `import { Ng2TableModule } from '@calle/ng2-table'`
- Use the config interface `import { TableConfigModel } from '@calle/ng2-table'`

HTML Template:
```html
<ng2-table
  [tableData]="myData"
  [tableConfig]="myConfig"
  (rowClicked)="rowClicked($event)"
  (cellItemClicked)="cellItemClicked($event)">
</ng2-table>
```

JavaScript:
```javascript
myData = [
  { userId: '1', userName: 'Calle' },
  { userId: '2', userName: 'Nisse' }
]
myConfig: TableConfigModel = {
  columnDefs: [
    {
      field: 'userId',
      headerText: 'ID',
      sortDefault: true, // sort by this column upon init, "sortDefaultReverse"
                         // sorts this column in reverse order
      cellNgStyle: {
        'text-align':'right' // style the content of the cell
      },
      width: '100px' // set the width of the column
    },
    {
      field: 'userName',
      headerTitle: 'Name',
      search: true
    }
  ]
}
function rowClicked ({$event, columnDef, rowData, rowIndex}) {
  console.log('Original mouse event:', $event)
  console.log('Row data:', rowData)
  console.log('Row index:', rowIndex)
}

function cellItemClicked ({$event, columnDef, rowData, rowIndex}) {
  console.log('Original mouse event:', $event)
  console.log('Column definition:', columnDef)
  console.log('Row data:', rowData)
  console.log('Row index:', rowIndex)
}
```

Adding a button column:
```javascript
myConfig = {
  columnDefs: [
    {
      headerText: 'Super button',
      cellItem: {
        type: 'button',
        staticContent: 'XXX',
        cellItemNgClass: 'btn btn-sm'
      }
    }
  ]
}

function buttonClicked({columnDef, rowData}) {
  console.log('spec for column: ', columnDef)
  console.log('row data: ', rowData)
}
```
