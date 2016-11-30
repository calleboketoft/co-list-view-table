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