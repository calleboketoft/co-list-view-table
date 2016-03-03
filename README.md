# co-list-view-table

Simple table for list views

## Run the example code

- `npm install`
- `npm start` serve the files
- navigate to `localhost:3000` in web browser


## How to use
```javascript
npm install --save co-list-view-table
```

HTML Template:
```html
<co-list-view-table-cmp
  [tableData]='myData'
  [tableConfig]='myConfig'
  (selected)='selectedItem($event)'>
</co-list-view-table-cmp>
```

JavaScript:
```javascript
import {CoListViewTableCmp} from 'co-list-view-table/co-list-view-table'

myData = [
  {userId: '1', userName: 'Calle'},
  {userId: '2', userName: 'Nisse'}
]
myConfig = {
  columnDefs: [
    {field: 'userId', displayName: 'ID'},
    {field: 'userName', displayName: 'Name'}
  ]
}
function selectedItem (item) {
  console.log('clicked item:', item)
}
```
