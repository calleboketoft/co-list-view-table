## 4.1.0 (2017-04-07)

* Add "dynamic cell type" feature. See example for usage.

## 4.0.0 (2017-03-30)

* Update Angular to v4

## 3.1.3 (2017-02-28)

* Fix filter input focus issue

## 3.1.2 (2017-02-28)

* Disable selecting table headers
* Fix sorting when there are two columns with staticContent

## 3.1.1 (2017-02-28)

* Place sorting carets within clickable header area
* add class "ng2-table-caret" to the carets for custom styling possibilities
* Thead size varies based on if tbody has scrollbar or not

## 3.1.0 (2017-02-27)

* Column sorting can be set to "unsorted" by clicking header multiple times
* Column headers have carets showing sorting order

## 3.0.0 (2017-01-16)

* rowClicked and cellItemClicked events have new signature
* @Output tableConfigChanged
* TableModel search -> filterEnabled
* TableModel searchTerm -> filterValue
* sortDefault -> sortDefault: 'asc'
* sortDefaultReverse -> sortDefault: 'desc'
* @Input filterPlaceholder
* activateRow public function to be used

Take a look at README.md and the example code for more details on the updates

## 2.0.6 (2016-12-23)

* Fixed column defaultSort option when reloading table
* now re-initializes search fields and sorting when instantiating table

## 2.0.3 (2016-12-07)

* Updated example to be loads nicer
* Added interface for PredicateFunc to be used in the tableConfig

## 2.0.2 (2016-12-07)

* Added license

## 2.0.1 (2016-12-06)

* FIX: colHeaderNgStyle -> headerNgStyle and colHeaderNgClass -> headerNgClass

## 2.0.0 (2016-12-06)

* BREAKING CHANGES: Pretty much the whole API of the component.
* Read the README.md for simple instructions and check out the example code for advanced use.

## 1.3.3 (2016-12-06)

* Add property rowClassPredicate to add a style to a cell conditionally

## 1.3.2 (2016-12-05)

* Set button styles with config: {buttonStyle: {'width': '100px'}}

## 1.3.1 (2016-12-05)

* The property rowClick name changed to rowClickStyles

## 1.3.0 (2016-12-05)

* BREAKING CHANGE: the tableConfig param rowClick=true is now needed to get cursor 'pointer', class 'hover', and 'active' when clicked

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