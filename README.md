# co-list-view-table

Simple table for list views

## Run the example code

- `npm install`
- `npm start` serve the files
- navigate to `localhost:3000` in web browser


## How to use

HTML Template:
```html
<list-view-table-cmp
  [tableData]='myData'
  [tableConfig]='myConfig'
  (selected)='selectedItem($event)'>
</list-view-table-cmp>
```

JavaScript:
```javascript
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
