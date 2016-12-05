## 1.3.0 (2016-12-05)

* BREAKING CHANGE: table rows need the config param rowClick=true to get cursor 'pointer', class 'hover', and 'active' when clicked

## 1.2.2 (2016-11-30)

* use pre-wrap instead of pre to preserve whitespace so word-wrap can still be used

## 1.2.1 (2016-11-30)

* preserve whitespace in cell content

## 1.2.0 (2016-11-29)

* changed cell style property from "style" to "styleCell":

Previously:
```javascript
columnDefs: [
    {
      field: 'myId',
      style: { 'color': 'blue' }
    }
]
```

Now:
```javascript
columnDefs: [
    {
      field: 'myId',
      styleCell: { 'color': 'blue' }
    }
]
```

* added column header styling property

```javascript
columnDefs: [
  {
    field: 'myId',
    styleHeader: { 'color': 'blue' }
  }
]
```

* added default column sorting option "sortDefaultReverse"