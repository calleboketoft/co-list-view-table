export interface TableConfigModel {
  columnDefs: TableColModel[]
  tableNgClass?: any
  tableNgStyle?: any
  rowNgStyle?: any
  rowNgStylePredicate?: PredicateFunc
  rowNgClass?: any
  rowNgClassPredicate?: PredicateFunc
  clickingRowActivatesRow?: boolean // default true
}

export interface TableColModel {
  field?: string
  width?: string
  filterEnabled?: boolean // default false
  filterValue?: string | number
  filterPlaceholder?: string
  sortDefault?: string // 'asc' or 'desc'
  sortAdvanced?: {
    count?: number
    direction: number
  }
  headerText?: string
  headerNgStyle?: any
  headerNgClass?: any
  cellNgStyle?: any
  cellNgStylePredicate?: PredicateFunc
  cellNgClass?: any
  cellNgClassPredicate?: PredicateFunc
  cellItem?: {
    elementType: string // 'button' or 'div'
    staticContent?: string // otherwise just wraps field value
    cellItemNgStyle?: any
    cellItemNgStylePredicate?: PredicateFunc
    cellItemNgClass?: any
    cellItemNgClassPredicate?: PredicateFunc
  }
  extraMetadata?: any // free data field
}

export interface PredicateFunc {
  (rowData: any, rowIndex: number, activeRow: number): any
}
