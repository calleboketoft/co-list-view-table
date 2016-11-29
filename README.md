# co-list-view-table

Simple table for list views

## Run the example code

- `npm install`
- `npm start` serve the files
- navigate to `localhost:3000` in web browser


## How to use

- Install module: `npm install --save @calle/ng2-table
- Import module and register with your app component `import { Ng2TableModule } from '@calle/ng2-table'`

HTML Template:
```html
<ng2-table
  [tableData]='myData'
  [tableConfig]='myConfig'
  (selected)='selectedItem($event)'>
</ng2-table>
```

JavaScript:
```javascript
myData = [
  { userId: '1', userName: 'Calle' },
  { userId: '2', userName: 'Nisse' }
]
myConfig = {
  columnDefs: [
    {
      field: 'userId',
      displayName: 'ID',
      sortDefault: true, // sort by this column upon init, "sortDefaultReverse"
                         // sorts this column in reverse order
      styleCell: {
        'text-align':'right' // style the content of the cell
      },
      width: '100px' // set the width of the column
    },
    {
      field: 'userName',
      displayName: 'Name',
      search: true
    }
  ]
}
function selectedItem (item) {
  console.log('clicked item:', item)
}
```

Adding a button column:
```javascript
myConfig = {
  columnDefs: [
    {
      displayName: 'Buttons',
      type: 'button',
      config: {
        buttonName: 'XXX',
        buttonClass: 'btn btn-sm'
      },
      styleCell: {
        'text-align': 'center'
      }
    }
  ]
}

function buttonClicked({colSpec, row}) {
  console.log('spec for column: ', colSpec)
  console.log('row data: ', row)
}
```
