export interface TableConfigModel {
  columnDefs: TableColModel[]
  tableNgClass?: any
  tableNgStyle?: any
  rowNgStyle?: any
  rowNgStylePredicate?: PredicateFunc
  rowNgClass?: any
  rowNgClassPredicate?: PredicateFunc
}

export interface TableColModel {
  field?: string
  width?: string
  search?: boolean
  sortDefault?: boolean
  sortDefaultReverse?: boolean
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
}

export interface PredicateFunc {
  (rowData: any, rowIndex: number, activeRow: number): any
}
